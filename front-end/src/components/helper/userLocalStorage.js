export function userLocalStorage() {
  const user = JSON.parse(localStorage.user);
  const token = localStorage.getItem('token');
  const userLocalStorage = {
    user,
    token,
  };
  return userLocalStorage;
}
