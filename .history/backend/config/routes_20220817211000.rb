Rails.application.routes.draw do

    namespace :api do
      namespace :v1 do
        get '/users', to: 'users#index'
        get '/users/:id/edit', to: 'users#edit'
        delete '/users/:id', to: 'users#destroy'
        resources :money, only: [:create]
        resources :not_eatings, only: [:create]
      end
    end
end
