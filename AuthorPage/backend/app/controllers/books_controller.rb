class BooksController < ApplicationController
  # Include this to generate image URLs
  include Rails.application.routes.url_helpers

  def index
    @books = Book.all
    # We map over books to append the 'cover_url' manually
    render json: @books.map { |book| book_with_url(book) }
  end

  def show
    @book = Book.find(params[:id])

    # 1. Generate the JSON with the associations INCLUDED
    book_data = @book.as_json(include: [:characters, :settings, :worldbuilding])

    # 2. Manually add the real image URL
    if @book.cover.attached?
      book_data['cover_url'] = url_for(@book.cover)
    else
      # Fallback to the old column if no file is attached
      book_data['cover_url'] = @book.attributes['cover_url']
    end

    render json: book_data
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Book not found' }, status: :not_found
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: book_with_url(@book), status: :created
    else
      render json: { error: @book.errors.full_messages.join(", ") }, status: :unprocessable_entity
    end
  end

  def update
    @book = Book.find(params[:id])
    if @book.update(book_params)
      render json: book_with_url(@book)
    else
      render json: { error: @book.errors.full_messages.join(", ") }, status: :unprocessable_entity
    end
  end

  def destroy
    @book = Book.find(params[:id])

    # attempt to destroy
    if @book.destroy
      head :no_content # Send 204 No Content (Success)
    else
      # If it fails (e.g., due to foreign key constraints), send the error
      render json: { error: @book.errors.full_messages.join(", ") }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Book not found' }, status: :not_found
  end

  private

  def book_params
    # 1. Removed .require(:book) because FormData is not nested
    # 2. Changed :cover_url to :cover (to accept the file)
    params.permit(:title, :description, :cover, :progress)
  end

  # Helper method to format the book JSON with the image URL
  def book_with_url(book)
    book.as_json.merge({
      cover_url: book.cover.attached? ? url_for(book.cover) : nil
    })
  end
end
