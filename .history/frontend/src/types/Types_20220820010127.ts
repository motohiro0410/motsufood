export type User = {
  id: number,
  name: string,
  email: string,
  created_at: string,
  update_at: string,
  password: string,
  password_confirmation: string,
}

export type Count = {
  id: number,
  notEatingCount: number,
  userId: number,
  created_at: string,
  update_at: string,
}

export type Money = {
  id: number,
  payment: number,
  userId: number,
  created_at: string,
  update_at: string,
}