import React from "react";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from "@mui/material";


import { GuestInfoContext } from "../pages/reserveATable/RATLayout";
import dayjs from "dayjs";
import { validateDate } from "@mui/x-date-pickers/internals";

export default function DatePickerComp({validate}){

    const {guestInfo, setGuestInfo} = React.useContext(GuestInfoContext)
    const today = dayjs()
    const bookingLimit = dayjs().add(6, "month")

    const [date, setDate] = React.useState(guestInfo.dateSelected || today)

    const setSelectedDate = (newDate) => {
        setDate(newDate)
        setGuestInfo(prevGuestInfo => (
            {...prevGuestInfo, dateSelected : newDate}
        ))
    }
    

      
    return (
        <div className="self-start">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                
                    <StaticDatePicker
                        defaultValue={guestInfo.dateSelected || today}
                        disablePast
                        maxDate={bookingLimit}
                        value={date}
                        onChange={(newDate) => {
                            validate(event)
                            setSelectedDate(newDate)
                        
                        }
                    }
                        renderInput={(params) => (
                            <TextField
                              {...params}
                              label={null} // Remove the label when a date is selected
                            />
                          )}
                    />
                
            </LocalizationProvider>
        </div>
    )
}
