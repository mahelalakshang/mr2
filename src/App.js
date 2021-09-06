import React, { useState } from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import {MP} from './MovieContext'
import Add from './Add'
function App() {


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
