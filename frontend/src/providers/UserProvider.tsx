import { createContext, useState } from "react"; 

import { User } from "../types/Types"

export const UserContext = createContext({});

export const UserProvider = (props: any) => {
  const { children } = props;

  const [user, setUser] = useState<User>({} as User)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}