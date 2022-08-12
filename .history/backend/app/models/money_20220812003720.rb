class Money < ApplicationRecord
  belongs_to :user

  validates :payment, numerically:{greater_than:0}
end
