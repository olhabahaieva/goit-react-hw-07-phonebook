// import { createSelector } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

import { createSelector } from "@reduxjs/toolkit";

// import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.contacts.items;

export const getContacts = (store) => {
    return store.contacts;
  };

  export const selectVisibleContacts = createSelector(
    [selectContacts, selectStatusFilter],
    (contacts, statusFilter) => {
     switch (statusFilter){
      case statusFilter.active:
        return contacts.filter(contact => contact.completed);
      case statusFilter.completed:
        return contacts.filter(contact => contact.completed);
        default:
          return contacts;
     }
      
    }
  );