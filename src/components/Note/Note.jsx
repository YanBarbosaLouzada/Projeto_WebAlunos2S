import React from 'react'
import './Note.css'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { NoteContext } from '../../context/NoteContext';
import { useContext } from 'react';

function Note({ title, description, date, id }) {
  const { deleteNote, setEditing, setNote, setIdEdit } = useContext(NoteContext);

  function SubmitToEdit() {
    setEditing(true);
    setNote({ title, description });
    setIdEdit(id);
  }

  return (
    <div className='noteContainer'>
      <div className='title'> {title} </div>
      <div className='description'> {description} </div>
      <div className='edit' onClick={() => SubmitToEdit()}> <FaPencilAlt fontSize={15} color='blue' /> </div>
      <div className='delete' onClick={() => deleteNote(id)}> <FaRegTrashAlt fontSize={15} color='red' /> </div>
      <div className='date'> {date} </div>
    </div>
  )
}

export default Note;