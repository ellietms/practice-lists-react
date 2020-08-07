import React, { useState } from 'react';
import Validation from './Validation';
import CharComponent from './CharComponent';
import './App.css';

function App() {
  const [input,setInput] = useState();
  const [length,setLength] = useState();
  const handleInputLength = (event) => {
    setLength(event.target.value.length)
  }
  const handleInputValue = (event) => {
    setInput(event.target.value);
  }
  return (
    <div className="App">
      <input type="text" onChange={handleInputLength,handleInputValue} value={input}/>
      <p>The length is : {length}</p>
      <Validation txtLength={length}/> 
    </div>
  );
}

export default App;
