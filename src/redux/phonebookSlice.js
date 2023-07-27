import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const deleteContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1, action.payload);
};

//Redux Slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  
  extraReducers: builder =>
    builder
      .addCase(fetchContact.pending, pendingReducer)
      .addCase(fetchContact.fulfilled, fetchContactsFulfilledReducer)
      .addCase(fetchContact.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(deleteContact.rejected, rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
// const initialState = {
// contacts: [],
// filter: '',
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContacts: (state, action) => {
//       state.contacts = [...state.contacts, action.payload];
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     addFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContacts, deleteContact } = contactsSlice.actions;
// export const { addFilter } = filterSlice.actions;

// const rootReducer = {
//   contacts: contactsSlice.reducer,
//   filter: filterSlice.reducer,
// };

// export default rootReducer;
