import React, { useContext } from "react";
import {MC} from './MovieContext'
function Nav(){
    const [moviesm,setMovies]=useContext(MC)

    return(
        <div>
            <h3>Mahela</h3>
            <p>List of movies: {moviesm.length}</p>
          
        </div>
    )
}

export default Nav

