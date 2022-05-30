export default class NotesAPI {
    // now creating specific operation to perform create , delete and save
    // function to get all notes
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
        // sorting algorithm based on time the notes gets updated
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }
     // function to save all notes
    // it also import new notes
    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find(note => note.id == noteToSave.id);

        // Edit/Update
        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            // genertating random ids for each notes to hepl in finding and in sorting
            noteToSave.id = Math.floor(Math.random() * 1000000);
            // giving a respective time for each notes when it is saves
            noteToSave.updated = new Date().toISOString();
            // adding new notes
            notes.push(noteToSave);
        }
        
        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);
        // function to delete notes
        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
    }
}
