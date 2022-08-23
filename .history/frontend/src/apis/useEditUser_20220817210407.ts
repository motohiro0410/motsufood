import axios from 'axios';
import { useCallback, useState } from 'react'; 

import { userEdit } from '../urls/Url'
import { User } from '../types/Types'
import { useHistory } from 'react-router-dom';


export const useEditUser = () => {

  const [user, setUser] = useState<User>({} as User)
  const history = useHistory();

  const MoveEditPage = (id: number) => {
    axios.get<User>(userEdit(id))
      .then((res) => {
        const user = res.data
        history.push(`/users/${user.id}/edit`)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => alert("編集ページへの遷移に失敗しました")
      )
    };

    return { MoveEditPage, user }
}