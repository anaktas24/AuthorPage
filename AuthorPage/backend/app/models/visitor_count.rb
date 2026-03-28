class VisitorCount < ApplicationRecord
  def self.current
    first_or_create(count: 0)
  end

  def self.increment
    current.tap { |vc| vc.update(count: vc.count + 1) }
  end
end