class CreateUserActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :user_activities do |t|
      t.belongs_to :user
      t.belongs_to :activity
      t.date :date, null:false, default: Date.today
      t.string :level, null:false, default:'Medium'
      t.integer :duration

      t.timestamps
    end
  end
end
