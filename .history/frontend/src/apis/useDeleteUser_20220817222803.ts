import axios from 'axios';
import { useState } from 'react'; 

import { userDestroy } from '../urls/Url'
import { User } from '../types/Types';

export const useDleteUser = () => {

  const [users, setUsers] = useState<User[]>([])

  const deleteUser = (id: number) => {
    axios.delete<User[]>(userDestroy(id))
      .then((res) => {
        const deleteTarget = users.findIndex(user => {
          return res.data
        })
        users.splice(deleteTarget, 1)
        setUsers(users)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => console.log(e)
      )
    };

    return { deleteUser, users }
}