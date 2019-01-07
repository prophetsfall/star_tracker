class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :name, null:false
      t.string :type, null:false, array: true, default: []

      t.timestamps
    end
    add_index :activities, :name, unique:true
  end
end
