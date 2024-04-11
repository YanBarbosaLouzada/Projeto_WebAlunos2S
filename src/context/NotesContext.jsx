import React from 'react'
import { useState } from 'react';
import { generateRandomId } from '../helpers/generateRandomId';

const NotesContext = React.createContext();

const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([...mockNotes]);

    const addNote = (title,description) => {
        setNotes([...notes, {id: generateRandomIdd(),description}]);
    }

}

export default NotesContext