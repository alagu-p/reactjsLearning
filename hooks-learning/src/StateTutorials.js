import React, { useState } from "react";
// const initArray=()=>{
//     let arr=[];
//     for(let i=0;i<1000;i++){
//         arr.push(i);
//     }
//     return arr;
// }

const StateTutorials =()=>{
    const [namer,setName]=useState("Like")
    const [count , setCount]=useState(0);
    const [arr,setArr]=useState(()=>{
        //initArray() == > multiple time call agum but
        //below function one time call agum
        let arr=[];
        console.log("Init Array")
        for(let i=0;i<1000;i++){
            arr.push(i);
        }
        return arr;
    })
    const updateCount=()=>{
        // setCount(count-1);
        // setCount(count-1); //work agathu two iruntha
        setCount((prevCount)=>prevCount-1);
        setCount((prevCount)=>prevCount-1);//entha two work agum
    }

    const changeName=()=>{
        setName("Alagu");
    }
    const UpdateArr=()=>{
        setArr([...arr,1]);

    }
    return(<div className="StateTutorials">
        <h1>useState </h1>
        <p>
            {namer}
        </p>
        <button onClick={changeName}>
            change name
        </button> 
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1 )}>Count</button>

        <button onClick={updateCount}>Counter-2</button>


        <p>Array Use State</p>
        <button onClick={UpdateArr}>{arr.length}</button>
    </div>);
}


export default StateTutorials;