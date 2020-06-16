import React, { useState, useEffect } from "react";
import dummyProfilePicture from '../../assets/profiles/dummy_picture.png';
import { FiCamera, FiEdit3, FiLogOut, FiX, FiEye, FiEyeOff, FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import authed from '../../services/auth';

export default function Profile() {

  const history = useHistory();

  const username = localStorage.getItem('@app:username');
  const useremail = localStorage.getItem('@app:useremail');


  const [profileEditName, setProfileEditName] = useState(username);
  const [profileEditEmail, setProfileEditEmail] = useState(useremail);

  const [profileEditPassword, setProfileEditPassword] = useState();
  const [profileEditConfirmPassword, setProfileEditConfirmPassword] = useState();

  const [profileEditAge, setProfileEditAge] = useState();
  const [profileEditBirthday, setProfileEditBirthday] = useState();
  const [profileEditJob, setProfileEditJob] = useState();
  const [profileEditUF, setProfileEditUF] = useState();
  const [profileEditCity, setProfileEditCity] = useState();


  function handleLogout() {
    localStorage.removeItem('@app:token');
    localStorage.removeItem('@app:user');
    window.location.reload(false);
  }

  function handleChangeUserData() {
    
  }

  const [userProfile, setUserProfile] = useState({});

  const [modalProfileState, setModalState] = useState('-closed');

  const [popupModalState, setPopupModalState] = useState('-closed');

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
  };

  function pushToLogin() {
    history.push('/login');
  };

  function applyUsed(e) {
    let input = e.target.id;
    let inputValue = e.target.value.trim();
    if (inputValue !== '') {
      document.getElementById(input).classList.add("-used");
    } else {
      document.getElementById(input).classList.remove("-used");
    }
  };

  function applyMaskMaxLenght(e, number) {
    let inputVal = e.target.value.length
    console.log(inputVal);
    console.log(number);
    if (inputVal >= number) {
      e.preventDefault();
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

  };

  function clearPassworEdit() {
    document.getElementById('txUserEditPassword').value = '';
    document.getElementById('txUserConfirmPassword').value = '';
    setPopupModalState('-closed');
  }

  function checkPasswords(e) {
    applyUsed(e)
    if (profileEditConfirmPassword !== '' && profileEditPassword !== '') {
      if (profileEditConfirmPassword !== profileEditPassword) {
        document.getElementById('txUserConfirmPassword').classList.add('-error');
        document.getElementById('txUserConfirmPassword').classList.remove('-verified');
        document.getElementById('submitNewPassword').classList.add('-disabled')
      } else {
        document.getElementById('txUserConfirmPassword').classList.remove('-error')
        document.getElementById('txUserConfirmPassword').classList.add('-verified')
        document.getElementById('submitNewPassword').classList.remove('-disabled')
      }
    }
  };


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
              <div className="prf_button -edit" onClick={() => { setModalState('-open') }}>
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
                {userProfile.city && userProfile.uf &&
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

      <>
        <aside className={`profile-modal ${modalProfileState}`}>
          <div className="profile-header">
            <h2 className="typo-display-2 typo-color-dark-secondary">
              Editar dados do perfil
            </h2>
            <div className="close-icon" onClick={() => { setModalState('-close') }}>
              <i className="svg-icon">
                <FiX />
              </i>
            </div>
          </div>
          <form className="profile-body">
            <div className="main-form">

              <div className="text-box">
                <input type="text" value={profileEditName}
                  onKeyUp={applyUsed}
                  onChange={e => setProfileEditName(e.target.value)}
                  className="input -forced-used" name="txEditUserName" id="txEditUserName" />
                <label htmlFor="txEditUserName" className="label">
                  <span className="text">
                    Nome cadastrado
                  </span>
                </label>
              </div>

              <div className="text-box">
                <input type="email" value={profileEditEmail}
                  onKeyUp={applyUsed}
                  onChange={e => setProfileEditEmail(e.target.value)}
                  className="input -forced-used" name="txEditUserEmail" id="txEditUserEmail" />
                <label htmlFor="txEditUserEmail" className="label">
                  <span className="text">
                    Email cadastrado
                  </span>
                </label>
              </div>

              <div className="text-box">
                <input type="text" value={profileEditJob}
                  onKeyUp={applyUsed}
                  onChange={e => setProfileEditJob(e.target.value)}
                  className="input" name="txEditUserJob" id="txEditUserJob" />
                <label htmlFor="txEditUserJob" className="label">
                  <span className="text">
                    Sua profissão
                  </span>
                </label>
              </div>

              <div className="text-box">
                <input type="text" value={profileEditUF}
                  onKeyUp={applyUsed}
                  onChange={e => setProfileEditUF(e.target.value)}
                  className="input" name="txEditUserUF" id="txEditUserUF" />
                <label htmlFor="txEditUserUF" className="label">
                  <span className="text">
                    UF
                  </span>
                </label>
              </div>

              <div className="text-box">
                <input type="text" value={profileEditCity}
                  onKeyUp={applyUsed}
                  onChange={e => setProfileEditCity(e.target.value)}
                  className="input" name="txEditUserCity" id="txEditUserCity" />
                <label htmlFor="txEditUserCity" className="label">
                  <span className="text">
                    Cidade de moradia
                  </span>
                </label>
              </div>

              <div className="text-box">
                <input type="number" value={profileEditAge}
                  onKeyPress={e => applyMaskMaxLenght(e, 2)}
                  onKeyUp={applyUsed}
                  onChange={e => setProfileEditAge(e.target.value)}
                  className="input" name="txEditUserAge" id="txEditUserAge"
                  max={2} />
                <label htmlFor="txEditUserAge" className="label">
                  <span className="text">
                    Sua idade
                  </span>
                </label>
              </div>

              <div className="text-box">
                <input type="date" value={profileEditBirthday}
                  onKeyPress={e => applyMaskMaxLenght(e, 11)}
                  onKeyUp={applyUsed}
                  onChange={e => setProfileEditBirthday(e.target.value)}
                  className="input -forced-used" name="txEditUserBirthday" id="txEditUserBirthday"
                  max={8} />
                <label htmlFor="txEditUserBirthday" className="label">
                  <span className="text">
                    O dia do seu nascimento
                  </span>
                </label>
              </div>
              <div className="form-footer">
                <div onClick={() => { setPopupModalState('-show') }} className="main-button -danger">
                  <p className="text">
                    Alterar minha senha
                </p>
                </div>
                <div className="main-button">
                  <p className="text">
                    Atualizar perfil
                  </p>
                </div>
              </div>
            </div>
          </form>
        </aside>
        <aside className={`popup-modal ${popupModalState}`}>
          <div className="popup-content">
            <div className="popup-header">
              <div className="return-path" onClick={clearPassworEdit}>
                <i className="svg-icon">
                  <FiArrowLeft />
                </i>
              </div>
              <h3 className="text typo-headline typo-fw-regular typo-color-dark-secondary">
                Alterar a senha de usuário
            </h3>
            </div>
            <form className="popup-form">
              <div className="text-box">
                <input type="password"
                  onChange={e => setProfileEditPassword(e.target.value)}
                  onKeyUp={applyUsed}
                  className="input -iconed" name="txUserEditPassword" id="txUserEditPassword" />
                <label htmlFor="txUserEditPassword" className="label">
                  <div className="text">
                    Nova senha
              </div>
                </label>
                <div className="icon-box" onClick={e => { toggleAllowSeePassword('allowSeePassowrdToggler', 'txUserEditPassword') }} id="allowSeePassowrdToggler">
                  <i className="svg-icon -eye allow">
                    <FiEye></FiEye>
                  </i>
                  <i className="svg-icon -eye unallow">
                    <FiEyeOff></FiEyeOff>
                  </i>
                </div>
              </div>

              <div className="text-box">
                <input type="password"
                  onChange={e => setProfileEditConfirmPassword(e.target.value)}
                  onKeyUp={checkPasswords}
                  className="input -iconed" name="txUserConfirmPassword" id="txUserConfirmPassword" />
                <label htmlFor="txUserConfirmPassword" className="label">
                  <div className="text">
                    Confirmar nova senha
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
              <div className="popup-form-footer">
                <button className="main-button" id="submitNewPassword">
                  <p className="text">
                    Atualizar senha
                  </p>
                </button>
              </div>
            </form>

          </div>
        </aside>
      </>
    </>
  );
};