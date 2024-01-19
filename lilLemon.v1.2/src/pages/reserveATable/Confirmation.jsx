import React from "react";
import {BsFillPersonFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdLocationPin} from "react-icons/md"
import {BsFillCalendarDateFill} from "react-icons/bs"
import {BsFillPeopleFill} from "react-icons/bs"
import {BsPencilFill} from "react-icons/bs"
import {BsCheckCircleFill} from "react-icons/bs"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { GuestInfoContext } from "./RATLayout";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "@mui/material";

export default function Summary(){
    const {guestInfo} = React.useContext(GuestInfoContext)
    const {setGuestInfo} = React.useContext(GuestInfoContext)
    const [postData, setPostData] = React.useState({
        'isLoading' : false,
        'method' : 'getReservation',
        'controller': 'Reservations',
        'reservationId' : guestInfo.reservationNumber
    })

    React.useEffect(()=> {
        

        const getReservationInfo = () => {

            try {
                
                const response = axios({
                    method : 'post',
                    url : 'http://localhost:80/Api/index.php',
                    data: JSON.stringify(postData),
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                }).then(res => res.data)
                .then (data => {
                    setPostData(prev => (
                        {
                            ...prev,
                            'reservationInfo' : data,
                            'isLoading' : false
                        }
                    ))
                }).catch(err => {
                    console.log(err)
                })
            } catch ( err ){
                console.log(err)
            }
           
        }
        
        setPostData(prev => (
            {
                ...prev,
                'isLoading' : true
            }
        ))
        getReservationInfo()
    },[])
    
    
    // let month 
    let day = guestInfo.dateSelected.day()
    
    
    switch (day) {
        case 0 :
            day = "Sunday"
            break;
        case 1 :
            day = "Monday"
            break;
        case 2 :
            day = "Tuesday"
            break;
        case 3 :
            day = "Wednesday"
            break;
        case 4 :
            day = "Thursday"
            break;
        case 5 :
            day = "Friday"
            break;
        case 6 :
            day = "Saturday"
            break;
        default : "something went wrong"
    }

    let month = guestInfo.dateSelected.month()
    
    
    switch (month) {
        case 0 :
            month = "January"
            break;
        case 1 :
            month = "February"
            break;
        case 2 :
            month = "March"
            break;
        case 3 :
            month = "April"
            break;
        case 4 :
            month = "May"
            break;
        case 5 :
            month = "June"
            break;
        case 6 :
            month = "July"
            break;
         case 7 :
            month = "August"
            break;
        case 8 :
            month = "September"
            break;
        case 9 :
            month = "October"
            break;
        case 10 :
            month = "November"
            break;
        case 11 :
            month = "December"
            break;
        default : "something went wrong"
    }
    
    const formattedDate = guestInfo.dateSelected.format(("MM DD YYYY"))
    let date = guestInfo.dateSelected.date()
    if (Object.entries(guestInfo).length > 4){
        return (
            <section className="">
                   
                    
                    <main className="flex flex-col items-center">
                        <h1 className="text-4xl self-start">Booking confirmed</h1>
                        <h1 className="text-LLH5 self-start mb-10">Reservation number : {postData.reservationId}</h1>
                        <div className="w-full flex space-x-4 self-start items-center mb-14">
                            <BsCheckCircleFill size={"5rem"} className="checkMark text-LLGreen"/>
                            {postData.isLoading
                                ? <div className="  w-full"> 
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
                                </div> 
                                

                                : <p className="max-w-xs text-LLH8">
                                Your Reservation has been successfully confirmed, You should receive an email
                                {guestInfo.guestPhoneNumber.length !== 0 && guestInfo.guestPhoneNumber.length !== 0 && guestInfo.guestPhoneNumberDisabled === true   ? ` and text for ${guestInfo.guestPhoneNumber}` : null} confirming your reservation shortly.
                                We look forward to seeing you on {day} {month} {date}, at {guestInfo.timeSelected}.
                            </p>
                            
                            }
                        </div>
                     

                     <main className="w-full flex flex-col-reverse mb-40">

                                    {postData.isLoading

                                        ? <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />

                                        : <div className="flex items-center h-16 ">
                                            <MdLocationPin className="mr-6 iconSize"/>
                                            6400 block of South King Drive, Chicago, IL 60637
                                        </div>
                                    }
                                
                                <hr className="  border-2"/>

                                    {postData.isLoading
                                        ? <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />

                                        :<div className="flex items-center h-16 ">
                                            <BsFillCalendarDateFill className="mr-6 iconSize"/>
                                            {day} {month} {date} - {guestInfo.timeSelected}
                                        </div>
                                    }

                                <hr className="  border-2"/>

                               {postData.isLoading
                                    ? <Skeleton variant="text" sx={{ fontSize: '1rem', width: '100%' }} />
                                    :<div className="flex items-center h-16 ">
                                        <BsFillPeopleFill className="mr-6 iconSize"/>
                                                {guestInfo.numberOfGuests > 1 || guestInfo.numberOfGuests === "9+"
                                                        ?  `${guestInfo.numberOfGuests} guests`
                                                        :  `${guestInfo.numberOfGuests} guest`
                                                }
                                        </div>
                                }
                     </main>
                        <div className="flex flex-row justify-center w-full items-center">
                            
                            <div className="w-full">

                            <Link to="../../">
                                <button type="submit" className="px-9 bg-LLyellowAlt hover:bg-LLyellow text-black w-full py-4 md:min-w-fit self-center rounded-md font-medium select-none"> Back to Home </button>
                            </Link>
                            </div>
                        </div>
                    </main>
                
            </section>
        )
    }else {
        return <section>
            <Navigate to=".." />
        </section>
    }
    
}