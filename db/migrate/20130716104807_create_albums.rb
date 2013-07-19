class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name
      t.string :artist
      t.integer :year
      t.integer :rating
      t.integer :position

      t.timestamps
    end
  end
end
