import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { ContactInfo } from 'components/ContactItem/ContactItem.styled';

export function ContactItem({ name, number, onDeleteContact }) {
  return (
    <>
      <ContactInfo>{name}</ContactInfo>
      <ContactInfo>{number}</ContactInfo>
      <Button title="delete" type="button" onClick={onDeleteContact} />
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
