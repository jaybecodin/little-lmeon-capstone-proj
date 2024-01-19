import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import dayjs from "dayjs";
import SlidingMenu from "../../components/SlidingMenu";

const GuestInfoContext = React.createContext()

export default function RATLayout(){

    let currentDay = dayjs()

    const [guestInfo, setGuestInfo] = React.useState({
        dateSelected : currentDay,
        timeSelected : "10:30 am",
        hoursOfOperation : [],
        numberOfGuests : 1,
    })

    return (
        <GuestInfoContext.Provider value={{guestInfo, setGuestInfo}}>
            <Navbar />
        <section className="container-b2 LLGreen  p-6">
            <main className="flex items-center flex-col">
                <h1 className="text-3xl text-white round  font-medium text-LLH4 font-sans mt-6 mb-5 ">Little Lemon Reservations</h1>
                <div className="RATlayout bg-white w-full py-9 px-9 rounded-md overflow-x-hidden ">
                   <Outlet />
                </div>
            </main>
        </section>
        </GuestInfoContext.Provider>
    )
}
export {GuestInfoContext}
