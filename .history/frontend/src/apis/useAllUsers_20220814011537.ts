import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { usersIndex } from '../urls/Url'

// type Users = {
//   name: string
//   email: string
// }

export const useAllUsers = () => {

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<Array<{}>>()

  const getUsers = useCallback(() => {
    setLoading(true)
    axios.get<Array<{}>>(usersIndex)
      .then((res) => setUsers(res.data))
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("ユーザー取得に失敗しました")
      )
      .finally(() => setLoading(false))
    }, [setUsers, setLoading]);

    return { getUsers, loading, users }
}