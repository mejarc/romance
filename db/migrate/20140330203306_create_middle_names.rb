class CreateMiddleNames < ActiveRecord::Migration
  def change
    create_table :middle_names do |t|
      t.string :middle_name
      t.timestamps
    end
  end
end
