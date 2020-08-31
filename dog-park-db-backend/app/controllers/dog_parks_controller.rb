class DogParksController < ApplicationController
  def create
    park = DogPark.create(dog_park_params)
    render json: park
  end

  def index
    parks = DogPark.all
    render json: parks
  end

  def dog_park_params
    params.require(:dogPark).permit(:name, :address, :city, :rating, :parkDescription)
  end
end
