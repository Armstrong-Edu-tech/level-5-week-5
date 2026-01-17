import React from 'react';
import { useState } from 'react'

const fruits = ["Apple", "Banana", "Orange"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}


function App() {

  return (
    <div >
      <FruitList />
    </div>
  )
}

export default App
