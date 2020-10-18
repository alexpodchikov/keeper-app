import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

// function createNote(note){
//     return(
//         <Note 
//         key = {note.key}
//         title = {note.title}
//         content = {note.content}
//         />
//     );
// }

export default function App() {

    const [notes, setNotes] = useState([]);


    function addNote(note){
        // console.log(note);
        setNotes(prevNotes => {
            return [...prevNotes, note];
        })
    }

    function deleteNote(id) {
        // console.log(id);
        setNotes(prevNotes=>{
            // "filter" func like a "map" is a loop func. 
            return prevNotes.filter((note, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header/>
            <CreateArea 
                onAdd={addNote}
            />
            {notes.map( (note, index) => (
            <Note 
                key={index}
                id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
            />
            ))}
            <Footer/>
        </div>
    );
}