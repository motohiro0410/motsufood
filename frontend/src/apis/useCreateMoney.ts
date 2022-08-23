import axios from 'axios';
import { useState } from 'react'; 

import { moneyCreate } from '../urls/Url'
import { Money } from '../types/Types';

export const useCreateMoney = () => {

  const [money, setMoney] = useState<[]>([])

  const createMoney = (userId: number) => {
    axios.post<Money[]>(moneyCreate(userId))
      .then(res => {
        console.log(res.data)
      })
      // 本来はバリデーションエラーメッセージなどを表示
      .catch((e) => console.log(e)
      )
    };

    return { createMoney, money }
}