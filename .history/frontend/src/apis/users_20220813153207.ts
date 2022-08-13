import axios from 'axios';
import { usersIndex } from '../urls/Url'

export const fetchUsers = () => {
  return axios.get(usersIndex)
  .then(res => {
    return res.data
  })
  // 本来はバリデーションエラーメッセージなどを表示
  .catch((e) => console.error(e))
}