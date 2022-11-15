import React, { useState } from 'react';

const UseStatetutor =()=>
{
    const [obj, setObj]=useState({a:1,b:2});
    
    function modifyObj (){
        setObj(prevObj=>{
            return({ a:prevObj.a+1})
        });
    }

    return (
        <div >
            <h1>{obj.a}</h1>
            <button onClick={modifyObj}>{obj.a }{ obj.b}</button>
        </div>
    );
}

export default UseStatetutor;