import React,{useState} from "react";
import { PiShoppingCart } from 'react-icons/pi';
import SlidingMenu from "./SlidingMenu";
import { Link } from "react-router-dom";
export default function Navbar(){
    const [hamburgerMenu , setHamburgerMenu] = React.useState(false)
    const toggleMenu = () =>{
        setHamburgerMenu(prev => !prev)
    }

return (
    <>
        <nav className="container-b1 flex justify-between px-4 py-6  items-center">
            
            <button id="menu-button" className=" flex flex-col hamburger cursor-pointer md:hidden "
                onClick={()=> toggleMenu()}
            >
                <div className={`openMenuTop hamburger-top self-start ${hamburgerMenu ?"openTop" : null}`} />
                <div className={`openMenuBottom hamburger-bottom self-end ${hamburgerMenu ?"openBottom" : null}`} />
                <div className={`openMenuMiddle hamburger-middle self-center ${hamburgerMenu ?"openMid" : null} `} />
            </button>
            <Link to="/">
                <img src="../../../public/images/littleLemonLogo.png" alt="" className="w-40"/>
            </Link>
            <Link to="/OOS">
            <div className="flex flex-col items-center">
                <PiShoppingCart className=" text-4xl"/>
                cart
            </div>
            </Link>
            
            
        </nav>
        {hamburgerMenu ? <SlidingMenu /> : null}
    </>
               )
           }