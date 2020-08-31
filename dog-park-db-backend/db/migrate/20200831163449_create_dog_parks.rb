class CreateDogParks < ActiveRecord::Migration[6.0]
  def change
    create_table :dog_parks do |t|
      t.string :name
      t.string :address
      t.string :city
      t.integer :rating
      t.text :park_description
    end
  end
end
