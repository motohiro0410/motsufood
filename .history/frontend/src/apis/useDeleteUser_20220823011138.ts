import axios from 'axios';

import { userDestroy } from '../urls/Url'
import { User } from '../types/Types';

export const useDleteUser = (getUsers: ()=>void) => {

  // const deleteUser = (id: string) => {
  //   axios.delete<User[]>(userDestroy(id))
  //     .then(res => {
  //       console.log(res.data)
  //     })
  //     // 本来はバリデーションエラーメッセージなどを表示
  //     .catch((e) => console.log(e)
  //     )
  //     .finally(()=>getUsers())
  // };

  const deleteUser = async (id: string) => {
    try {
      const {data} = await axios.delete<User[]>(userDestroy(id))
      console.log(data)
    } catch (e) {
      console.log(e)
    } 
    getUsers();
    

      // .then(res => {
      //   console.log(res.data)
      // })
      // // 本来はバリデーションエラーメッセージなどを表示
      // .catch((e) => console.log(e)
      // )
      // .finally(()=>getUsers())
  };

  return { deleteUser }
}