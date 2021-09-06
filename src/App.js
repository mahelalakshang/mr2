import React, { useState } from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import {MP} from './MovieContext'
import Add from './Add'
function App() {

const [x,setX]=useState('')
  return (
    <div>
      <MP>
    <Add></Add>
     <Nav></Nav>
      <MovieList></MovieList>
     </MP>
    </div>
  );
}

export default App;
