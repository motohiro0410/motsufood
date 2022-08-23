Rails.application.routes.draw do

    namespace :api do
      namespace :v1 do
        get '/users', to: 'users#index'
        delete '/users/:id', to: 'users#delete'
        resources :money, only: [:create]
        resources :not_eatings, only: [:create]
      end
    end
end
