import React, { useEffect, useState } from "react";

const UseStatetutor=()=>{

    const [count , setcount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setcount((count)=>count+1);
        },100);

    });
    return <h1> I've rendered {count} times!</h1>
}
export default UseStatetutor;