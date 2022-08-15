module Api
  module V1
    class UsersController < ApplicationController

      def index
        users = User.all
        render json: users, status: 200
      end

      def show
      end

      def new
        @user = User.new
      end

      def create
        # new(todo_params):new(params[:user]の代わりに使用→web経由でuser情報が外部に晒されないtあめ)
        @user = User.new(user_params)
        if @user.save
          render json: @user
        else
          render 'new'
        end
      end

      def update
        @user = User.find(params[:id])
        if @user.update(user_params)
          render json: @user
        else
          render json: @user.errors, status: 422
        end
      end

      def destroy
        @user = User.find(params[:id])
        if @user.destroy
          head :no_content
        else
          render json: { error: "Failed to destroy" }, status: 422
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
