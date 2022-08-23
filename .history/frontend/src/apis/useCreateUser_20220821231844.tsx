import axios from 'axios';
import { useCallback, useState } from 'react'; 
import { useHistory } from 'react-router-dom';

import { userCreate } from '../urls/Url'
import { User } from '../types/Types'


export const useCreateUser = () => {

  const [data, setData] = useState({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log (data)
    setData(data);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // })
  };

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User>({} as User)

  const history = useHistory();

  const createUser = useCallback(() => {
    setLoading(true)
    axios.post<User>(userCreate)
      .then(res => {
        console.log(res.data)
        // setUser(res.data)
        history.push("/users")
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("ユーザー作成に失敗しました")
      )
      .finally(() => setLoading(false))
    }, []);

    return { handleSubmit, createUser, setLoading, loading, user }
}