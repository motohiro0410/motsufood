import axios from 'axios';
import { useState } from 'react'; 

import { notEatingCountCreate } from '../urls/Url'
import { Count } from '../types/Types';

export const useCreateCount = () => {

  const [count, setCount] = useState<Count[]>([])

  const createCount = (userId: number) => {
    axios.post<Count[]>(notEatingCountCreate(userId))
      .then(res => {
        console.log(res.data)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => console.log(e)
      )
    };

    return { createCount, count }
}