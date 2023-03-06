export const getContacts = state => state.contacts;

export const getFilteredContacts = state => {
  const { filter, contacts } = state;
  if (!filter) {
    return contacts;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });
  return result;
};
