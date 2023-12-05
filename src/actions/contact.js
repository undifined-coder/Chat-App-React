
export const FETCH_CONTACTS = "FETCH_CONTACTS";
export const ADD_MESSAGE = "ADD_MESSAGE";

export function updateContacts(contacts) {
  return {
    type: FETCH_CONTACTS,
    contacts: contacts,
  };
}

export function addNewMessage(message, userId) {
  return { type: ADD_MESSAGE, message, userId };}