class CreateSettings < ActiveRecord::Migration[7.1]
  def change
    create_table :settings do |t|
      t.references :book, null: false, foreign_key: true
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
