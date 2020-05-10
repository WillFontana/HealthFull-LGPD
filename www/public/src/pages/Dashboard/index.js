import React from 'react';
import { useHistory } from 'react-router-dom';
export default function Dashboard() {
  const history = useHistory();
  function pushToLogin() {
    history.push('/login');
  }
  pushToLogin();
  return (
    <>
      
    </>
  );
}