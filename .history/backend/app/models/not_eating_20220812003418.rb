class NotEating < ApplicationRecord
  has_one :user

  validates :not_eating_count, numerically:{greater_than:0}
end
