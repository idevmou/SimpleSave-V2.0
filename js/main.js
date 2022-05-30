// importing api file to main file home.js
// import appView from "./appView.js"
// import appAPI from "./appAPI.js"
import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);
// const view = new appView(app, {
//     onNoteAdd() {
//         console.log("Note has been added");
//     },

//     onNoteSelect(id) {
//         console.log("Note Selected:" + id);
//     },

//     onNoteDelete(id) {
//         console.log("Note Deleted:" + id);
//     },

//     onNoteEdit(newTitle, newBody) {
//         console.log(newTitle);
//         console.log(newBody);
//     }
// });

// const notes = appAPI.getEveryNotes();

// calling the created operations

// view.updateNoteList(notes);
// view.updateActiveNote(notes[0]);