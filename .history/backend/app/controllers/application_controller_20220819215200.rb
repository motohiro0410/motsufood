class ApplicationController < ActionController::API

      # 外部からのpostリクエストをCSRFから保護
      def protect_from_forgery
      end
end
