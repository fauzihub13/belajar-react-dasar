import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { NotesContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.log("Filtering notes");
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  function handleSearch() {
    console.log("Search: ", searchInput.current.value);
    setSearch(searchInput.current.value);
  }

  return (
    <>
      <br />
      <input type="text" ref={searchInput} placeholder="Search" />
      <button onClick={handleSearch}>Search</button> <br />
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </>
  );
}
