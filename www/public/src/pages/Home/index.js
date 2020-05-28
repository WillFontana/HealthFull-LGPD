import React from 'react';
import databaseSecurity from '../../assets/icons/lgpd/database.svg'
import requirementSecurity from '../../assets/icons/lgpd/requirements.svg'
import dateSecurity from '../../assets/icons/lgpd/date.svg'
import hintsSecurity from '../../assets/icons/lgpd/list.svg'
// import {Link, useHistory } from 'react-router-dom';

export default function Dashboard() {
  // const history = useHistory();
  // function pushToLogin() {
  //   // history.push('/login');
  // }
  // pushToLogin();
  return (
    <>
      <section className="main-app _mt-xl">
        <div className="grid-cards">
          <div className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={databaseSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                O que é a LGPD?
                </h3>
            </div>
          </div>
          <div className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={requirementSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Quais seus requisitos?
                </h3>
            </div>
          </div>
          <div className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={dateSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Datas e eventos relacionados
                </h3>
            </div>
          </div>
          <div className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={hintsSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Dicas e bons costumes
                </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};