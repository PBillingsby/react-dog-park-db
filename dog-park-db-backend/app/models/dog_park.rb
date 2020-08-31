class DogPark < ApplicationRecord
  validates_presence_of [:name, :address, :city, :rating]
end