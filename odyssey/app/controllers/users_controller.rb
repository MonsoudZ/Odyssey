class UsersController < ApplicationController
  before_action :set_user, only: :update

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'), 
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }, status: :accepted
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :image_url, :password)
    end
end