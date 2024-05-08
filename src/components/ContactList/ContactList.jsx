import React from 'react';

export const ContactList = ({
  contacts,
  filter,
  setFilter,
  onDeleteContact,
}) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>
      <div>
        <label htmlFor="filter">Filter contacts by name:</label>
        <input
          type="text"
          id="filter"
          name="filter"
          placeholder="Search contacts"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <strong>Name:</strong>
            {contact.name} <strong>Number:</strong> {contact.number}
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
