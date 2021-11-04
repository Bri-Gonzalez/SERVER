class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_comment, only: [:update, :destroy]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments, include: [user: { only: ['username'] }]
  end

  # GET /comments/1
  def show
    render json: @comment, include: [user: { only: ['username'] }]
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user

    if @comment.save
      render json: @comment, include: [user: { only: ['username'] }], status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def set_user_comment
    @server = @current_user.comments.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def comment_params
    params.require(:comment).permit(:text, :post_id, :user_id)
  end
end
