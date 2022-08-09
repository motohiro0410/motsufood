import { FC, memo } from "react";

import { Footer } from "../organisms/Footer";
import { MainHeader } from "../organisms/MainHeader";



export const UserEditModal: FC = memo(() => {
  return (
    <>
      <MainHeader />
      <Footer />
    </>
  )
})