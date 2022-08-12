class NotEating < ApplicationRecord
  has_one :user

  validates :not_eating_count, numericality:{greater_than:0}
end
