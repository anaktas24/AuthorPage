class Worldbuilding < ApplicationRecord
  belongs_to :book
  has_one_attached :map
end
