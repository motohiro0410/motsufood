import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { userDestroy } from '../urls/Url'

export type User = {
    id: number,
    name: string,
    email: string,
    created_at: string,
    update_at: string,
    user_id: number
  }


export const useDleteUser = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const deleteUsers = useCallback((id: any) => {
    setLoading(true)
    axios.delete<User[]>(userDestroy(id))
      .then((res) => {
        res.data.splice(id, 1)
        setUsers(res.data)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => console.log(e)
      )
      .finally(() => setLoading(false))
    }, [setUsers, setLoading]);

    return { deleteUsers, loading, users }
}