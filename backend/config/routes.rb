Rails.application.routes.draw do

    namespace :api do
      namespace :v1 do
        resources :test, only: %i[index]

        mount_devise_token_auth_for 'User', at: 'auth', controllers: {
          registrations: 'api/v1/auth/registrations'
        }

        get 'users', to: 'users#index'
        get 'users/:id/edit', to: 'users#edit'
        patch 'users/:id', to: 'users#update'
        delete 'users/:id', to: 'users#destroy'
  
        namespace :auth do
          resources :sessions, only: %i[index]
        end
    end
  end
end
