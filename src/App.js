import React ,{useState}from "react";
import "./style.css";
// use State=> useState is a hook which is used to manage state of react
// hooks are predefined function of react.
export default function App() {
  let [test,setTest]=useState(0)
  // test is a state variable
  // setTest is a function which will manage my values of state variable
  // useState('')=> default value of your state variable
  // onClick, onChange
  function increment(){
    setTest(test+1)
  }
  function decrement(){
    setTest(test-1)
  }
  function reset(){
    setTest(0)
  }
  return (
    <div>
     <button onClick={increment}>+</button>
     <div>{test}this is your state variable value</div>
     <button onClick={decrement}>-</button>
     <button onClick={reset}>reset</button>
    </div>
  );
}
