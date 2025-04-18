import { useReducer } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn Js", done: false },
  { id: id++, text: "Learn ReactJs", done: false },
];

function notesReducer(notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...notes,
        {
          id: id++,
          text: action.text,
          done: false,
        },
      ];
    case "CHANGE_NOTE":
      return notes.map((note) =>
        note.id == action.id
          ? { ...note, text: action.text, done: action.done }
          : note
      );
    case "DELETE_NOTE":
      return notes.filter((note) => note.id !== action.id);
    default:
      return notes;
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
    // setNotes((draft) => {
    //   draft.push({
    //     id: id++,
    //     text: text,
    //     done: false,
    //   });
    // });
  }

  function handleChangeNote(note) {
    dispatch({
      type: "CHANGE_NOTE",
      ...note,
    });
    // setNotes((draft) => {
    //   const index = draft.findIndex((item) => item.id == note.id);
    //   draft[index] = note;
    // });
  }

  function handleDeleteNote(note) {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
    // setNotes((draft) => {
    //   const index = draft.findIndex((item) => item.id == note.id);
    //   draft.splice(index, 1);
    // });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
