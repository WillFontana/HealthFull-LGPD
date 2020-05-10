import React from 'react';
import { FiEye, FiEyeOff, FiSquare, FiCheckSquare } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <aside className="common-modal">
        <div className="login-container">
          <div className="login-header">
            <div className="login-icon-animation">

            </div>
            <div className="login-intro">
              <h2 className="title typo-color-dark-secondary typo-fw-regular">
                Login teste
          </h2>
            </div>
          </div>
          <form className="login-form" method="POST" action="localhost:4000/user/login">
            <div className="text-box">
              <input type="text" className="input" name="txUserLogin" id="txUserLogin" />
              <label htmlFor="txUserLogin" className="label">
                <span className="text">
                  Usuário de acesso
              </span>
              </label>
            </div>
            <div className="text-box">
              <input type="password" className="input -iconed" name="txUserPassword" id="txUserPassword" />
              <label htmlFor="txUserPassword" className="label">
                <div className="text">
                  Senha de acesso
            </div>
              </label>
              <div className="icon-box" id="allowSeePassowrdToggler">
                <i className="svg-icon -eye allow">
                  <FiEye></FiEye>
                </i>
                <i className="svg-icon -eye -off unallow">
                  <FiEyeOff></FiEyeOff>
                </i>
              </div>
            </div>
          </form>
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
                  Ainda não possuo cadastro
                </div>
              </Link>
            </div>
          </div>
        </div>
      </aside >
    </>
  );
}