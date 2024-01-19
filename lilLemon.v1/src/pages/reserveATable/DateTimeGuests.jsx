import React from "react";
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import DatePickerComp from "../../components/DatePickerComp";
import { nanoid } from 'nanoid'
import { GuestInfoContext } from "./RATLayout";
import formValidation from "../../Functions/FormValidation";
import dayjs from "dayjs";
import { Navigate } from "react-router-dom";
import { number, object } from "yup";



export default function DateTimeGuests(){
    const {guestInfo,setGuestInfo} = React.useContext(GuestInfoContext)
const today = dayjs()
const [navigateUser, setNavigateUser] = React.useState(false)
const selectedTime = guestInfo.hoursOfOperation.filter( time => time.isSelected === true)
const [displayErrors, setDisplayErrors] = React.useState(true)
    

    
    React.useEffect(() => {
        const openHour = 10
        const closeHour = 21
            let hoursOfOperationsArr = []

            let hoursOfOperationsObj = {
                hour : openHour,
                minute : 0,
                isSelected : false,
                id : null
            }
        const getHOursOfOperation = (HOP) => {
            let newHOP = {...HOP}
            

            if (HOP.hour < closeHour ){
                if(HOP.minute == 0){
                    newHOP.minute = newHOP.minute + 30
                    newHOP.id = nanoid()
                    hoursOfOperationsArr.push(newHOP)

                    getHOursOfOperation(newHOP)
                }else if (HOP.minute == 30){
                    newHOP.id = nanoid()
                    newHOP.hour = newHOP.hour + 1
                    newHOP.minute = 0
                    hoursOfOperationsArr.push(newHOP)
                    getHOursOfOperation(newHOP)
                }
            }else {
                return newHOP
            }
        }
        getHOursOfOperation(hoursOfOperationsObj)

        function setData () {
            setGuestInfo(prev => (
                {...prev, hoursOfOperation : hoursOfOperationsArr}
            ))
            
        }
    
        
        setData()

    },[])



const updateSelectedItem = (id,newTime) => {
        
    setGuestInfo(prev => (
        
        {...prev, hoursOfOperation : prev.hoursOfOperation.map( indTime => {
            
            return {...indTime, isSelected : id === indTime.id}
        })}
    ))
    setGuestInfo(prev => (
        {...prev, timeSelected : newTime}
    ))
}
    


   
    
    
    
    

const hoursOfoperationsMap = guestInfo.hoursOfOperation.map( timeobj => {
    let time = ` ${timeobj.hour >= 13 ? timeobj.hour - 12 : timeobj.hour}:${timeobj.minute === 0 ? "00" : timeobj.minute} ${timeobj.hour >= 12 ? "pm" : "am"}`
    let selected = timeobj.isSelected ? "bg-LLyellowSel hover:bg-LLyellowSel shadow-inner shadow-LLyellowAlt" : "bg-LLyellow"
    return (
        <button key={timeobj.id} className={`min-w-fit ${selected} hover:bg-LLyellowAlt text-black px-6 py-2.5 rounded-full text-LLH7 font-normal select-none`} 
        onClick={()=> {
            validate(event)
            updateSelectedItem(timeobj.id,time)
            
        }}> 
            {time}
        </button>
    )
})


  const incrementguests = () => {
    
        if(guestInfo.numberOfGuests >= 1 && guestInfo.numberOfGuests <= 8){
            setGuestInfo(prevGuestInfo => (
                {...prevGuestInfo, numberOfGuests : prevGuestInfo.numberOfGuests ++}
            ))
        }else if (guestInfo.numberOfGuests === 9){
            setGuestInfo(prev => (
                {...prev, numberOfGuests : "9+"}
            ))
        }
     
}
const decrementGuests = () => {
    
    
    if(guestInfo.numberOfGuests >= 2 && guestInfo.numberOfGuests <= 9){
        setGuestInfo(prevGuestInfo => (
            {...prevGuestInfo, numberOfGuests : prevGuestInfo.numberOfGuests --}
        ))
    }else if (guestInfo.numberOfGuests === 1){
        setGuestInfo(prev => prev)
    }else if (guestInfo.numberOfGuests === "9+"){
        setGuestInfo(prev => (
            {...prev, numberOfGuests : 9}
        ))
    }
 
}


    const handleSubmit = (event) => {
        event.preventDefault()
        
        const errors = formValidation(today,guestInfo,selectedTime)
        
            if(Object.keys(errors).length === 0){

                if(!selectedTime.length){
                    errors.selectedTime = "Please select a time"
                    setDisplayErrors ({...errors})

                } else {
                    navigateUserFunc(displayErrors)
                }
                
                
                
            }else {
                setNavigateUser(false)
                setDisplayErrors ({...errors})
            }
        
    }

    const validate = (event) => {
        
        const errors = formValidation(today,guestInfo,selectedTime)
            if(Object.keys(errors).length === 0){
                setDisplayErrors({...errors})
            }else {
                setDisplayErrors ({...errors})
            }
            return displayErrors.selectedTime === null ? true : false
    }


function navigateUserFunc () {
    const valid = validate()
    
    if(valid){
        if(selectedTime.length === 1 && displayErrors.selectedTime === null ){
            setNavigateUser(true)
            
        }
    }
    
}

    
    return (
        <section>
          {navigateUser 
            ? <Navigate to="guestInfo" />
            : null
        }    
            <form className="flex flex-col space-y-8 " onSubmit={handleSubmit} >
                     <div>
                        <h1 className="text-LLH6 font-bold self-start mb-6">Select a date</h1>
                        <DatePickerComp validate={validate}/>
                        
                     </div>

                    <div className="self-start max-w-sm">
                    <h1 className="text-LLH6 font-bold mb-6 select-none">Select a time</h1>
                    <div className="timeWrapper flex space-x-4 overflow-x-auto max-w-full">
                        {hoursOfoperationsMap}
                    </div>
                    {displayErrors ? <h4 className="NOGsupText text-center text-red-500 select-none">{displayErrors.selectedTime}</h4> : null}
            

                    </div>
                    <div>
                    <h1 className="text-LLH6 font-bold mb-6 select-none">Number of guests</h1>
                        <div className="NOGdiv flex flex-row justify-between items-center">
                            <MdOutlineKeyboardArrowLeft className="text-4xl hover:text-5xl  transition-all" onClick={()=>{
                                decrementGuests()
                            }}/>
                            <h5 className="font-bold text-LLH7 select-none">{guestInfo.numberOfGuests}</h5>
                            <MdOutlineKeyboardArrowRight className="text-4xl hover:text-5xl  transition-all" onClick={()=>{
                                incrementguests()
                            }}/>
                        </div>
                        {guestInfo.numberOfGuests === "9+" 
                        ? <h4 className="NOGsupText text-center text-red-500 select-none">Please notify us the size of your party in the special requests field.</h4>
                        : null}
                    </div>
                   
                        <button className="px-9 bg-LLGreenAlt hover:bg-LLGreen text-LLwhite py-4 max-w-fit self-center rounded-md font-medium justify-self-start select-none"
                            type="submit"
                            onClick={()=> {
                                
                                navigateUserFunc()}
                            }
                        > Continue </button>
                   
            </form>
        </section>
    )
}

