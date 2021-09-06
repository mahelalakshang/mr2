import React, { useContext, useState } from "react";
import Movie from './Movie'
import {MC} from './MovieContext'
function MovieList(){
    const [moviesm,setMovies]=useContext(MC)
 
    return(
        <div>
            
            {moviesm.map((v)=>{
                return(
                    <Movie name={v.name} price={v.price}></Movie>
                )
            })}

        </div>
    )
}

export default MovieList 





