import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  StyledContactList,
  StyledContact,
} from 'components/ContactList/ContactList.styled';

export function ContactList({ filtredContacts, onDeleteContact }) {
  return (
    <StyledContactList>
      {filtredContacts.map(({ id, name, number }) => (
        <StyledContact key={id}>
          <ContactItem
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </StyledContact>
      ))}
    </StyledContactList>
  );
}

ContactList.propTypes = {
  filtredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
