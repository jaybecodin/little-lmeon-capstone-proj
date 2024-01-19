import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function OutOfScope() {
    return (
        <>
            
                <Navbar />
            
            <section className="container-b2  bg-LLGreen h-fit">.
                <div className="px-4 pb-10 h-full" >
                    <div className="mb-4 w-fit h-xl">
                        <h1 className="heroH1 text-LLyellow text-LLH1 font-serif font-medium mb-4">Out of scope</h1>
                        <img src="../../../public/images/OOS.gif" alt="" />
                    </div>
                    <h2 className="text-LLH2 font-serif text-LLwhite font-normal">Project scope</h2>
                    <p className="hero-sec-p text-LLwhite text-LLH6 font-medium mb-12 max-w-">
                        unfortunately this feature hasn't been implemented yet, due to it being outside of the goals of this project.
                    </p>
                    <p className="hero-sec-p text-LLwhite text-LLH7 font-medium mb-4 w-full">
                        Click this button to see the table reservation functionality.
                    </p>
                    <Link to="/reserveATable" > <button className="text-black  bg-LLyellow rounded-full text-LLH7 font-bold py-2 px-4"> Reserve a table </button> </Link>
                </div>
                
                
            </section>

            <section className="container-b3 overflow-x-hidden ">
                <div className="container-b3-c1 p-4 ">
                    <div className="mb-4">
                        <h1 className="text-LLH5  font-extrabold mb-4">Looking for more...?</h1>
                        <p className="hero-sec-p text-black text-LLH7 font-medium mb-4 w-full">
                        click this button to see to return to home.
                    </p>
                    <Link to="/" > <button className="text-black mb-4  bg-LLyellow rounded-full text-LLH7 font-bold py-2 px-4"> Home </button> </Link>
                        <hr className="mb-4"/>
                 <p className="hero-sec-p text-black text-LLH7 font-medium mb-4 w-full">
                        Like to see my other completed work? click this button to view my portfolio site.
                    </p>
                    <a href="https:jvckoism.com" target="_BLANK" > <button className="text-black  bg-LLyellow rounded-full text-LLH7 font-bold py-2 px-4"> Portfolio </button> </a>
                    </div>
                    <div className=" space-y-4">
                        
                    </div>
                </div>
            </section>
        
            
        </>
    )
}