import React from 'react';
import testSecurity from '../../assets/icons/lgpd/test.svg'
import historySecurity from '../../assets/icons/lgpd/history.svg'
import dashboardSecurity from '../../assets/icons/lgpd/dashboard.svg'
import highlightsSecurity from '../../assets/icons/lgpd/highlights.svg'
// import {Link, useHistory } from 'react-router-dom';

export default function Dashboard() {
  // const history = useHistory();
  // function pushToLogin() {
  //   // history.push('/login');
  // }
  // pushToLogin();
  return (
    <>
      <div className="main-app _mt-xl">
        <div className="grid-cards">
          <div className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={testSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Realizar teste
                </h3>
            </div>
          </div>
          <div className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={historySecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Histórico <br />
                 de testes
                </h3>
            </div>
          </div>
          <div className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={dashboardSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Meu <br /> desempenho
                </h3>
            </div>
          </div>
          <div className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={highlightsSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Meus <br />
                 destaques
                </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};