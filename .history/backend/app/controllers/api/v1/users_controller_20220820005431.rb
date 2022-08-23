module Api
  module V1
    class UsersController < ApplicationController

      before_action :set_user, only: [:destroy, :update, :edit]

      def index
        users = User.all
        render json: users, status: 200
      end

      def new
        @user = User.new
      end

      def edit
      end

      def create
        # new(todo_params):new(params[:user]の代わりに使用→web経由でuser情報が外部に晒されないため)
        @user = User.new(user_params)
        if @user.save
          render json: @user
        else
          render json: { error: "Failed to create" }, status: 422
        end
      end

      def update
        if @user.update(user_params)
          render json: @user
        else
          render json: @user.errors, status: 422
        end
      end

      def destroy
        if @user.destroy
          head :no_content
        else
          render json: { error: "Failed to destroy" }, status: 422
        end
      end

      def set_user
        @user = User.find(params[:id])
      end

      private
        # passwordも追加予定
        def user_params
          params.permit(:name, :email, :password, :password_confirmation)
        end
    end
  end
end
