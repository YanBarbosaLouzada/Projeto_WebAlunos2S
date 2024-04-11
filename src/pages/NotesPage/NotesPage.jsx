import React from 'react'
import { NoteProvider } from '../../context/NotesContext'
import './NotesPage.css'

function NotesPage() {
  return (
      <NoteProvider>
          <div className='notePageContainer'>
              <FormNote />
              <AllNotes />
          </div>
    </NoteProvider>
  )
}

export default NotesPage