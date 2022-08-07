import { FC, memo } from "react";

import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";


export const Calender: FC = memo(() => {
  return (
    <>
       <Header />
        <p>カレンダー</p>
      <Footer />
    </>
  )
})