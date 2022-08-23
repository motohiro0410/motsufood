import axios from 'axios';
import { useState } from 'react'; 

import { userDestroy } from '../urls/Url'
import { User } from '../types/Types';

export const useDleteUser = () => {

  const [users, setUsers] = useState<User[]>([])
  // const [user, setUser] = useState<User>({} as User)

  const deleteUser = (id: string) => {
    axios.delete<User[]>(userDestroy(id))
      .then(res => {
        console.log(res.data)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => console.log(e)
      )
    };

    return { deleteUser, users }
}