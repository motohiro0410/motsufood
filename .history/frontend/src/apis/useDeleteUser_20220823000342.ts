import axios from 'axios';
import { useState } from 'react'; 

import { userDestroy } from '../urls/Url'
import { User } from '../types/Types';
import { useAllUsers } from '../apis/useAllUsers'

export const useDleteUser = () => {

  const [users, setUsers] = useState<User[]>([])

  const { getUsers } = useAllUsers();

  const deleteUser = (id: string) => {
    axios.delete<User[]>(userDestroy(id))
      .then(res => {
        console.log(res.data)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => console.log(e)
      )
      .finally(()=>getUsers())
    };

    return { deleteUser, users }
}