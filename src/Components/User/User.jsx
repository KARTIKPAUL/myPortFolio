import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userId} = useParams();
    return(
        <div className="text-center text-white bg-green-500 text-5xl p-10 font-bold">User : {userId}</div>
    )
}