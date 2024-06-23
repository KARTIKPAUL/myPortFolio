import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData();
    return (
        <>
            <div className="text-center bg-gray-700 text-white p-4 text-3xl">
                <div className="flex flex-col h-full gap-y-5">
                    <h1>GitHub UserName: {data.login}</h1>
                    <h1>Full Name: {data.name}</h1>
                    <h1>City: {data.location}</h1>
                    <h1>Profession: {data.company}</h1>
                    <h1>GitHub Link : 
                    <Link
                        to="https://github.com/kartikpaul"
                        className="hover:text-orange-700 duration-200 ml-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Click Here To Go GitHub
                    </Link>
                    </h1>
                </div>
            </div>
        </>
    );
    
}

export const gitHubLoader = async() =>{
    const res = await fetch('https://api.github.com/users/kartikpaul');
    return res.json();
}


