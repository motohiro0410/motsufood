import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { userDestroy } from '../urls/Url'

export type User = {
    id: number,
    name: string,
    email: string,
    created_at: string,
    update_at: string,
  }


export const useDleteUser = () => {

  const [users, setUsers] = useState<User[]>([])

  const deleteUser = useCallback((id: number) => {
    axios.delete<User[]>(userDestroy(id))
      .then((res) => {
        const deleteTarget = users.findIndex(user => {
          return res.data
        })
        const newUsers = users.slice();
        newUsers.splice(deleteTarget, 1)
        setUsers(newUsers)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => console.log(e)
      )
    }, [setUsers]);

    return { deleteUser, users }
}