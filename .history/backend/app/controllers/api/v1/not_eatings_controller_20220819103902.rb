module Api
  module V1
    class NotEatingController < ApplicationController

      def create
        @user = User.find(params[:id])
        @not_eating_count = @user.build_not_eating
        if @not_eating_count.save
          render json: @not_eating_count, status: 200
        else
          render json: @not_eating_count.errors, status: 422
        end
      end
    end
  end
end
