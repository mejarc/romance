class CreateMiddleNames < ActiveRecord::Migration
  def change
    create_table :middle_names do |t|
      t.string :name
      t.timestamps
    end
  end
end
