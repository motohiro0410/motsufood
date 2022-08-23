class User < ApplicationRecord
  has_many :money, dependent: :destroy
  has_one :not_eating

  validates :name, presence:true, length:{maximum:30}, uniqueness:true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence:true, length:{maximum:100},
                    format: { with: VALID_EMAIL_REGEX }

  # 今後indexが必要になるかも

  has_secure_password
end
