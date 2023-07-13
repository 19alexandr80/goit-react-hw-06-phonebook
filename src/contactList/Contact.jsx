import PropTypes from 'prop-types';
import { ContactStyled, TelStyled } from 'contactList/ContactListStyled.styled';

export const Contact = ({ id, name, number, onDeleteUser }) => {
  return (
    <ContactStyled>
      <p>
        {name}: <TelStyled>{number}</TelStyled>
      </p>
      <button
        type="button"
        onClick={e => onDeleteUser(e.target.dataset.id)}
        data-id={id}
      >
        Delete
      </button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};
