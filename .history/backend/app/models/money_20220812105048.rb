class Money < ApplicationRecord
  belongs_to :user, optional:true

  validates :payment, numericality:{greater_than:0}

  # 合計金額のインスタンスメソッド必要になるかも
end
