import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Welcome() {
  const history = useHistory();
  function pushToLogin() {
    history.push('/home');
  }
  pushToLogin()
  return (
    <>
      bem vindo
    </>
  );
}