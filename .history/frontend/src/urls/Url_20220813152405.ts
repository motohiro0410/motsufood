export const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'

export const usersIndex = `${DEFAULT_API_LOCALHOST}/users`
export const moneyIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/money`
export const notEatingCountIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/count`
export const inputIndex = (userId) => `${DEFAULT_API_LOCALHOST}/users/${userId}/input`
