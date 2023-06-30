import { createSlice, nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const contactsInitialState = JSON.parse(localStorage.getItem('phonebook'));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (!state.map(contact => contact.name).includes(action.payload.name)) {
          state.push(action.payload);
          localStorage.setItem('phonebook', JSON.stringify(state));
        } else {
          Notiflix.Notify.failure(
            `${action.payload.name} is already in contacts.`
          );
        }
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('phonebook', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
