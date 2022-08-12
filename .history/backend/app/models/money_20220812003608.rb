class Money < ApplicationRecord
  has_many :user

  validates :payment, numerically:{greater_than:0}
end
