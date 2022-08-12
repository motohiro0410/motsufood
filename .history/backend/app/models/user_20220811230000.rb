class User < ApplicationRecord
  has_many :money

  validates :name, presence:true, length:{maximum:30}

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence:true, length:{maximum:100} 
                    format: { with: VALID_EMAIL_REGEX }
end
