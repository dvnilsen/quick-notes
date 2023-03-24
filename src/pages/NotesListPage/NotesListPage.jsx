

export default function NotesListPage({ note }) {
  return (
   <div>
    <h3>
      { note.text } 
    </h3>
      <div>
        Made at: {new Date(note.createdAt).toLocaleString()} 
      </div>
   </div>
  )
  
  }