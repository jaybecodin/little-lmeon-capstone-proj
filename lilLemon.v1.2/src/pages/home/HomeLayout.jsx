import React ,{createContext} from "react";
import Navbar from "../../components/Navbar";
import Home from "./Home";



export default function HomeLayout(){

    
    return (
        <>
            
                <Navbar />
                <Home />
            
        </>
    )
}
