import React, { useContext, useState } from "react";
import {MC} from './MovieContext';





function Add(){
    const [moviesm,setMovies]=useContext(MC)
    const [x,setX]=useState('')
    const [y,setY]=useState('')

    const f1=(e)=>{
        setX(e.target.value)

    }
    const f2=(e)=>{
        setY(e.target.value)
    }
    const onSub=(e)=>{
        e.preventDefault()
        setMovies((pre)=>{
            return(
                [...pre,{name:x,price:y}]
            )
        })
    }


   

    return(
        <div>
            <form>
                <input type="text" onChange={f1}></input>
                <input type="text" onChange={f2}></input>
                <button onClick={onSub}>Click</button>
            </form>
         
          
        </div>
    )
}

export default Add

