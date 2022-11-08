import React, { useState } from 'react';
import { useEffect } from 'react';
import SEarchIcon from './search1.svg'
import './App.css';
import MovieCard from './MovieCard';
//key :d54c065b
const API_URL ='http://www.omdbapi.com?apikey=d54c065b';
const movie1={
    'Title':"Amazing Spiderman Syndromme",
    "Year": "2012",
    "imdbID":'tt2586634',
    "Type" : "movie",
    "Poster":"N/A"
}; 
const App = () =>{
    const [movies, setMovies]=useState([]);
    const[searchTerm, setsearchTerm]=useState('');
    const searchMovies=async(title)=>{
      const response=await fetch(`${API_URL}&s=${title}`)  
    const data=await response.json();
    setMovies(data.Search);  
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
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)} />
                <img src={SEarchIcon} alt="search" 
                onClick={()=>searchMovies(searchTerm)}/>
            </div> 
            {
                movies?.length>0 ?
                ( <div className='container'>
                    {
                        movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))
                    }
              </div>):(
                <div className='empty'>
                    <h2>No movies found</h2>
                    </div>
              )
            }
           
            

        </div>
    );
}
export default App;