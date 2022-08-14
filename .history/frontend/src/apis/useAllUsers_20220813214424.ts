import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { usersIndex } from '../urls/Url'

export const useAllUsers = () => {
  const [loading, setLoading] = useState
  const [users, setUsers] = useState

  const getUsers = useCallback(() => {
    setLoading(true)
    axios.get(usersIndex)
    .then((res) => setUsers(res.data))
    // 本来はバリデーションエラーメッセージなどを表示
    .catch(() => {
      showMessage({ title: "ユーザー取得に失敗しました", status: "error" })
    })
    .finally(() => setLoading(false))
    }, [setUsers, setLoading]);
}