module Api
  module V1
    class UsersController < ApplicationController

      def create
        @user = User.find(params[:id])
        @not_eating_count = @user.not_eating_count.build
      end
    end
  end
end
