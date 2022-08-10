import { createContext } from "react";

export const HeaderContext = createContext<Context[]>({} as Context[]);

export type Context = {
  title: string;
}

export const HeaderProvider = (props: any) => {
  const { children } = props;
  const contextName: Context[] = [
    {title: "ホーム"},
    {title: "食費入力"},
    {title: "支払い"}, 
    {title: "ユーザー編集"},
  ]

  

  return (
    <HeaderContext.Provider value={contextName}>
      {children}
    </HeaderContext.Provider>
  )
}