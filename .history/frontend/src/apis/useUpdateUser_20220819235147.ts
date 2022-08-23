import axios from 'axios';
import { useState } from 'react'; 

import { userUpdate } from '../urls/Url'
import { User } from '../types/Types';

export const useUpdateUser = () => {

  const [user, setUser] = useState<User[]>([])
  // const [user, setUser] = useState<User>({} as User)

  const updateUser = (id: number) => {
    axios.put<User[]>(userUpdate(id))
      .then(res => {
        console.log(res.data)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => console.log(e)
      )
    };

    return { updateUser, user }
}