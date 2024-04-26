import React from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <div>
        {contacts.map((contact) => (
          <p key={contact.id}>{contact.name}</p>
        ))}
      </div>
    </div>
  );
};

