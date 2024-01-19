import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MyReservations from "./MyReservations";





export default function FindReservationsLayout(){

    return (
        <>
            <Navbar />
        <section className="container-b2 LLGreen  p-6">
            <main className="flex items-center flex-col h-full">
                <h1 className="text-3xl text-white round  font-medium text-LLH4 font-sans mt-6 mb-5 ">Little Lemon Reservations</h1>
                <div className="MRLayout bg-white w-full py-9 px-9 rounded-md">
                   <Outlet />
                </div>
            </main>
        </section>
        </>
    )
}

