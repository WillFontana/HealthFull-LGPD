import React, { useState } from 'react';
import {
  FiInfo, FiAlertCircle, FiXCircle,
  FiEye, FiEyeOff, FiSquare, FiCheckSquare
} from 'react-icons/fi';

import waveBG from '../../assets/bgs/wave.svg';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Login() {


  const [usuario, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoged, setKeepLoged] = useState(false);

  // Mensagens
  const [messageTitle, setMessageTitle] = useState('Titulo Mensagem');
  const [messageBody, setMessageBody] = useState('Texto mensagem');
  const [messageIcon, setMessageIcon] = useState(FiInfo);
  const [messageState, setMessageState] = useState('info');
  const [messageAnimation, setMessageAnimation] = useState('fading');

  const history = useHistory();

  function createWarning(Icon, Title, Body, State) {
    setMessageIcon(Icon);
    setMessageTitle(Title);
    setMessageBody(Body);
    setMessageState(State);
    setMessageAnimation('show');
    setTimeout(() => {
      setMessageAnimation('fading');
    }, 6000);
  }

  async function HandlerLogin(e) {

    e.preventDefault();
    if (usuario === '') {
      createWarning(FiAlertCircle,
        'Campo Vazio',
        'É necessário inserir um nome de usuário',
        'error');
      return false;
    } else if (password === '') {
      createWarning(FiAlertCircle,
        'Campo Vazio',
        'É necessário inserir sua senha',
        'error');
      return false;
    }
    const data = {
      usuario,
      password,
    }
    try {
      const response = await api.post('login', data);
      const { token, user } = response.data;
      if (keepLoged) {
        localStorage.setItem('@app:token', token);
        localStorage.setItem('@app:user', JSON.stringify(user));
      }
      history.push('/');
    } catch (error) {
      createWarning(FiXCircle,
        'Ops!',
        'Não foi possível realizar o login',
        'error');
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

  function toggleCheck() {
    if (keepLoged) {
      setKeepLoged(false);
    } else {
      setKeepLoged(true);
    }
  }

  const bgStyle = {
    backgroundImage: `url(${waveBG})`
  };

  return (
    <>
      <div id="main-body">
        <aside className={`warning-box -${messageState} -${messageAnimation}`} id="current-warning">
          <i className="svg-icon">
            {messageIcon}
          </i>
          <p className="text typo-body-2 typo-fw-regular">
            <span className="typo-sub-heading typo-fw-bold _pr-sm">
              {messageTitle}
            </span>
            {messageBody}
          </p>
        </aside>
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
                    <input type="checkbox" className="input-check" onChange={toggleCheck} name="flKeepLoged" value="N" id="flKeepLoged" />
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