import React from 'react';
import { useParams } from "react-router-dom";

function CounterDisplay() {
    const { counterValue } = useParams(); 

    return (
        <div>
            <h1>Display Counter</h1>
            <h2>Received Count: {counterValue} </h2>
        </div>
    ); 
}

export default CounterDisplay; 