import React from "react";
import dummyProfilePicture from '../../assets/profiles/willyan.jpg';
import { FiCamera, FiEdit3, FiLogOut } from 'react-icons/fi';

export default function Profile() {
  return (
    <>
      <section className="profile-section">
        <div className="profile-header">
          <div className="profile-picture">
            <img src={dummyProfilePicture} alt="foto de perfil" className="image-fluid" />
            <div className="picture-management">
              <i className="svg-icon">
                <FiCamera />
              </i>
            </div>
          </div>
          <div className="picuter-ornament"></div>
        </div>
        <div className="profile-management">
          <div className="prf_button -edit">
            <i className="svg-icon">
              <FiEdit3 />
            </i>
            <p className="_pl-sm typo-sub-heading">
              Editar perfil
            </p>
          </div>
          <div className="prf_button -logout">
            <p className="_pr-sm typo-sub-heading">
              Sair da conta
            </p>
            <i className="svg-icon">
              <FiLogOut />
            </i>
          </div>
        </div>
        <div className="profile-body">
          <div className="user-name">
            <h2 className="typo-display-2 _text-center typo-color-dark-primary">
              Willyan Fontana
          </h2>
          </div>
          <div className="user-description">
            <h2 className="typo-title _mt-sm _text-center typo-color-dark-primary">
              ID de Usuário: <span className=" _pl-sm typo-headline">b1077532</span>
            </h2>
            <p className="typo-body-2 _mt-md typo-color-dark-secondary">
              Idade:
            </p>
            <h2 className="typo-title typo-color-dark-primary">
              21 anos.
            </h2>
            <p className="typo-body-2 _mt-md typo-color-dark-secondary">
              Profissão:
            </p>
            <h2 className="typo-title typo-color-dark-primary">
              Desenvolvedor Front e BackEnd.
            </h2>
            <p className="typo-body-2 _mt-md typo-color-dark-secondary">
              Email cadastrado:
            </p>
            <h2 className="typo-title typo-color-dark-primary">
              willyanfontana@gmail.com
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};