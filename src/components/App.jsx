import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {ContactForm} from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';

export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name.trim()
    };
    setContacts([...contacts, newContact]);
    setName('');
    console.log(contacts)
    console.log(name)
  };
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        flexDirection: 'column',
      }}
    ><h1>Contact List</h1>
    <ContactForm
      name={name}
      onNameChange={handleNameChange}
      onSubmit={handleSubmit}
    />
    <ContactList contacts={contacts} />


    </div>
  );
};
