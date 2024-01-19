import React, { useEffect } from "react";
import  TextField  from "@mui/material/TextField";
import GuestConfirmationCard from "../../components/GuestConfirmationCard";
import ConfirmationCardSkeleton from "../../components/ConfirmationCardSkeleton";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import CancelReservationModal from '../../components/CancelReservationModal'
import { Navigate } from "react-router-dom";

export default function MyReservations(){

    const [reservation,setReservation] = React.useState({
        isLoading: false,
        card : false,
        results : ''
        
    })

    useEffect(() => {

    },[reservation])
    
    const [modalWindow,setModalWindow] = React.useState(false)

    

    
    const modalToggle = () => {
        setModalWindow(prev => !prev)
    }

const getReservationFromDb = (reservation,setReservation) => {
        if(reservation.method === 'getReservation'){
            axios({
                method : 'post',
                url : 'http://localhost:80/Api/index.php',
                data: JSON.stringify(reservation),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(res => {
            return res.data
            }).then (data => {
                
                if(data.status === 1){
                    
                    setReservation(prev => (
                        {
                            ...prev,
                            isLoading : false,
                            results : data.postData
                        }
                    ))
                    
                }else{
                    console.log(data)
                        setReservation(prev => (
                            {
                                ...prev,
                                card : false,
                                isLoading : false,
                                errorMsg : data.errMsg
                            }
                        ))
                    
                    }
            } )
            .catch( err => {
                console.log(err)
                setReservation(prev => (
                    {
                        ...prev,
                        card : false,
                        isLoading : false,
                        errorMsg : err.message
                    }
                ))
            })
        }
        }

    const renderConfirmationCard = (event,values) => {
            event.preventDefault()
    
            setReservation(prev => (
                {
                    ...prev,
                    card : true
                }
            ))
            getReservationFromDb(values,setReservation)
        }

const deleteReservationFromDb = (values,setReservation) => {
    
                const deleteReservationObj = {
                    ...values,
                }
                deleteReservationObj.method = 'removeReservation'
                deleteReservationObj.controller = 'reservations'
                
            if(deleteReservationObj.method === 'removeReservation'){
                axios({
                    method : 'post',
                    url : 'http://localhost:80/Api/index.php',
                    data: JSON.stringify(deleteReservationObj),
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                }).then(res => {
                return res.data
                }).then (data => {
                    console.log(data)
                    if(data.status === 1){
                            console.log(data)
                            setModalWindow(false)
                            navigateUserToCancelConfirm()
                    }else{
                            
                            setReservation(prev => (
                                {
                                    ...prev,
                                    errorMsg : data.errMsg
                                }
                            ))
                        
                        }
                } )
                .catch( err => {
                    console.log(err)
                    setReservation(prev => (
                        {
                            ...prev,
                            errorMsg : err.message
                        }
                    ))
                })
            }
            
          
        }

     const methodGen = (controller,method,setReservation) => {
            setReservation(prev => (
                {
                    ...prev,
                    method : method,
                    controller : controller
                }
            ))
            
        }

const [navToCancelConfirm,setNavToCancelConfirm] = React.useState(false)
    const navigateUserToCancelConfirm = () => {
        
        setNavToCancelConfirm(true)
    }

    const formik = useFormik(
        
        {
        initialValues : {
                reservationId :   "",
                guestLastName:  "",
                method : "getReservation",
                controller : "reservations",
                results : '',
                errorMsg : ''
         },
       validationSchema : Yup.object({
        reservationId : Yup.string()
            .min(6)
            .max(6)
            .required("Reservation number is a required field *"),

        guestLastName : Yup.string()
            .max(50)
            .required("Last name is a required field *")
       }),
         onSubmit: (values) => {
            //initial submit
            
            if(reservation.results === ''){
                
                setReservation( prev => (
                    {
                        ...prev,
                        ...values,
                        isLoading : true,
                        errorMsg : ''
                    }
                    ))
                    renderConfirmationCard(event,values)
                
                //If the card is rendered reset the results and display info
            }
            else if(reservation.card && !reservation.isLoading){
                
                setReservation( prev => (
                    {
                        ...prev,
                        results : '',
                        card : false,
                        reservationId : "",
                        guestLastName:  "",
                        
                    }
                ))
            }
            //post to db function
         }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="MRcontainer flex flex-col  justify-between">
            {modalWindow
                ? <CancelReservationModal 
                    reservation={reservation}
                    setModalWindow={setModalWindow} 
                    deleteReservationFromDb={deleteReservationFromDb}
                />
                : <></>
            }

            
              
               {reservation.card === true 
                    ? <div>

                        {reservation.isLoading && reservation.results === ''
                            ?<ConfirmationCardSkeleton />
                            :<GuestConfirmationCard reservation={reservation} setModalWindow={setModalWindow} />
                        }
                    </div>
                    

                    :<div className="mb-auto">
                        <main className="flex flex-col">
                            <h1 className="text-4xl self-start mb-16">My Reservations</h1>
                            <div className="w-full flex space-x-4 self-start items-center mb-14">
                                
                            
                                    

                                <p className="max-w-xs text-LLH5">
                                    Please enter your 6 digit reservation code and last name.
                                </p>
                                
                                
                            </div>
                        </main>
                        

                        <main className="w-full flex flex-col h-full space-y-12">

                        <div className="relative z-0">
                            <input 
                            type="text" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " 
                            name="reservationId"
                            onBlur={formik.handleBlur}
                            value={formik.values.reservationId}
                            onChange={formik.handleChange}
                            />
                            <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Reservation number</label>
                        </div>
                                        
                        <div className="relative z-0">
                            <input 
                            type="text" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " 
                            name="guestLastName"
                            onBlur={formik.handleBlur}
                            value={formik.values.guestLastName}
                            onChange={formik.handleChange}
                            />
                            <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Last name</label>
                        </div>

                        </main>
                </div>
                }
                    
                            
                          {
                            reservation.errorMsg  
                                ? <h2 className="text-red-500 text-LLH8 mx-auto "> {reservation.errorMsg} </h2>
                                : ''
                        }

                        {
                            reservation.isLoading
                                ? <button
                                type="button"
                                
                                        className="px-9  mt-5 bg-LLGreenAlt hover:bg-LLGreen  text-LLwhite w-full py-4 md:min-w-fit self-center rounded-md font-medium select-none"> Retrieving your reservation...
                                    </button>
                                : <button type="submit" 
                                    onClick={() => formik.handleSubmit}
                                    className="px-9  mt-5 bg-LLGreenAlt hover:bg-LLGreen  text-LLwhite w-full py-4 md:min-w-fit self-center rounded-md font-medium select-none"> {reservation.card ? 'Get another Reservation' : 'Find my Reservation' }
                                </button>
                            
                        }

                        {navToCancelConfirm
                            ? <Navigate to={'cancelConfirmation'}/>
                            :''
                        }
                    
            
        </form>
    )
}