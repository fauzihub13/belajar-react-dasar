import { useState } from "react";

export default function Counter({name=''}) {
  let [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Counter {name}: {counter}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
