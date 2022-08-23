Rails.application.routes.draw do

    namespace :api do
      namespace :v1 do
        get '/users', to: 'users#index'
        get '/users/:id/edit', to: 'users#edit'
        get '/signin', to: 'users/new'
        get '/users/:id', to: 'users#destroy'
        post '/users', to: 'users#create'


        put '/users/:user_id/not_eatings', to: 'not_eating#update'

        get '/users/:user_id/money', to: 'money#show'
        post '/users/:user_id/money', to: 'money#create'
      end
    end
end
