import React from "react";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { GuestInfoContext } from "./RATLayout";
import { useFormik } from "formik"
import * as Yup from 'yup';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function GuestInfo(){
    const [navigateUser, setNavigateUser] = React.useState(false)
    
    const {guestInfo,setGuestInfo} = React.useContext(GuestInfoContext)



    const formik = useFormik(
        
        {
        initialValues : {
                guestFirstName: guestInfo.guestFirstName ||  "",
                guestLastName: guestInfo.guestLastName ||  "",
                guestEmail :guestInfo.guestEmail ||  "",
                guestPhoneNumber :guestInfo.guestPhoneNumber ||  "",
                guestPhoneNumberDisabled : guestInfo.guestPhoneNumberDisabled || false, 
                guestSpecialRequests : guestInfo.guestSpecialRequests || ""
         },
       validationSchema : Yup.object({
        guestFirstName : Yup.string()
            .max(50)
            .required("First name is a required field *"),

        guestLastName : Yup.string()
            .max(50)
            .required("Last name is a required field *"),

        guestEmail : Yup.string()
            .email("Email must be valid")
            .max(240)
            .required("Please enter a valid email address *"),

        guestPhoneNumber : Yup.string()
        .min(9)
        .max(12),

        guestSpecialRequests : Yup.string()
        .min(5,"please provide us more details of your request")
        .max(180, "Field cannot exceed 180 characters"),
       }),
         onSubmit: (values) => {
             
            setGuestInfo( prevGuestEntries => (
                {...prevGuestEntries,...values}
            ))
            setNavigateUser(true)
         }
    })

    return (
        
        <section className="h-full">
        {navigateUser 
            ? <Navigate to="../summary" />
            : null
        }    
            <form className="flex flex-col content-between h-full" onSubmit={formik.handleSubmit}>
                <main className="space-y-11">

            {/* User input first name */}

                    <div className="relative">
                        <input 
                        type="text" 
                        className="h-14 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        name="guestFirstName"
                        onBlur={formik.handleBlur}
                        value={formik.values.guestFirstName}
                        onChange={formik.handleChange}
                        />
                        <label htmlFor="firstName" className={`absolute text-sm ${formik.errors.guestFirstName && formik.touched.guestFirstName ? "text-red-500" : "text-gray-500"}
                                    ${formik.errors.guestFirstName && formik.touched.guestFirstName ? "dark:text-red-400" : "dark:text-gray-400"}
                                    ${formik.errors.guestFirstName && formik.touched.guestFirstName ? "peer-focus:text-red-600" : "peer-focus:text-blue-600"}
                                     peer-focus:dark:text-blue-500
                                      duration-300 transform
                                    -translate-y-4 scale-75 top-2 z-10 origin-[0]
                                    bg-white dark:bg-gray-900 px-2 peer-focus:px-2
                                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
                                    peer-focus:-translate-y-4 left-1`}>{formik.errors.guestFirstName && formik.touched.guestFirstName ? formik.errors.guestFirstName : "First Name *"}</label>
                    </div>

            {/* User input last name */}

                    <div className="relative">
                        <input type="text" 
                        id="floating_outlined" 
                        className="h-14 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        name="guestLastName"
                        onBlur={formik.handleBlur}
                        value={formik.values.guestLastName}
                        onChange={formik.handleChange}
                        />
                        <label htmlFor="firstName" className={`absolute text-sm ${formik.errors.guestLastName && formik.touched.guestLastName ? "text-red-500" : "text-gray-500"}
                                    ${formik.errors.guestLastName && formik.touched.guestLastName? "dark:text-red-400" : "dark:text-gray-400"}
                                    ${formik.errors.guestLastName && formik.touched.guestLastName? "peer-focus:text-red-600" : "peer-focus:text-blue-600"}
                                     peer-focus:dark:text-blue-500
                                      duration-300 transform
                                    -translate-y-4 scale-75 top-2 z-10 origin-[0]
                                    bg-white dark:bg-gray-900 px-2 peer-focus:px-2
                                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
                                    peer-focus:-translate-y-4 left-1`}>{formik.errors.guestLastName && formik.touched.guestLastName ? formik.errors.guestLastName : "Last Name *"}</label>
                    </div>

            {/* guest input email address */}

                    <div className="relative">
                        <input type="text" 
                        id="floating_outlined" 
                        className="h-14 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        name="guestEmail"
                        value={formik.values.guestEmail}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        />
                        <label htmlFor="firstName" className={`absolute text-sm ${formik.errors.guestEmail && formik.touched.guestEmail ? "text-red-500" : "text-gray-500"}
                                    ${formik.errors.guestEmail && formik.touched.guestEmail  ? "dark:text-red-400" : "dark:text-gray-400"}
                                    ${formik.errors.guestEmail && formik.touched.guestEmail  ? "peer-focus:text-red-600" : "peer-focus:text-blue-600"}
                                     peer-focus:dark:text-blue-500
                                      duration-300 transform
                                    -translate-y-4 scale-75 top-2 z-10 origin-[0]
                                    bg-white dark:bg-gray-900 px-2 peer-focus:px-2
                                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
                                    peer-focus:-translate-y-4 left-1`}>{formik.errors.guestEmail && formik.touched.guestEmail ? formik.errors.guestEmail : "Email *"}</label>
                    </div>

            {/* guest input phone number */}

                    <div className={`relative ${formik.values.guestPhoneNumberDisabled ? null : "opacity-25"} `} >
                        <input type="text"
                        disabled={!formik.values.guestPhoneNumberDisabled} 
                        id="floating_outlined" 
                        className="h-14 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        value={formik.values.guestPhoneNumberDisabled ? formik.values.phoneNumber : "" }
                        name="guestPhoneNumber"
                        onChange={formik.handleChange}
                        />
                        <label htmlFor="phoneNumber" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">phone Number</label>
                    </div>
                </main>

            {/* guest input phone number checkbox */}
                <div className="flex space-x-4 py-4 items-center mb-12">
                    <input type="checkbox" className="mr-6" 
                    name="guestPhoneNumberDisabled"
                    onChange={formik.handleChange}
                    checked={formik.values.guestPhoneNumberDisabled}
                    />
                    <label htmlFor="guestPhoneNumber" className="text-LLH7 font-medium text-gray-500">Would you like a confirmation of your Reservation via text?</label>
                </div>
                <div className="relative space-y-2 mb-8">
                    <label htmlFor="" className="font-medium bg-transparent text-gray-500"> Special Requests</label>
                    <textarea
                    className=" h-36 w-full border-2 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 border-LLGreen rounded-md focus:outline-none"
                    name="guestSpecialRequests"
                    onBlur={formik.handleBlur}
                    value={formik.values.guestSpecialRequests ? formik.values.guestSpecialRequests : ""}
                    onChange={formik.handleChange}
                    />{<h2 className="text-red-500"> {formik.errors.guestSpecialRequests ? formik.errors.guestSpecialRequests : null}</h2>}
                </div>
                <div className="flex flex-row justify-center w-full items-center">
                            <Link to=".." relative="path">
                                <AiOutlineArrowLeft className="flex text-4xl mr-4 transition-all hover:text-5xl text-LLGreen "/>
                            </Link>
                            
                                <div className="w-full">
                                    <button type="submit" className="px-9 bg-LLGreenAlt hover:bg-LLGreen text-LLwhite w-full py-4 md:min-w-fit self-center rounded-md font-medium select-none"> Continue </button>
                                </div>

                    </div>
            </form>
            
        </section>
    )
}