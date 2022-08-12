module Api
  module V1
    class NotEatingController < ApplicationController

      def create
        @user = User.find(params[:id])
        @not_eating = @user.build_not_eating
        if @no_eating.save
          render json: @not_eating, status: 200
        else
          render json: @not_eating.errors, status: 422
      end
    end
  end
end
