import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    onSubmit(item);
    setItem("");
  }

  return (
    <>
      <h1>Create Task</h1>
      <form action="">
        <input
          type="text"
          value={item}
          placeholder="Tulis kak"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add Button</button>
      </form>
    </>
  );
}
