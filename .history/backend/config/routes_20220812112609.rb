Rails.application.routes.draw do

    namespace :api do
      namespace :v1 do
        resources :users, only: %i[index new create update destroy]
          resources :money, only: %i[create]
           resources :not_eatings, only: %i[create]
end
