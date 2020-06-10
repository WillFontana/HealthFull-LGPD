import React from 'react';
import databaseSecurity from '../../assets/icons/lgpd/database.svg';
import requirementSecurity from '../../assets/icons/lgpd/requirements.svg';
import dateSecurity from '../../assets/icons/lgpd/date.svg';
import hintsSecurity from '../../assets/icons/lgpd/list.svg';
import LgpdHealth from '../../assets/icons/lgpd/lgpdSaude.svg';
import beyondProgram from '../../assets/icons/lgpd/beyondProgram.svg';
import medicalFocus from '../../assets/icons/lgpd/medicalFocus.svg';
import MedicoPacient from '../../assets/icons/lgpd/MedicoPacient.svg';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <section className="main-app _mt-xl">
        <div className="grid-cards">
          <Link to="/about" className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={databaseSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                O que é a LGPD?
                </h3>
            </div>
          </Link>
          <Link to="/requisitos" className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={requirementSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Direitos e deveres
                </h3>
            </div>
          </Link>
          <Link to="/datas-e-eventos" className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={dateSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Datas e eventos relacionados
                </h3>
            </div>
          </Link>
          <Link to="/dicas" className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={hintsSecurity} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Dicas e bons costumes
                </h3>
            </div>
          </Link>
          <Link to="/lgpd-na-saude" className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={LgpdHealth} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                LGPD na saúde
                </h3>
            </div>
          </Link>
          <Link to="/alem-da-programacao" className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={beyondProgram} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Muito além da programação
              </h3>
            </div>
          </Link>
          <Link to="/medicos-em-foco" className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={medicalFocus} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Médicos em foco
              </h3>
            </div>
          </Link>
          <Link to="/medicos-e-pacientes" className="card-block">
            <div className="card-content">
              <div className="card-icon">
                <img src={MedicoPacient} alt="LGPD" className="image-fluid" />
              </div>
              <h3 className="typo-display-1 typo-color-primary _text-center">
                Médicos e pacientes
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};