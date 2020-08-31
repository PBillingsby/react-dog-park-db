Rails.application.routes.draw do
  resources :dog_parks, only: [:create, :index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
