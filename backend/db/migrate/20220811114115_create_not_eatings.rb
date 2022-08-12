class CreateNotEatings < ActiveRecord::Migration[6.0]
  def change
    create_table :not_eatings do |t|
      t.references :user, null:false, foreign_key:true
      t.integer :not_eating_count, default:0

      t.timestamps
    end
  end
end
