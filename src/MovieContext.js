import React, { createContext, useState } from "react";

export const MC=createContext()

export const MP=(props)=>{
    const [moviesm,setMovies]=useState([
        {
          name:'Harry Potter',price:'$10',id:2391
        },
        {
          name:'Game of thrones',price:'$20',id:2312
        },
        {
          name:'Inception',price:'$5',id:2341
        }
      
      ])

      return(
          <MC.Provider value={[moviesm,setMovies]}>
              {props.children}
          </MC.Provider>
      )

}