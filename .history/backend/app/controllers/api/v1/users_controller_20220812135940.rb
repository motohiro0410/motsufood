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
      else
      end

    end
  end
end
