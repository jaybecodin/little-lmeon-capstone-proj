import React from "react";
import { Navigate } from "react-router-dom";

export default function CancelReservationModal({setModalWindow ,deleteReservationFromDb,reservation}){
    
    return (
        <div className="modal z-10">
                <div className="overlay"
                    onClick={(event) => {
                        event.preventDefault()
                        setModalWindow(prev => !prev)
                    }}
                ></div>
                <div className="modal-content">

                    <h2 className=" text-LLH4">Are you sure you want to cancel this reservation?</h2>

                    <hr className=" my-2"/>

                    <p className=" text-LLH7">
                        By Clicking yes, your current reservation will be 
                        canceled, this action cannot be undone and you will 
                        need to create a new reservation.
                    </p>

                    <hr className=" my-4"/>

                    <div className=" w-full flex justify-between  bg-LLwhite"> 
                        <button className="text-LLH7"
                                 onClick={(event) => {
                                    event.preventDefault()
                                    deleteReservationFromDb(reservation)
                                }}
                        >Yes</button>


                        <button className="text-LLH7"
                                onClick={(event) => {
                                    event.preventDefault()
                                    setModalWindow(prev => !prev)
                                }}
                        >Close Window</button>
                    </div>
                </div>
              
            </div>

    )
}