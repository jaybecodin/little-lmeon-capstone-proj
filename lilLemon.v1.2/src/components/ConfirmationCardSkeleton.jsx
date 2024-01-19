import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import {MdLocationPin} from "react-icons/md"
export default function ConfirmationCardSkeleton(){
    return (
         <Card sx={{ width : '100%',  minHeight : '65%', maxHeight : 'fit-content' }}>
             <CardContent className="  flex flex-col h-full  justify-between">
                    <div>
                        <Skeleton variant="rectangular" sx={{ fontSize: '1rem', width : '75%', marginBottom : '.5rem', height : 20}} />
                        <Skeleton variant="rectangular" sx={{ fontSize: '1rem', width : '75%', height : 20}} />
                    </div>

                <hr className=" my-4"/>
                <div className="flex">
                <Skeleton variant="rectangular" sx={{ fontSize: '1rem', width : '75%', marginBottom : '.5rem', height : 20}} />
                    </div>
                    <div className="flex justify-between my-4">
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width : '30%' , marginRight : '1rem'}} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width : '30%' }} />
                    </div>
                    
                    <div className="flex flex-col">
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width : '100%'}} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width : '100%'}} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width : '100%'}} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width : '100%'}} /> 
                    </div>
                    <div>
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width : '100%'}} />
                    </div>
                    
                <hr className=" my-4"/>
                        <div className="flex justify-between  self-end w-full">
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width : '30%'}} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width : '30%'}} />
                        </div>
            </CardContent>
        </Card>
    )
}