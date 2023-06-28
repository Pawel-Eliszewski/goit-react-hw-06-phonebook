import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleUpperCase().includes(filter)
  );

  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={nanoid()} id={contact.id}>
            {`${contact.name}: ${contact.number}`}
            <button
              key={nanoid()}
              className={css.btn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
