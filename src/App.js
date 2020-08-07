import React, { useState } from "react";
import Validation from "./Validation";
import CharComponent from './CharComponent';
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [length, setLength] = useState();
  console.log("this is input",input);
  console.log("this is split of input",input.split(''));
  const charList = input.split('').map( (character,index) => {
    return <CharComponent clicked={() => deleteCharHandler(index)} character = {character} key={index} />
  })

  const handleInputLength = (event) => {
    setLength(event.target.value.length);
  };

  const handleInputValue = (event) => {
    setInput(event.target.value);
  };

  const deleteCharHandler = (index) => {
  //   const text = input.split('');
  //   text.splice(index,1);
  //   const updatedText = 
  // };

  console.log(length);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(event) => {
          handleInputLength(event);
          handleInputValue(event);
        }}
        value={input}
      />
      <p> {input} </p>
      <p>The length is : {length}</p>
      <Validation txtLength={length} />
      {charList}
    </div>
  );
}

export default App;
