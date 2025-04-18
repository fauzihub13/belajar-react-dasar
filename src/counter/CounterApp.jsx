import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  let [show, setShow] = useState(true);
  function handleShow() {
    setShow(!show);
  }
  return (
    <>
      <h1>Counter App</h1>
      <input type="checkbox" checked={show} onChange={handleShow} /> Tampilkan
      counter
      {/* Reset state same position */}
      {show ? (
        <Counter key="Donto" name="Donto" />
      ) : (
        <Counter key="Jarwo" name="Jarwo" />
      )}
      {/* Reset state different position */}
      {/*       
      {!show && <Counter name="Dontol" />}
      {show && <Counter name="Jarwo" />} */}
      {/* Reset state different position */}
      {/* {show ? (
        <div>
          <Counter name="Dontol" />
        </div>
      ) : (
        <section>
          <Counter name="Jarwo" />
        </section>
      )} */}
    </>
  );
}
