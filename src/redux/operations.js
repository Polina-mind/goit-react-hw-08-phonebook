import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './actions';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error.message)));
};

const addContact = (name, number) => dispatch => {
  const contact = { ...name, ...number };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest(id));

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

//асинхронный вариант
// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get(
//       '/contacts',
//     );

//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error.message));
//   }
// };

// const addContact = (name, number) => async dispatch => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(addContactRequest());
//   try {
//     const { data } = await axios.post(
//       '/contacts',
//       contact,
//     );
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error.message));
//   }
// };

// const deleteContact = id => async dispatch => {
//   dispatch(deleteContactRequest(id));
//   try {
//     await axios.delete(
//       `/contacts/${id}`,
//     );
//     dispatch(deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(deleteContactError(error.message));
//   }
// };

export { addContact, deleteContact, fetchContacts };
