User.create!(name: "元博",
             email: "motohiro@example.org")

User.create!(name: "晟司",
             email: "seiji@example.org")

User.create!(name: "幹太",
             email: "kanta@example.org")

Money.create!(payment: 1000,
              user_id: 1)

Money.create!(payment: 1500,
              user_id: 1)