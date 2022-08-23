import axios from 'axios';
import { useState } from 'react'; 

import { usersIndex } from '../urls/Url'
import { User } from '../types/Types'


export const useAllUsers = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const getUsers = () => {
    setLoading(true)
    axios.get<User[]>(usersIndex)
      .then(res => {
        console.log(users === [...res.data])
        setUsers([...res.data])
        console.log(res)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("ユーザー取得に失敗しました")
      )
      .finally(() => setLoading(false))
    };

    return { getUsers, setLoading, loading, users }
}