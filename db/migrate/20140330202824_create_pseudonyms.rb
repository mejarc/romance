class CreatePseudonyms < ActiveRecord::Migration
  def change
    create_table :pseudonyms do |t|
      t.belongs_to :user
      t.timestamps
    end
  end
end
