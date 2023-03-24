import { useState } from "react"

export default function NewNoteForm({ addNote }) {

    const [newNote, setNewNote] = useState({text:""})
    
    function handleSubmit(evt) {
        evt.preventDefault();
        addNote(newNote);
        setNewNote({text:""})
    }

    function handleChange(evt) {
        setNewNote({...newNote, [evt.target.name]: evt.target.value})
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="text"
            value={newNote.text}
            placeholder="Write a note"
            onChange={handleChange} />
        <button type="submit">ADD NOTE</button>
        </form>
        </>
    )
}