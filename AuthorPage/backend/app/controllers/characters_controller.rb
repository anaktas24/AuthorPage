  class CharactersController < ApplicationController
    # POST /api/characters
    def create
      # We find the book first to ensure it exists
      book = Book.find(params[:character][:book_id])

      character = book.characters.new(character_params)

      if character.save
        render json: character, status: :created
      else
        render json: { error: character.errors.full_messages.join(", ") }, status: :unprocessable_entity
      end
    end

    # DELETE /api/characters/:id
    def destroy
      character = Character.find(params[:id])
      character.destroy
      head :no_content
    end

    private

    def character_params
      # Permit name, bio, and the book_id linking it to the book
      params.require(:character).permit(:name, :bio, :image, :book_id)
    end
  end
