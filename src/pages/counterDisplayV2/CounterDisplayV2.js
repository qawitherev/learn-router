import { useNavigate, useParams } from "react-router-dom";
import React from 'react'; 

function CounterDisplayV2() {
    const { counterValue } = useParams(); 
    const navigate = useNavigate(); 

    const goBack = () => navigate(-1); 
    return (
        <div>
            <h1>
                Counter Display
            </h1>
            <h2>Received counter value is {counterValue}</h2>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    ); 
}

export default CounterDisplayV2;