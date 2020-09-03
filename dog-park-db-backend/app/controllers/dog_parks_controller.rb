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
    params.require(:dog_park).permit(:name, :address, :city, :rating, :park_description)
  end
end
