import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import { Note } from "../../state/notesState";
import "./NotesGrid.scss";

interface NotesGridProps {
  notes: Note[];
  handleNoteClick: (note: Note) => void;
  deleteNote: (event: React.MouseEvent, noteId: number) => void;
}

export const NotesGrid: React.FC<NotesGridProps> = ({
  notes,
  handleNoteClick,
  deleteNote,
}) => {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          handleNoteClick={handleNoteClick}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};
