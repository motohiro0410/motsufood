class User < ApplicationRecord
  has_many :money

  validates :name, presence:true, length:{maximum:30}
  validates :email, presence:true, length:{maximum:100} 
end
