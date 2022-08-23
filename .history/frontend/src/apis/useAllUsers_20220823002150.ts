import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { usersIndex } from '../urls/Url'
import { User } from '../types/Types'


export const useAllUsers = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const getUsers = useCallback(() => {
    setLoading(true)
    axios.get<User[]>(usersIndex)
      .then(res => setUsers([...res.data]))
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("ユーザー取得に失敗しました")
      )
      .finally(() => setLoading(false))
    }, [setUsers, setLoading]);

    return { getUsers, setLoading, loading, users }
}