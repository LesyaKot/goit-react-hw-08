
export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;


export const selectFilteredContacts = (state) => state.contacts.filter;

// export const selectFilteredContacts = (state) => {
//     const filterValue = state.filters.value.toLowerCase();
//     return state.contacts.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(filterValue) ||
//         contact.number.includes(filterValue)
//     );
//   };

// import { createSelector } from "@reduxjs/toolkit"

// export const selectFilteredContacts = createSelector(
//   [selectContacts, (state) => state.filters.value.toLowerCase()],
//   (contacts, filterValue) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filterValue) ||
//       contact.number.includes(filterValue)
//     );
//   }
// );