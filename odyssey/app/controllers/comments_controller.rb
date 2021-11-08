class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  
  #GET /comments
  def index
    @comment = Comment.all
    render json: @comment
  end

  # GET /comments/1
  def show
    render json: @comment
  end

# POST /comments
  def create
    @comment = Comment.create!(content: comment_params[:content], post_id: comment_params[:post_id], user_id: 10)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    p('updating record')
    p(comment_params[:content])
    comment = Comment.where(id: params[:id])
    p(comment)
    comment.update(content: comment_params[:content])
    # comment.content = comment_params[:content]
    # comment.save
  end

  # DELETE /comments/1
  def destroy
    p('testing delete function')
    p(params)
    p('test2')
    Comment.where(id: params[:id]).delete_all
    render json: { message: 'order 66.'}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :user_id, :post_id)
    end
end