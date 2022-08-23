class ApplicationController < ActionController::API

  # 外部からのpostリクエストをCSRFから保護
  protect_from_forgery with::exception
end
