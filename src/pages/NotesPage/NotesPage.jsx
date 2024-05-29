import React, { useEffect } from 'react'
import { NoteProvider } from '../../context/NoteContext'
import FormNote from '../../components/FormNote/FormNote' // novo
import AllNotes from '../../components/AllNotes/AllNotes'
import './NotesPage.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NotesPage() {

  const isLogged = useSelector((state) => state.user.isLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged == false) {
      navigate("/login");
    }
  }, []);
  
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