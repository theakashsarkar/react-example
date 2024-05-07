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
  // const {counter: counter1, handleCounterDec: handleCounterDec1, handleCounterInc: handleCounterInc1} = useCounter({inital: 4}); 
  // const {counter: counter2, handleCounterDec: handleCounterDec2, handleCounterInc: handleCounterInc2} = useCounter({inital: 5});
 
  return (
    <div>
      <h1>App</h1>
      {/* <CountController 
        counter = {counter1}
        handleCounterInc = {handleCounterInc1}
        handleCounterDec={handleCounterDec1}
      />
      <CountController 
        counter = {counter2}
        handleCounterInc = {handleCounterInc2}
        handleCounterDec={handleCounterDec2}
      /> */}
      <CountController2 lowerBound={-10}/>
      <CountController2 />
      <CountController2 />

    </div>
  )
}

export default App;