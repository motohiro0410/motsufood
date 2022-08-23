export type User = {
  id: string,
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
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