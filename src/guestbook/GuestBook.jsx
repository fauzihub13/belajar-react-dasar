import { useRef, useState } from "react";
import GuestBookInput from "./GuestBookInput";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setmessage] = useState("");

  const nameInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setmessage("");

    nameInput.current.focus();

    alert(`Name ${name}, Message ${message}`);
  }

  return (
    <>
      <h1>Guest Book</h1>
      <form>
        <GuestBookInput ref={nameInput} name={name} setName={setName} />
        <label htmlFor="message">Message</label> <br />
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        ></textarea>{" "}
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
