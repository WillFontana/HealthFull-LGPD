import React from "react";
import dummyProfilePicture from '../../assets/profiles/willyan.jpg';
import { FiCamera, FiEdit3, FiLogOut } from 'react-icons/fi';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import authed from '../../services/auth';
import { useState } from "react";

export default function Profile() {

  const history = useHistory();

  const username = localStorage.getItem('@app:username');
  const userId = localStorage.getItem('@app:id');
  const useremail = localStorage.getItem('@app:useremail');


  const [userAge, setUserAge] = useState('Não informado')
  const [userJob, setUserJob] = useState('Não informado')
  const [userCity, setUserCity] = useState('Não informado')
  const [userUf, setUserUf] = useState('Não informado')
  const [userStudent, setUserStudent] = useState('Não informado')
  const [userBirthday, setUserBirthday] = useState('Não informado')


  function handleLogout() {
    localStorage.removeItem('@app:token');
    localStorage.removeItem('@app:user');
    window.location.reload(false);
  }


  async function buildProfile() {

    const userProfile = localStorage.getItem('@app:id');

    try {
      const { data } = await api.get(`profile?id=${userProfile}`);
      const userData = data.profile[0];

      if (userData.age !== undefined || userData.age !== null) {
        setUserAge(userData.age);
      }
      if (userData.job !== undefined || userData.job !== null) {
        setUserJob(userData.job);
      }
      if (userData.city !== undefined || userData.city !== null) {
        setUserCity(userData.city);
      }
      if (userData.uf !== undefined || userData.uf !== null) {
        setUserUf(userData.uf);
      }
      if (userData.student !== undefined || userData.student !== null) {
        setUserStudent(userData.student);
      }
      if (userData.birthday !== undefined || userData.birthday !== null) {
        setUserBirthday(userData.birthday);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  }

  function pushToLogin() {
    history.push('/login');
  }

  return (

    <>
      {
        authed() && buildProfile() ?
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
              <div className="prf_button -edit" onClick={buildProfile}>
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
                  ID de Usuário: <span className=" _pl-sm typo-headline">{userId}</span>
                </h2>
                <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                  Email cadastrado:
                </p>
                <h2 className="typo-title typo-color-dark-primary">
                  {useremail}
                </h2>
                <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                  Idade:
               </p>
                <h2 className="typo-title typo-color-dark-primary">
                  {userAge}
                </h2>
                <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                  Profissão:
                </p>
                <h2 className="typo-title typo-color-dark-primary">
                  {userJob}
                </h2>
                <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                  Data de nascimento:
                </p>
                <h2 className="typo-title typo-color-dark-primary">
                  {userBirthday}
                </h2>
                <p className="typo-body-2 _mt-md typo-color-dark-secondary">
                  Estado e cidade:
                </p>
                <h2 className="typo-title typo-color-dark-primary">
                  {userCity}/{userUf} 
                </h2>
              </div>
            </div>
          </section>
          :
          pushToLogin()
      }
    </>
  );
};