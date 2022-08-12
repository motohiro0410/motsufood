class CreateMoney < ActiveRecord::Migration[6.0]
  def change
    create_table :money do |t|
      t.references :user, foreign_key:true
      t.integer :payment, default:0

      t.timestamps
    end
  end
end
