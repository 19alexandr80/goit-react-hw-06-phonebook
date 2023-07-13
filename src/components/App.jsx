import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'redux/store';
import { useState, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';

import { FormAddUser } from 'formPhoneBook/FormAddUser';
import { Filter } from 'contactList/Filter';
import { ContactList } from 'contactList/ContactList';
import { AppStyled } from 'AppStyled.styled';

export const App = () => {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState(() => {
    return localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : [];
  });
  const [filter, setFilter] = useState('');
  const onChangeFilter = e => {
    const value = e.target.value;
    setFilter(value);
  };
  const onDeleteUser = eId => {
    setContacts(
      contacts.filter(({ id }) => {
        return id !== eId;
      })
    );
  };
  const addUserPhoneBook = add => {
    if (contacts.find(el => el.name === add.name)) {
      alert(add.name + ' is already in contacts');
      return;
    }
    add.id = nanoid();
    setContacts(prev => [add, ...prev]);
  };
  useEffect(() => {
    const contactsJson = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsJson);
  }, [contacts]);
  const ren = useMemo(() => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }, [filter, contacts]);
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   React homework template Alexandr {value}
    //   <p>
    //     <button onClick={() => dispatch(increment(5))}>increment</button>
    //     <button onClick={() => dispatch(decrement(5))}>decrement</button>
    //   </p>
    // </div>
    <AppStyled>
      <h1>Phonebook</h1>
      <FormAddUser addUserPhoneBook={addUserPhoneBook} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={onChangeFilter} />
      {ren.length !== 0 && (
        <ContactList ren={ren} onDeleteUser={onDeleteUser} />
      )}
    </AppStyled>
  );
};
