import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";

export default class App {
    constructor(root) {
         // list of active notes
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());
        
        // second part of this notes

        this._refreshNotes();
    }

    _refreshNotes() {
        const notes = NotesAPI.getAllNotes();

        this._setNotes(notes);

        if (notes.length > 0) {
            this._setActiveNote(notes[0]);
        }
    }

    _setNotes(notes) {
        this.notes = notes;
        this.view.updateNoteList(notes);
        this.view.updateNotePreviewVisibility(notes.length > 0);
    }

    _setActiveNote(note) {
        this.activeNote = note;
        this.view.updateActiveNote(note); //calling the view and tell it to update active visible notes
    }
    // making of handlers function

    _handlers() {
        return {
            onNoteSelect: noteId => {
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActiveNote(selectedNote);
                // console.log("Note selected:" + noteId);
            },
            onNoteAdd: () => {
                const newNote = {
                // console.log("Note Added");
                    title: "New Note",
                    body: "Take note..."
                };

                NotesAPI.saveNote(newNote);
                this._refreshNotes();
            },
            onNoteEdit: (title, body) => {
                NotesAPI.saveNote({
                    id: this.activeNote.id,
                    title,
                    body
                });

                this._refreshNotes();
            },
            onNoteDelete: noteId => {
                // console.log("Note deleted:" + noteId);
                NotesAPI.deleteNote(noteId);
                this._refreshNotes();
            },
        };
    }
}
