class CreateVisitorCounts < ActiveRecord::Migration[7.1]
  def change
    create_table :visitor_counts do |t|
      t.integer :count, default: 0
      t.timestamps
    end
  end
end