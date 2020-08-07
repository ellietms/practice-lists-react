import React from 'react';

const CharComponent = ({character,clicked}) => {
 const style = {
     display: "inline-block",
     padding:"16px",
     margin: "16px",
     border: "1px solid black",
     textAlign: "center",
    };
  return(
      <div>
        <p style={style} onClick={clicked}>
              {character}
        </p>
      </div>
  )  
}



export default CharComponent;