import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { usersIndex } from '../urls/Url'

export type User = {
    id: number,
    name: string,
    email: string,
    created_at: string,
    update_at: string,
  }


export const useDleteUser = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const deleteUsers = useCallback(() => {
    setLoading(true)
    axios.get<User[]>(usersIndex)
      .then((res) => setUsers(res.data))
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("ユーザー削除に失敗しました")
      )
      .finally(() => setLoading(false))
    }, [setUsers, setLoading]);

    return { deleteUsers, loading, users }
}