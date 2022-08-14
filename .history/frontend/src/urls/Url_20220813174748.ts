export const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'

export const usersIndex = `${DEFAULT_API_LOCALHOST}/users`
export const moneyCreate = (userId: any) => `${DEFAULT_API_LOCALHOST}/users/${userId}/money`
export const notEatingCountCreate = (userId: any) => `${DEFAULT_API_LOCALHOST}/users/${userId}/count`
export const inputCreate = (userId: any) => `${DEFAULT_API_LOCALHOST}/users/${userId}/input`
