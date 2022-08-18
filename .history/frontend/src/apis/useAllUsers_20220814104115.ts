import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { usersIndex } from '../urls/Url'

export type User = {
    name: string,
    email: string
  }


export const useAllUsers = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<any>([])

  const getUsers = useCallback(() => {
    setLoading(true)
    axios.get<any>(usersIndex)
      .then((res) => setUsers(res.data))
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("ユーザー取得に失敗しました")
      )
      .finally(() => setLoading(false))
    }, [setUsers, setLoading]);

    return { getUsers, loading, users }
}