class Book < ApplicationRecord
  has_many :characters, dependent: :destroy
  has_many :settings, dependent: :destroy
  has_one :worldbuilding, dependent: :destroy

  # 1. Enables the file upload handling
  has_one_attached :cover

  validates :title, presence: true
  validates :description, presence: true

  # 2. We removed the old 'cover_url' validation.
  #    Instead, we add a custom check for the file.
  validate :cover_presence_and_format

  validates :progress, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }

  private

  # 3. Custom validation to ensure a file is attached and is an image
  def cover_presence_and_format
    if !cover.attached?
      errors.add(:cover, "must be attached")
    elsif !cover.content_type.in?(%w(image/jpeg image/png image/jpg image/webp))
      errors.add(:cover, "must be a valid image (JPEG, PNG, or WebP)")
    end
  end
end
