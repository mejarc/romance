class CreateLastNames < ActiveRecord::Migration
  def change
    create_table :last_names do |t|
      t.string :last_name
      t.timestamps
    end
  end
end
