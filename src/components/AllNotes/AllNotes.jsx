import React, { useContext } from 'react'
import { NoteContext } from '../../context/NotesContext'

function AllNotes() {
    const { notes } = useContext(NoteContext);
  return (
    <div className='AllNotes'>
          {notes.map((note) => {
              <a key={note.id} {...n}></a>
          })}
    </div>
  )
}

export default AllNotes

// arrumar linha 9
// criar notes
// importar pagina no router
// importar no navbar

