import React from 'react';


const Validation = ({txtLength}) => {
    let length = txtLength;
    if(length > 5){
        <p>Text Too long</p>
    }
    else{
        <p>Text Too short</p>
    }
    return(
        {length}
    )
}


export default Validation;