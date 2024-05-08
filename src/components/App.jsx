import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and phone number.');
      return;
    }
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (existingContact) {
      alert(`Contact with name "${name.trim()}" already exists.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
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
    >
      <h1>Contact List</h1>
      <ContactForm
        name={name}
        number={number}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={handleSubmit}
      />
      <ContactList
        contacts={contacts}
        filter={filter}
        setFilter={setFilter}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
