import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CounterTest() {
    const navigate = useNavigate(); 

    const [counterValue, setCounterValue] = useState(0); 

    const increment = () => setCounterValue(counterValue+1)
    const decrement = () => {
        if (counterValue > 0) {
            setCounterValue(counterValue-1)
        } else {
            alert("Counter value cannot be less than 0")
        }
    }
    const resetCount = () => setCounterValue(0)
    const submit = () => navigate(`/display-count-test/${counterValue}`)
    const submitV2 = () => {
        console.log(`Counter value is ${counterValue}`)
        navigate(`/counter-test/counter-display-v2/${counterValue}`)}

    return (
        <div>
            <h1>Counter Test using functional component</h1>
            <h1>Counter</h1>
            <h2>Counter Value: {counterValue} </h2>
            <div>
                <div>
                    <button
                    onClick={increment}
                    >Increment</button>
                    <button onClick={decrement} >Decrement</button>
                    <button onClick={resetCount} >Reset</button>
                </div>
                <div>
                    <button onClick={submitV2} >Submit</button>
                </div>
            </div>
        </div>
    ); 
}

export default CounterTest;