import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { NoteForm } from "./components/NoteForm/NoteForm";
import { NotesGrid } from "./components/NotesGrid/NotesGrid";
import {
  notesState,
  selectedNoteState,
  titleState,
  descriptionState,
  Note,
} from "./state/notesState";
import "./App.scss";
import { Header } from "./components/Header/Header";

const API_URL = "http://localhost:8081/notes";
const CONTENT_TYPE_HEADER = "Content-Type";
const JSON_CONTENT_TYPE = "application/json";

const App = () => {
  const [notes, setNotes] = useRecoilState(notesState);
  const [selectedNote, setSelectedNote] = useRecoilState(selectedNoteState);

  const setTitle = useSetRecoilState(titleState);
  const setDescription = useSetRecoilState(descriptionState);

  const title = useRecoilValue(titleState);
  const description = useRecoilValue(descriptionState);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(API_URL);
        const notes: Note[] = await response.json();
        setNotes(notes);
      } catch (e) {
        console.log(e);
      }
    };

    fetchNotes();
  }, [setNotes]);

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setDescription(note.description ?? "");
  };

  const handleAddNote = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          [CONTENT_TYPE_HEADER]: JSON_CONTENT_TYPE,
        },
        body: JSON.stringify({
          title,
          description: description.trim() === "" ? null : description,
        }),
      });

      const newNote = await response.json();
      setNotes([...notes, newNote]);
      setTitle("");
      setDescription("");
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateNote = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedNote) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${selectedNote.id}`, {
        method: "PUT",
        headers: {
          [CONTENT_TYPE_HEADER]: JSON_CONTENT_TYPE,
        },
        body: JSON.stringify({
          title,
          description: description.trim() === "" ? null : description,
        }),
      });

      const updatedNote = await response.json();
      const updatedNotesList = notes.map((note) =>
        note.id === selectedNote.id ? updatedNote : note
      );

      setNotes(updatedNotesList);
      setTitle("");
      setDescription("");
      setSelectedNote(null);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setSelectedNote(null);
  };

  const deleteNote = async (event: React.MouseEvent, noteId: number) => {
    event.stopPropagation();

    try {
      await fetch(`${API_URL}/${noteId}`, {
        method: "DELETE",
      });
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <NoteForm
          handleAddNote={handleAddNote}
          handleUpdateNote={handleUpdateNote}
          handleCancel={handleCancel}
          selectedNote={selectedNote}
        />
        <NotesGrid
          notes={notes}
          handleNoteClick={handleNoteClick}
          deleteNote={deleteNote}
        />
      </div>
    </>
  );
};

export default App;
