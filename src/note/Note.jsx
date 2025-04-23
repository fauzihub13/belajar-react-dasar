import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const dispatch = useContext(NotesDispatchContext);
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleChangeNote(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      text: e.target.value,
    });
  }
  function handleChangeDone(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      done: e.target.checked,
    });
  }

  function handleDeleteNote(e) {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeNote} />
        <button onClick={() => setIsEditing(false)}>Simpan</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Ubah</button>
      </>
    );
  }

  return (
    <>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleChangeDone}
        />
        {component}
        <button onClick={handleDeleteNote}>Hapus</button>
      </label>
    </>
  );
}
