class CreateNotEatings < ActiveRecord::Migration[6.0]
  def change
    create_table :not_eatings do |t|

      t.timestamps
    end
  end
end
