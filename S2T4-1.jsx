import React from 'react';
import { useState } from 'react'

function App() {

  const name = "John";
  const element = <h1>Hello, {name}!</h1>;

  return (
    <div >
      {element}
    </div>
  )
}

export default App
