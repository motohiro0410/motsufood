import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { userEdit } from '../urls/Url'
import { User } from '../types/Types'


export const useAllUsers = () => {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User>({} as User)

  const getUsers = useCallback((id: number) => {
    setLoading(true)
    axios.get<User>(userEdit(id))
      .then((res) => setUser(res.data))
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("編集ページへの遷移に失敗しました")
      )
      .finally(() => setLoading(false))
    }, [setUser, setLoading]);

    return { getUsers, setLoading, loading, user }
}