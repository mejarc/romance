class CreateLastNames < ActiveRecord::Migration
  def change
    create_table :last_names do |t|
      t.string :name
      t.timestamps
    end
  end
end
