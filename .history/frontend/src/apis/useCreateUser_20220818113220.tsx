import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { userCreate } from '../urls/Url'
import { User } from '../types/Types'


export const useCreateUser = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const createUser = useCallback(() => {
    setLoading(true)
    axios.post<User[]>(userCreate)
      .then(res => setUsers(res.data))
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("ユーザー取得に失敗しました")
      )
      .finally(() => setLoading(false))
    }, [setUsers, setLoading]);

    return { createUser, setLoading, loading, users }
}