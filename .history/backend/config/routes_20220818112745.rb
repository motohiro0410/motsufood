Rails.application.routes.draw do

    namespace :api do
      namespace :v1 do
        get '/users', to: 'users#index'
        get '/users/:id/edit', to: 'users#edit'
        get '/users/:id', to: 'users#destroy'
        post '/users', to: 'users/create'
        resources :money, only: [:create]
        resources :not_eatings, only: [:create]
      end
    end
end
