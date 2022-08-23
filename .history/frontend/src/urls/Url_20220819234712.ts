export const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'

export const usersIndex = `${DEFAULT_API_LOCALHOST}/users`
export const userEdit = (id: number) => `${DEFAULT_API_LOCALHOST}/users/${id}/edit`
export const userDestroy = (id: number) => `${DEFAULT_API_LOCALHOST}/users/${id}`
export const userCreate = `${DEFAULT_API_LOCALHOST}/users`
export const userUpdate = (id: number) => `${DEFAULT_API_LOCALHOST}/users/${id}`
export const moneyCreate = (userId: number) => `${DEFAULT_API_LOCALHOST}/users/${userId}/money`
export const notEatingCountCreate = (userId: number) => `${DEFAULT_API_LOCALHOST}/users/${userId}/count`
export const inputCreate = (userId: number) => `${DEFAULT_API_LOCALHOST}/users/${userId}/input`
