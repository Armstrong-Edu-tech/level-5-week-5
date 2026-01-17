import React from 'react';
import { useState } from 'react'



function App() {
  const isLoggedIn = false;

  const element = (
   <div>
     {isLoggedIn ? <p>Welcome,Lion!</p> : <p>Please log in</p>}
   </div>
  );

  return (
    <div >
      {element}
    </div>
  )
}

export default App
