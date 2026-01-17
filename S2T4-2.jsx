import React from 'react';
import { useState } from 'react'

function greet(name) {
  return <h1>Welcome, {name}!</h1>;
}

function App() {

  const element = greet("Lions");

  return (
    <div >
      {element}
    </div>
  )
}

export default App
