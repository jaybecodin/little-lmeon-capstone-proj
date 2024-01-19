import React from "react";
import { Link } from "react-router-dom";
export default function SlidingMenu (){
    return (
    <div id="navMenu" className=" flex items-center  absolute bg-LLyellow w-screen h-full shadow-xl  z-20">
       <ul className=" items-center justify-around space-y-5 w-full h-3/4 px-7 py-6">
             <Link  to="/">
                <li className="text-LLwhite  text-LLH2  ">Home</li>
            </Link> 
                    <hr />
            <Link  to="/reserveATable">
                <li className="text-LLwhite  text-LLH2  ">Reserve a table</li>
            </Link> 
                    <hr />
            <Link  to="/OOS">
                <li className="text-LLwhite  text-LLH2  ">Menu</li>
            </Link> 
                    <hr />
            <Link  to="/OOS">
                <li className="text-LLwhite  text-LLH2  ">Order to go</li>
            </Link> 
            
        </ul>
    </div>
        
    )
}