module Api
  module V1
    class UsersController < ApplicationController

      def index
        users = User.all
        render json: {
          users: users
        }, status: :ok
      end

      def new
        @user = User.new
      end

      def create
        @user = User.new(params[:user])
        if @user.save
          render json: {
            user: user
          }
        else
          render json: {
            user.errors
          }, status: 422
        end
      end

      private
        # passwordも追加予定
        def user_params
          params.require(:user).permit(:name, :email)
        end
    end
  end
end
