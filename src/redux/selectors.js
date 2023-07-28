// import { createSelector } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const getContacts = (store) => {
    return store.contacts;
  };
  // export const selectVisibleContacts = createSelector(
  //   [selectContacts],
  //   (contacts) => {
     
  //     return contacts;
  //   }
  // );