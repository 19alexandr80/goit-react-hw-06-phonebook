import PropTypes from 'prop-types';

import { Contact } from 'contactList/Contact';

import { ContactsLitsStyled } from 'contactList/ContactListStyled.styled';

export const ContactList = ({ ren }) => {
  return (
    <ContactsLitsStyled>
      {ren.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsLitsStyled>
  );
};

ContactList.propTypes = {
  ren: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
