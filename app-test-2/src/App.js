import React from 'react';
import { useEffect } from 'react';
import SEarchIcon from './search1.svg'
import './App.css';
//key :d54c065b
const API_URL ='http://www.omdbapi.com?apikey=d54c065b';

const App = () =>{
    const searchMovies=async(title)=>{
      const response=await fetch(`${API_URL}&s=${title}`)  
    const data=await response.json();
    console.log(data.Search);  
    }

    useEffect(()=> {
        searchMovies('spiderman');

    },[]);
    return(
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input type="text" 
                placeholder='Search for movies'
                value='Superman'
                onChange={()=>{}} />
                <img src={SEarchIcon} alt="search" 
                onClick={()=>{}}/>
            </div>
            

        </div>
    );
}
export default App;