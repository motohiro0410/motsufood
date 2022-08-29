import { createContext, useState } from "react"; 

import { User } from "../types/Types"

export const UsersContext = createContext({});

export const UsersProvider = (props: any) => {
  const { children } = props;

  const [users, setUsers] = useState<User[]>([])

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  )
}