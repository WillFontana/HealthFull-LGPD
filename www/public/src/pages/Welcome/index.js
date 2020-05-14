import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  const authed = useState(() => {
    const user = localStorage.getItem('@app:user');
    const token = localStorage.getItem('@app:user');
    if (user && token) {
      return true;
    }
    return false;
  });



  return (
    <>
      {authed
        ? <span>Usuario autenticado</span>
        : <span>Usuario não autenticado</span>
      }
      <h2 className="Welcome-text">
        Seja Bem vindo!
      </h2>
      <Link to="/login">
        <div className="text _pt-md typo-color-primary typo-body-2">
          Entrar
                </div>
      </Link>
    </>
  );
}