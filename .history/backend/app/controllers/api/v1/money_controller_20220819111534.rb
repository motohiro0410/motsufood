module Api
  module V1
    class MoneyController < ApplicationController

      before_action :set_user, only: [:show, :create]

      def show
      end

      def create
        @user = User.find(params[:id])
        @money = @user.money.build
        if @money.save
          render json: @money, status: 200
        else
          render json: @money.errors, status: 422
      end
    end

    def set_user
      @user = User.find(params[:id])
    end
  end
end