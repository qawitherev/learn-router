import { useEffect, useState } from "react";

function LearnComponent() {
  const [childData, setChildData] = useState(null);
  const [showChild2, setShowChild2] = useState(false)

  const handleChildDataChange = (newData) => {
    setChildData(newData);
    setShowChild2(true)
  };

  return (
    <>
      <h3>This is parent component</h3>
      {childData && <h4>Data received from child is: {childData}</h4>}
      <ChildComponent data={"Hello from Parent Component"} onDataChange={handleChildDataChange} />
      {showChild2 && <ChildComponentV2 data={'from parent to child 2'} dataFromOtherChild={childData}/>}
    </>
  );
}

export default LearnComponent;

function ChildComponent(props) {
  const dataFromParent = props.data;
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    props.onDataChange(inputValue)
  };

  return (
    <>
      <h3>This is child component</h3>
      <h4>Data from parent component is '{dataFromParent}'</h4>
      <p>Enter data to be passed</p>
      <input value={inputValue} onChange={handleOnChange} autoFocus />
      <button onClick={handleOnClick} >Send data to parent</button>
    </>
  );
}

function ChildComponentV2(props) {
  const data = props.data
  const dataFromOtherChild = props.dataFromOtherChild
  return (
    <>
      <h2>This is child component II</h2>
      <p>The data received: {data}</p>
      <p>Data from first child: {dataFromOtherChild}</p>
    </>
  )
}

/*
Learn Component is the parent 
objectives: 
1. to pass data from parent to child through props
2. to pass data from child to parent through props.onDataChange() callback on child 

*/
