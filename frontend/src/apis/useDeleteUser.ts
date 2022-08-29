import axios from 'axios';

import { userDestroy } from '../urls/Url'
import { User } from '../types/Types';

export const useDleteUser = (getUsers: ()=>void) => {

  const deleteUser = async (id: number) => {
    try {
      const res = await axios.delete<User[]>(userDestroy(id))
      console.log(res.data)
    } catch (e) {
      console.log(e)
    } 
    getUsers();
  };

  return { deleteUser }
}