class User < ApplicationRecord
  has_many :money

  validates :name, :email, presence:true
  validates :name, length:{maximum:30} 
end
