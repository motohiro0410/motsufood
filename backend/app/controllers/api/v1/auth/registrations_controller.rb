# アカウント作成用コントローラー
class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController

  private

    # 悪意のあるリクエスト（指定した以外のデータを送ってくる等）を受けた際に、permitメソッドで許可していない項目については変更されない
    def sign_up_params
      params.permit(:email, :password, :password_confirmation, :name)
    end
end
