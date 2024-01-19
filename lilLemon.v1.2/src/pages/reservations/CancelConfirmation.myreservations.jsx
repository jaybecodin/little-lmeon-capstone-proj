import React from "react";
import { Link } from "react-router-dom";
import {BsCheckCircleFill} from "react-icons/bs"
export default function cancelConfirmation(){
    return (
        <section className="CPCon flex flex-col justify-between">
                   
                    
                    <main className="flex flex-col items-center h-full ">
                    <BsCheckCircleFill size={"5rem"} className="checkMark text-LLGreen mb-8"/>
                        <h1 className="text-LLH5 self-center mb-16 text-center text-LLGreen">Your reservation was successfully removed</h1>
                        <p className="w-full text-center mb-14 text-LLH6">
                                Have a great day.      
                        </p>
                     

                     </main>

                     <Link to="../../">
                                <button type="submit" className="px-9 bg-LLyellowAlt hover:bg-LLyellow text-black w-full py-4 md:min-w-fit self-center rounded-md font-medium select-none "> Back to Home </button>
                            </Link>
            </section>
    )
}