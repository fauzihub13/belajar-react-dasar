import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
    setText ("");
  }
  return (
    <>
      <input
        type="text"
        placeholder="Tulis catatan disini"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Tambah</button>
    </>
  );
}
