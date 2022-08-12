class Money < ApplicationRecord
  belongs_to :user

  validates :payment, numerically:{greater_than:0}

  # 合計金額のインスタンスメソッド必要になるかも
end
