import { useState } from "react";
import useCounter from "./hooks/useCounter";

const CountController = ({handleCounterInc, counter, handleCounterDec}) => {
  return (
    <div>
        <button onClick={handleCounterInc}>+</button>
        <span>{counter}</span>
        <button onClick={handleCounterDec}>-</button>
      </div>
  );
}

const CountController2 = (props) => {
  const { counter, handleCounterInc, handleCounterDec} = useCounter({...props});
  return (
    <div>
        <button onClick={handleCounterInc}>+</button>
        <span>{counter}</span>
        <button onClick={handleCounterDec}>-</button>
      </div>
  );
}

const App = () => {
 
  return (
    <div>
      <h1>App</h1>
      <CountController2 lowerBound={-10}/>
      <CountController2 />
      <CountController2 />

    </div>
  )
}

export default App;