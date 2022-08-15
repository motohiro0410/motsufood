Rails.application.routes.draw do

    namespace :api do
      namespace :v1 do
        resources :users, except: :edit
        resources :money, only: [:create]
        resources :not_eatings, only: [:create]
      end
    end
end
