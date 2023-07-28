// import { createSelector } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const getContacts = (store) => {
    return store.contacts;
  };

// export const selectVisibleContacts = createSelector(
//     const contacts = useSelector(selectContacts)
//     // [selectContacts],
//     // (contacts)=>{
//      return contacts

// )