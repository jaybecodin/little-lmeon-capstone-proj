import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import {MdLocationPin} from "react-icons/md"
import {BsFillPeopleFill} from "react-icons/bs"
import dayjs from "dayjs";
import { Navigate } from "react-router-dom";
export default function GuestConfirmationCard({reservation,setModalWindow}){
    const {results} = reservation
    

const formattedDate = dayjs(results.dateSelected).format('MMMM D, YYYY');
const [navigate, setNavigate] = React.useState(false)

const navigateToHome = () => {
    setNavigate(true)
}

    
    
    return (

        <Card sx={{ width : '100%', minHeight : '65%', maxHeight : 'fit-content' }}>
             <CardContent className="  flex flex-col h-full  justify-between">
                    <div>
                        <p className=" text-LLH4">Your reservation</p>
                        <p className=" text-LLH6">Reservation number: {results.reservationId}</p>
                    </div>

                <hr className=" my-4"/>
                <div>
                        <p className=" text-LLH4">{formattedDate} at {results.timeSelected}</p>
                    </div>

                    <div className="flex my-4">
                            <p className=" text-LLH5 mr-8"> {results.guestFirstName} {results.guestLastName}</p>
                            
                    </div>
                    
                    {results.guestSpecialRequests
                        ?<div className="flex">
                                <p className="  text-LLH7"> 
                                    <span className=" text-LLH6">Special Requests:</span> {results.guestSpecialRequests}
                                </p>
                                
                        </div>
                        :''
                    }
                    <div className="flex items-center h-16 ">
                                            <MdLocationPin className="mr-6 iconSize"/>
                                            6400 block of South King Drive, Chicago, IL 60637
                                        </div>
                    
                
                <div className="flex items-center h-16 ">
                                            <BsFillPeopleFill className="mr-6 iconSize"/>
                                            <p>{results.numberOfGuests} {results.numberOfGuests == 1 ? 'guest' : 'guests'} </p>
                                        </div>
                <hr className=" my-4"/>
                        <div className="flex justify-between  self-end w-full">
                                <button className=" text-LLH7 mr-4 text-LLyellow hover:text-LLyellowAlt"
                                        onClick={(event)=> {
                                            event.preventDefault()
                                            navigateToHome()
                                        }}
                                >Back To Home </button>
                                <button className=" text-LLH7 mr-4 text-LLGreen hover:text-LLGreenAlt"
                                        onClick={(event) => {
                                            event.preventDefault()
                                            setModalWindow(prev => !prev)
                                        }}
                                >Cancel Reservation </button>
                                
                        </div>
                        {navigate
                            ?<Navigate to=".." />
                            :''
                        }
            </CardContent>
        </Card>
    )
}
      