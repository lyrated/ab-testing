/**
 * Returns the user ID from local storage or creates a new one if not defined
 */
export const getUserId = async (): Promise<string> => {
  if (process.server) {
    return '';
  }

  const uid = localStorage.getItem('uid');

  if (!uid) {
    const { data } = await useFetch('/api/user-id');
    localStorage.setItem('uid', data.value?.userId || '');
    return data.value?.userId || '';
  }

  return uid || '';
};
