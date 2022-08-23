User.create!(name: "元博",
             email: "motohiro@example.org",
             password: "shimo090da" ,
             password_confirmation: "shimo090da")

User.create!(name: "せいじ",
             email: "seiji@example.org",
             password: "foobaz" ,
             password_confirmation: "foobaz")

User.create!(name: "幹太",
             email: "kanta@example.org",
             password: "foobay" ,
             password_confirmation: "foobay")

Money.create!(payment: 1000,
              user_id: 1)

Money.create!(payment: 1500,
              user_id: 1)

Money.create!(payment: 1000,
              user_id: 2)

NotEating.create!(not_eating_count: 3,
                  user_id: 1)