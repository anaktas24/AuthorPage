class CreateWorldbuildings < ActiveRecord::Migration[7.1]
  def change
    create_table :worldbuildings do |t|
      t.references :book, null: false, foreign_key: true
      t.text :magic
      t.text :history
      t.text :culture

      t.timestamps
    end
  end
end
