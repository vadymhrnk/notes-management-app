import React from "react";
import { Note } from "../../state/notesState";
import "./NoteItem.scss";

interface NoteItemProps {
  note: Note;
  handleNoteClick: (note: Note) => void;
  deleteNote: (event: React.MouseEvent, noteId: number) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({
  note,
  handleNoteClick,
  deleteNote,
}) => {
  return (
    <div
      key={note.id}
      className="note-item"
      onClick={() => handleNoteClick(note)}
    >
      <div className="notes-header">
        <button onClick={(event) => deleteNote(event, note.id)}>x</button>
      </div>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      <div className="note-footer">
        <small>{new Date(note.creationDate).toLocaleDateString()}</small>
      </div>
    </div>
  );
};

export default NoteItem;
