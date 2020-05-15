import React, { useState } from 'react';
import Parallax from 'react-springy-parallax'
// import { Link } from 'react-router-dom';

export default function Welcome() {
  const authed = useState(() => {
    const user = localStorage.getItem('@app:user');
    const token = localStorage.getItem('@app:token');
    if (user && token) {
      return true;
    } else {
      return false;
    }
  });



  return (
    <>
      {authed[0]
        ? <span>Usuario autenticado</span>
        : <>

        </>
      }
      <Parallax useRef='parallax' pages={3}>
        <Parallax.Layer
          offset={0}
          speed={0.5}>
          <div className="welcome-block">
            <h1 className="typo-display-2 typo-color-dark-primary typo-fw-bold">
              Seja bem vindo a HealthFull-LGPD
            </h1>
            Icons made by <a href="https://www.flaticon.com/authors/wichaiwi" title="Wichai.wi">Wichai.wi</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          </div>
        </Parallax.Layer>
      </Parallax>

    </>
  );
}