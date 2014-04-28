class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :token
      t.string :pseudonym
    
      t.timestamps
    end
  end
end
