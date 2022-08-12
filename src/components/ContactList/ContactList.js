import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import {
  StyledContactList,
  StyledContact,
  ContactInfo,
} from 'components/ContactList/ContactList.styled';

export function ContactList({ filtredContacts, onDeleteContact }) {
  return (
    <StyledContactList>
      {filtredContacts.map(({ id, name, number }) => (
        <StyledContact key={id}>
          <ContactInfo>{name}</ContactInfo>
          <ContactInfo>{number}</ContactInfo>
          <Button
            title="delete"
            type="button"
            onClick={() => onDeleteContact(id)}
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
