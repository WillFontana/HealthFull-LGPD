import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiArrowLeft, FiSquare, FiCheckSquare } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    if (name === '') {
      alert('Insira um nome de usuario');
      return false;
    } else if (email === '') {
      alert('Insira um email válido ');
      return false;
    } else if (password === '') {
      alert('Insira um email válido ');
      return false;
    } else if (passwordConfirm === '') {
      alert('Voce precisa confirmar sua senha');
      return false;
    }
    const data = {
      name,
      email,
      password,
    }
    try {
      const response = await api.post('users', data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (error) {
      console.log(error);
      alert(`Ocorreu um erro ao realizar o cadastro`);
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

  function checkPasswords(e) {
    applyUsed(e)
    if (passwordConfirm !== '' && password !== '') {
      if (passwordConfirm !== password) {
        document.getElementById('txUserConfirmPassword').classList.add('-error');
        document.getElementById('txUserConfirmPassword').classList.remove('-verified');
        document.getElementById('register-button').classList.add('-disabled')
      } else {
        document.getElementById('txUserConfirmPassword').classList.remove('-error')
        document.getElementById('txUserConfirmPassword').classList.add('-verified')
        document.getElementById('register-button').classList.remove('-disabled')
      }
    }
  }

  return (
    <>
      <div className="content-all">
        <form className="login-container" onSubmit={handleRegister}>
          <div className="login-header">
            <div className="login-intro -register">
              <Link className="return-icon" to="/">
                <FiArrowLeft className="svg-icon" />
              </Link>
              <h2 className="title typo-color-dark-secondary typo-fw-regular">
                Cadastro
              </h2>
            </div>
          </div>
          <div className="login-form">
            <div className="text-box">
              <input type="text" value={name}
                onChange={e => setName(e.target.value)}
                onKeyUp={applyUsed}
                className="input" name="txUserName" id="txUserName" />
              <label htmlFor="txUserName" className="label">
                <span className="text">
                  Nome completo
              </span>
              </label>
            </div>
            <div className="text-box">
              <input type="email" value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyUp={applyUsed}
                className="input" name="txUserEmail" id="txUserEmail" />
              <label htmlFor="txUserEmail" className="label">
                <span className="text">
                  Email
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
            <div className="text-box">
              <input type="password" value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
                onKeyUp={checkPasswords}
                className="input -iconed" name="txUserConfirmPassword" id="txUserConfirmPassword" />
              <label htmlFor="txUserConfirmPassword" className="label">
                <div className="text">
                  Confirmar senha
            </div>
              </label>
              <div className="icon-box" onClick={e => { toggleAllowSeePassword('allowSeeConfirmPassowrdToggler', 'txUserConfirmPassword') }}
                id="allowSeeConfirmPassowrdToggler">
                <i className="svg-icon -eye allow">
                  <FiEye></FiEye>
                </i>
                <i className="svg-icon -eye -off unallow">
                  <FiEyeOff></FiEyeOff>
                </i>
              </div>
            </div>
          </div>
          <div className="login-footer">
            <div className="check-terms">
              <label htmlFor="flAcceptTerms" className="check-field ">
                <input type="checkbox" disabled className="input-check" name="flAcceptTerms" value="N" id="flAcceptTerms" />
                <div className="switch-check">
                  <div className="switch-check">
                    <FiSquare className="svg-icon -uncheck" />
                    <FiCheckSquare className="svg-icon -check" />
                  </div>
                </div>
                <p className="text typo-body-1 typo-fw-regular">
                  Li e aceito os termos de uso
                </p>
              </label>
            </div>
            <div className="submit-box _jc-between">
              <div className="main-button" id="terms">
                <div className="text">
                  Termos de uso
            </div>
              </div>
              <button className="main-button" type="submit" id="register-button">
                <div className="text">
                  Realizar cadastro
            </div>
              </button>
            </div>
            <div className="redirect-link">
              <Link to="/">
                <div className="text _pt-md typo-color-primary typo-body-2">
                  Já possuo um cadastro
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}