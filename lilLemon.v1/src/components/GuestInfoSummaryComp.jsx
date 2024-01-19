import React from "react";
import {BsFillPersonFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdLocationPin} from "react-icons/md"
import {BsFillCalendarDateFill} from "react-icons/bs"
import {BsFillPeopleFill} from "react-icons/bs"
import {BsPencilFill} from "react-icons/bs"
import { GuestInfoContext } from "../pages/reserveATable/RATLayout";

export default function GuestInfoSummaryComp(){
    const {guestInfo} = React.useContext(GuestInfoContext)

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

    let formattedDate = guestInfo.dateSelected.format("DD YYYY")
    console.log(guestInfo.guestPhoneNumberDisabled)
    return (
        <main key={guestInfo.guestFirstName}>
                <div className="flex items-center h-16 ">
                    <BsFillPersonFill className="mr-6 iconSize"/>
                        {guestInfo?.guestFirstName ? `${guestInfo.guestFirstName} ${guestInfo.guestLastName}  `: null}
                </div>
                <hr className="  border-2"/>
                <div className="flex items-center h-16 ">
                        <MdEmail className="mr-6 iconSize"/>
                       {guestInfo?.guestEmail ? guestInfo.guestEmail : null}
                </div>

                {guestInfo.guestPhoneNumber.length !== 0 && guestInfo.guestPhoneNumberDisabled === true 
                    ? <>
                        <hr className="  border-2"/>
                        <div className="flex items-center h-16 ">
                                <BsFillTelephoneFill className="mr-6 iconSize"/>
                                {guestInfo.guestPhoneNumber}
                        </div>
                    </> 
                    : null
                    }
                
                <hr className="  border-2"/>
                <div className="flex items-center h-16 ">
                <MdLocationPin className="mr-6 iconSize"/>
                    6400 S King Dr, Chicago, IL 60637
                </div>
                <hr className="  border-2"/>
                <div className="flex items-center h-16 ">
                <BsFillCalendarDateFill className="mr-6 iconSize"/>
                          {guestInfo?.dateSelected ? `${month} ${formattedDate} at ${guestInfo.timeSelected}` : null}
                </div>
                <hr className="  border-2"/>
                <div className="flex items-center h-16 ">
                <BsFillPeopleFill className="mr-6 iconSize"/>
                         {guestInfo?.numberOfGuests ? guestInfo.numberOfGuests : null}
                </div>
             {guestInfo.guestSpecialRequests && guestInfo.guestSpecialRequests !== "" ?

                     <>
                         <hr className="  border-2"/>
                         <div className="flex items-center h-16 ">
                            <BsPencilFill className="mr-6 iconSize"/>
                            {guestInfo.guestSpecialRequests}
                        </div>
                    </> 
                    : null
                    }
                    
            </main>
    )
}