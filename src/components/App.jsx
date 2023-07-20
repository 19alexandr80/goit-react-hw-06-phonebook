import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { FormAddUser } from 'formPhoneBook/FormAddUser';
import { Filter } from 'contactList/Filter';
import { ContactList } from 'contactList/ContactList';
import { AppStyled } from 'AppStyled.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filter);

  const ren = useMemo(() => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.payload.toLowerCase());
    });
  }, [filter, contacts]);
  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <FormAddUser />
      <h2>Contacts</h2>
      <Filter />
      {ren && <ContactList ren={ren} />}
    </AppStyled>
  );
};
