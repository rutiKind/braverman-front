import React, { useState } from "react";
import { Notes } from "../../model/notes.model";
import Swal from "sweetalert2";
import './note.css'; 

interface NotesColumnProps {
  notes: Notes[];
  leadId: string;
  addNote: (note: Notes) => void;
}

const NotesColumn: React.FC<NotesColumnProps> = ({ notes, leadId, addNote }) => {
  const handleNoteClick = async () => {
    const allNotesContent = notes.map((note, index) => (
      `<div key=${index} class="note-card">
        <p class="note-content">${note.content}</p>
        <p class="note-details">
          <span class="note-author">${note.createdBy}</span> | 
          <span class="note-timestamp">${new Date(note.timestamp).toLocaleString()}</span>
        </p>
      </div>`
    )).join('');

    const { value: formValues } = await Swal.fire({
      title: 'הערות',
      html: `
        <div class="notes-container">
          ${allNotesContent}
          <input id="swal-input-content" class="swal2-input" placeholder="הערה חדשה">
          <input id="swal-input-created-by" class="swal2-input" placeholder="נוצר על ידי">
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'הוסף הערה',
      cancelButtonText: 'ביטול',
      preConfirm: () => {
        const content = (document.getElementById('swal-input-content') as HTMLInputElement).value;
        const createdBy = (document.getElementById('swal-input-created-by') as HTMLInputElement).value;

        if (!content || !createdBy) {
          Swal.showValidationMessage('יש למלא את כל השדות');
          return false;
        }

        return { content, createdBy };
      }
    });

    if (formValues) {
      const newNote: Notes = {
        content: formValues.content,
        id: '',
        createdBy: formValues.createdBy,
        timestamp: new Date(),
        leadId: leadId,
        noteType:''

      };
      addNote(newNote);
    }
  };

  return (
    <div onClick={handleNoteClick} style={{ cursor: 'pointer' }}>
      {notes.length > 0 ? notes[notes.length - 1].content : 'אין הערות'}
    </div>
  );
};

export const NoteColumn = React.memo(NotesColumn);
