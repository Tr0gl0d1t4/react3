import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (name) => {
    const newContacts = [...contacts, { name, isConnected: false }];
    setContacts(newContacts);
  };

  const removeContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const toggleConnection = (index) => {
    const newContacts = [...contacts];
    newContacts[index].isConnected = !newContacts[index].isConnected;
    setContacts(newContacts);
  };

  return (
    <div>
      <h1>Lista de contactos</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} -{" "}
            {contact.isConnected ? "Conectado" : "Desconectado"}
            <button onClick={() => removeContact(index)}>Eliminar</button>
            <button onClick={() => toggleConnection(index)}>
              Cambiar estado
            </button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const name = event.target.elements.name.value;
          addContact(name);
          event.target.reset();
        }}
      >
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">Crear contacto</button>
      </form>
    </div>
  );
}

export default App;
