import React from "react"
export default function formValidation(today,guestInfo,selectedTime){
    
    const errors = {}

        

    if(today.month() === guestInfo.dateSelected.month() && 
        today.date() === guestInfo.dateSelected.date() &&
        today.hour() === guestInfo.dateSelected.hour()){
            
            
            
            
            
            if(selectedTime.length === 1){
                
                    
                    if (Number(today.hour() + 1) < selectedTime[0].hour){
                   
                    errors.selectedTime = null
                    
                    }
                     else {
                    
                        errors.selectedTime = "please select a time in the future"
                    }
            }


        } else{
           
            errors.selectedTime = null
        }
return errors

}