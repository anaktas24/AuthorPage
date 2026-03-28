class PostsController < ApplicationController
  before_action :authenticate, only: [:create]

  def index
    @posts = Post.order(created_at: :desc)
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Post not found' }, status: :not_found
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end

  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      username == 'admin' && password == 'secret'
    end
  end
end