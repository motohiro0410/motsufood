import axios from 'axios';
import { useCallback, useState } from 'react'; 
import { useHistory } from 'react-router-dom';

import { userCreate } from '../urls/Url'
import { User } from '../types/Types'


export const useCreateUser = () => {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User[]>([])

  const history = useHistory();

  const createUser = useCallback(() => {
    setLoading(true)
    axios.post<User[]>(userCreate)
      .then(res => {
        setUser(res.data)
        history.push("/users")
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("ユーザー作成に失敗しました")
      )
      .finally(() => setLoading(false))
    }, [setUser, setLoading, history]);

    return { createUser, setLoading, loading, user }
}