import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { userCreate } from '../urls/Url'
import { User } from '../types/Types'


export const useAllUsers = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const createUsers = useCallback(() => {
    setLoading(true)
    axios.get<User[]>(userCreate)
      .then(res => setUsers(res.data))
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("ユーザー取得に失敗しました")
      )
      .finally(() => setLoading(false))
    }, [setUsers, setLoading]);

    return { createUsers, setLoading, loading, users }
}