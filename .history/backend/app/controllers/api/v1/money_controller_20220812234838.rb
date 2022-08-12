module Api
  module V1
    class MoneyController < ApplicationController

      def create
        @user = User.find(params[:id])
        @money = @user.money.build
        if @money.save
          render json: @money, status: 200
        else
          render json: @money.errors, status: 422
      end
    end
  end
end