import React from "react";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { GuestInfoContext } from "./RATLayout";
import { Link, Navigate, json } from "react-router-dom";
import GuestInfoSummaryComp from "../../components/GuestInfoSummaryComp";
import axios from "axios";

// dateSelected
// : 
// Fri Oct 06 2023 20:03:18 GMT-0700 (Pacific Daylight Time) {}
// guestEmail
// : 
// "djackson97cpl@gmail.com"
// guestFirstName
// : 
// "Deric"
// guestLastName
// : 
// "Jackson"
// guestPhoneNumber
// : 
// ""
// guestPhoneNumberDisabled
// : 
// true
// guestSpecialRequests
// : 
// "hookers"
// hoursOfOperation
// : 
// (22) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// numberOfGuests
// : 
// 1
// timeSelected
// : 
// " 11:30 am"
export default function Summary(){
    const {guestInfo} = React.useContext(GuestInfoContext)
    const {setGuestInfo} = React.useContext(GuestInfoContext)
    
    // const formattedDate = guestInfo.dateSelected.format(("DD YYYY"))

  
    let day = guestInfo.dateSelected.day()
    
    
    switch (day) {
        case 0 :
            day = "Monday"
            break;
        case 1 :
            day = "Tuesday"
            break;
        case 2 :
            day = "Wednesday"
            break;
        case 3 :
            day = "Thursday"
            break;
        case 4 :
            day = "Friday"
            break;
        case 5 :
            day = "Saturday"
            break;
        case 6 :
            day = "Sunday"
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
    
    
  const [navToConfirmation, setNavToConfirmation] = React.useState(false)

  const appendBEsubmit = () => {
    setGuestInfo(prev => {
        return (
            {
                ...prev,
                'method': 'submitReservation',
                'controller': 'Reservations'
            }
        )
    })
  }
  const  handleSubmit =  (event,guestInfo) => {
    
      event.preventDefault()
       
        
    
    
    axios({
        method : 'post',
        url : 'http://localhost:80/Api/index.php',
        data: JSON.stringify(guestInfo),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then(res => {
    return res.data
    }).then (data => {

        if(data.status === 1){

            setGuestInfo(prev => (
                {
                    ...prev,
                    reservationNumber : data.reservationNumber
                }
            ))
            setNavToConfirmation(true) 
        }else{
                console.log('shit aint work', 'data execution:' , data)
            }
    } )
    .catch( err => {
        console.log(err)
    })
}

    if(Object.entries(guestInfo).length > 4){
        
        
        return (
            <section className="guestInfo ">

                {navToConfirmation && (
                    <Navigate to="../confirmation" />
                )}
                    <form className="flex flex-col items-center h-full">
                        <h1 className="text-4xl self-start">Summary</h1>
                        <div className="flex flex-col mb-auto">
                            <GuestInfoSummaryComp />
                        </div>
                        <div className="flex flex-row justify-center w-full items-center">
                            <Link to=".." relative="path">
                                <AiOutlineArrowLeft className="flex text-4xl mr-4 transition-all hover:text-5xl text-LLGreen "/>
                            </Link>
                            <div className="w-full">
                            <button 
                                            onClick={() => {
                                                appendBEsubmit()
                                                handleSubmit(event,guestInfo)
                                            }}
                                            className="px-9 bg-LLGreenAlt hover:bg-LLGreen text-LLwhite w-full py-4 md:min-w-fit self-center rounded-md font-medium select-none"> Submit 
                                        </button>  
                            </div>
                        </div>
                        
                    </form>
                               
                                     
                
            </section>
        )
    }else{ 
        return (
        <section>
            <Navigate to=".." />
         </section>
        ) 
         }
    
}

