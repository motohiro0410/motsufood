import { FC, memo } from "react";

import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

export const Money: FC = memo(() => {
  return (
    <>
      <Header />
        <p>お金</p>
      <Footer />
    </>
    
  )
})