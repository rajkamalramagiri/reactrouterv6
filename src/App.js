import React, { useState } from 'react';
import { uuid } from 'uuidv4'

import {Routes, Route, Link} from 'react-router-dom'
import AddContact from './AddContact';
import Contact from './Contact';
import ContactList from './ContactList';

function App() {
  const[contacts, setContacts] =useState([{id:1,name:'raj',email:'raj@gmail'},{id:2,name:'gowtham',email:'gowtham@gmail.com'}])

  const handleDelete = (id) => {
      let newContact = contacts.filter(c => c.id !== id)
    setContacts(newContact)
  }

  const handleAdd = ({name,email}) => {
    const newContact = { id: uuid(), name, email }
    let newContacts=[...contacts,newContact]
    setContacts(newContacts)

  }

  return <div>
    <h2>Contact Manager</h2> 
    <Routes>
      <Route path='/' element={<ContactList contacts={contacts} handleDelete={handleDelete} />} />
      <Route path='add' element={<AddContact handleAdd={handleAdd} />} />
      <Route path='contact/:id' element={<Contact contacts={contacts} />} />
   
      
    </Routes>
  </div>;
}

export default App;
