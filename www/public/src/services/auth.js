const authed = () => {
  const user = localStorage.getItem('@app:user');
  const token = localStorage.getItem('@app:token');

  if (user && token) {
    return true;
  } else {
    return false;
  }
}

export default authed;