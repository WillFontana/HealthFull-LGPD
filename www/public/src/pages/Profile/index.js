import React, { useState, useEffect } from "react";
import dummyProfilePicture from '../../assets/profiles/dummy_picture.png';
import { FiCamera, FiEdit3, FiLogOut } from 'react-icons/fi';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import authed from '../../services/auth';

export default function Profile() {

  const history = useHistory();

  const username = localStorage.getItem('@app:username');
  const userId = localStorage.getItem('@app:id');
  const useremail = localStorage.getItem('@app:useremail');

  function handleLogout() {
    localStorage.removeItem('@app:token');
    localStorage.removeItem('@app:user');
    window.location.reload(false);
  }

  const [userProfile, setUserProfile] = useState({});

  function Profile() {
    try {
      useEffect(() => {
        const userToken = localStorage.getItem('@app:id');
        api.get(`profile?id=${userToken}`).then(response => setUserProfile(response.data.profile[0]));
      }, []);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  function pushToLogin() {
    history.push('/login');
  }
  Profile();
  return (

    <>
      {
        authed() && Profile() ?
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
              <div className="prf_button -logout" onClick={handleLogout}>
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
                  {username}
                </h2>
              </div>
              <div className="user-description">
                <h2 className="typo-title _mt-sm _text-center typo-color-dark-primary">
                  ID de Usuário: <span className=" _pl-sm typo-headline">{userProfile.user_id}</span>
                </h2>
                <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                  Email cadastrado:
                </p>
                <h2 className="typo-title typo-color-dark-primary">
                  {useremail}
                </h2>
                {/* Profissão do usuário */}
                {userProfile.job &&
                  <>
                    <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                      Profissão:
                    </p>
                    <h2 className="typo-title typo-color-dark-primary">
                      {userProfile.job}.
                    </h2>
                  </>
                }
                {/* Profissão do usuário */}
                {userProfile.city  && userProfile.uf &&
                  <>
                    <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                      Moradia atual:
                    </p>
                    <h2 className="typo-title typo-color-dark-primary">
                      {userProfile.city}/{userProfile.uf}.
                    </h2>
                  </>
                }
                {/* Idade do usuário */}
                {userProfile.age &&
                  <>
                    <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                      Idade:
                    </p>
                    <h2 className="typo-title typo-color-dark-primary">
                      {userProfile.age}.
                    </h2>
                  </>
                }
                {/* Data de nascimento do usuário */}
                {userProfile.birthday &&
                  <>
                    <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                      Data de nascimento:
                    </p>
                    <h2 className="typo-title typo-color-dark-primary">
                      {userProfile.birthday}.
                    </h2>
                  </>
                }
              </div>
            </div>
          </section>
          :
          pushToLogin()
      }
    </>
  );
};