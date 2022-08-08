import { FC, memo } from "react";

import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";


export const Calender: FC = memo(() => {
  return (
    <>
       <Header />
        <FullCalendar
         plugins={[dayGridPlugin]}
         initialView="dayGridMonth" />
      <Footer />
    </>
  )
})