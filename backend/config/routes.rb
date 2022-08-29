Rails.application.routes.draw do

    namespace :api do
      namespace :v1 do
        resources :test, only: %i[index]
        # get '/users', to: 'users#index'
        # get '/users/:id/edit', to: 'users#edit'
        # get '/users/:id', to: 'users#update'
        # delete '/users/:id', to: 'users#destroy'

        # authに関するルーティングを自動生成
        mount_devise_token_auth_for 'User', at: 'auth', controllers: {
          registrations: 'api/v1/auth/registrations'
        }
  
        namespace :auth do
          resources :sessions, only: %i[index]
        end
    end
  end
end
