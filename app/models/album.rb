class Album < ActiveRecord::Base
  attr_accessible :artist, :name, :position, :rating, :year
  validates :name, uniqueness: true
end
