import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCodesandbox, FiArrowLeft, FiActivity, FiHome, FiUser } from 'react-icons/fi'

export default function Header() {


  const [burguerState, setBurguerState] = useState('-closed');
  const [menuState, setMenuState] = useState('-closed');
  function ToggleBurguer(params) {
    if (burguerState === '-open') {
      setBurguerState('-closed');
      setMenuState('-closed');
    } else if (burguerState === '-closed') {
      setBurguerState('-open');
      setMenuState('-open');
    }
  }
  return (
    <>
      <header className={`top-header`} id="top-header">
        <i className="svg-icon">
          <FiCodesandbox />
        </i>
      </header>
      <nav className={`bottom-navigator`}>
        <Link to="/login" className="nav-item">
          <i className="svg-icon">
            <FiArrowLeft />
          </i>
        </Link>
        <a className="nav-item">
          <i className="svg-icon">
            <FiActivity />
          </i>
        </a>
        <a href="/dashboard" className="nav-item">
          <div className={`menu-burguer ${burguerState}`} onClick={ToggleBurguer}>
            <div className="burguer"></div>
          </div>
        </a>
        <a href="/home" className="nav-item">
          <i className="svg-icon">
            <FiHome />
          </i>
        </a>
        <a href="/user" className="nav-item">
          <i className="svg-icon">
            <FiUser />
          </i>
        </a>
      </nav>
      <aside className={`menu-overlay ${menuState}`}></aside>
    </>
  );
};