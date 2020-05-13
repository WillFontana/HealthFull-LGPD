import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiSquare, FiCheckSquare } from 'react-icons/fi';

import waveBG from '../../assets/bgs/wave.svg';


import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Login() {

  const [usuario, setUser] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function HandlerLogin(e) {
    e.preventDefault();
    if (usuario === '') {
      alert('Insira um nome de usuario');
      // let warning = {
      //   situation: '-error',
      //   title: 'Nome de usuário vazio',
      //   message: 'É necessário informar um nome de usuário',
      // }
      // callWarning(warning.situation, warning.title, warning.message)
      return false;
    } else if (password === '') {
      alert('Insira um email válido ');
      return false;
    }
    const data = {
      usuario,
      password,
    }
    try {
      const response = await api.post('login', data);
      alert(`Seu token de acesso: ${response.data.token}`);
      history.push('/welcome');
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro ao realizar seu Login');

    }
  }

  function applyUsed(e) {
    let input = e.target.id;
    let inputValue = e.target.value.trim();
    if (inputValue !== '') {
      document.getElementById(input).classList.add("-used");
    } else {
      document.getElementById(input).classList.remove("-used");
    }
  };

  // function callWarning(situation, title, message) {
  //   document.getElementById('main-body').appendChild(`
  //   <aside class="warning-box ${situation}" id="current-warning">
  //     <p class="text typo-body-2 typo-fw-regular">
  //      <span class="typo-sub-heading typo-fw-bold _pr-sm">
  //        ${title}
  //      </span>
  //       ${message}
  //     </p>
  //   </aside>
  //   `);
  //   document.getElementById('#warning-box').classList.remove('-fading');
  //   setTimeout(() => {
  //     document.getElementById('#current-warning').classList.add('-fading');
  //   }, 6000);

  // }


  function toggleAllowSeePassword(idButton, idInput) {
    let passwordInput = document.getElementById(idInput);
    let passwordToggler = document.getElementById(idButton);
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggler.classList.add('-show');
    } else {
      passwordInput.type = "password";
      passwordToggler.classList.remove('-show');
    }

  }

  const bgStyle = {
    backgroundImage: `url(${waveBG})`
  };

  return (
    <>
      <div id="main-body">
        <div className="main-bgs" style={bgStyle}>
          <aside className="common-modal">
            <form className="login-container" onSubmit={HandlerLogin}>
              <div className="login-header">
                <div className="login-icon-animation">

                </div>
                <div className="login-intro">
                  <h2 className="title typo-color-dark-secondary typo-fw-regular">
                    Entrar
                </h2>
                </div>
              </div>
              <div className="login-form">
                <div className="text-box">
                  <input type="text" value={usuario}
                    onChange={e => setUser(e.target.value)}
                    onKeyUp={applyUsed}
                    className="input" name="txUserName" id="txUserName" />
                  <label htmlFor="txUserName" className="label">
                    <span className="text">
                      Nome completo
              </span>
                  </label>
                </div>
                <div className="text-box">
                  <input type="password" value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyUp={applyUsed}
                    className="input -iconed" name="txUserPassword" id="txUserPassword" />
                  <label htmlFor="txUserPassword" className="label">
                    <div className="text">
                      Senha do usário
            </div>
                  </label>
                  <div className="icon-box" onClick={e => { toggleAllowSeePassword('allowSeePassowrdToggler', 'txUserPassword') }} id="allowSeePassowrdToggler">
                    <i className="svg-icon -eye allow">
                      <FiEye></FiEye>
                    </i>
                    <i className="svg-icon -eye unallow">
                      <FiEyeOff></FiEyeOff>
                    </i>
                  </div>
                </div>
              </div>
              <div className="login-footer">
                <div className="check-terms _jc-end">
                  <label htmlFor="flKeepLoged" className="check-field">
                    <input type="checkbox" className="input-check" name="flKeepLoged" value="S" id="flKeepLoged" />
                    <div className="switch-check">
                      <FiSquare className="svg-icon -uncheck" />
                      <FiCheckSquare className="svg-icon -check" />
                    </div>
                    <p className="text typo-body-1 typo-fw-regular">
                      Lembrar de mim
                </p>
                  </label>
                </div>
                <div className="submit-box _jc-end">
                  <button className="main-button" type="submit" id="login-button">
                    <div className="text">
                      Fazer login
            </div>
                  </button>
                </div>
                <div className="redirect-link">
                  <Link to="/register">
                    <div className="text _pt-md typo-color-primary typo-body-2">
                      Ainda não possuo uma conta
                </div>
                  </Link>
                </div>
              </div>
            </form>
          </aside >
        </div>
      </div>
    </>
  );
}