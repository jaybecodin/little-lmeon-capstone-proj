import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <>
            
                <Navbar />
            
            <section className="container-b2  bg-LLGreen h-screen">.
                <div className="px-4 pb-10 h-full" >
                    <div className="mb-4 w-fit h-xl">
                        <h1 className="heroH1 text-LLyellow text-LLH1 font-serif font-medium mb-4">Error 404 </h1>
                    </div>
                    <h2 className="text-LLH2 font-serif text-LLwhite font-normal">Page not found</h2>
                    <p className=" text-LLwhite text-LLH6 font-medium mb-12 w-full">
                        The page that you are looking for doesn't exist or another error occured.
                    </p>
                    <p className=" text-LLwhite text-LLH7 font-medium mb-4 w-full">
                        Click this button to return to home.
                    </p>
                    <Link to="/" > <button className="text-black  bg-LLyellow rounded-full text-LLH7 font-bold py-2 px-4">Back to home</button> </Link>
                </div>
                
                
            </section>
            
        </>
    )
}