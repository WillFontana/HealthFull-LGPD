import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCodesandbox, FiArrowLeft, FiActivity, FiHome, FiUser } from 'react-icons/fi'

export default function Header() {


  const [burguerState, setBurguerState] = useState('-closed');
  const [menuState, setMenuState] = useState('-closed');
  function ToggleBurguer() {
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
        <Link to="/" className="nav-item">
          <i className="svg-icon">
            <FiArrowLeft />
          </i>
        </Link>
        <Link to="/dashboard" className="nav-item">
          <i className="svg-icon">
            <FiActivity />
          </i>
        </Link>
        <div className="nav-item">
          <div className={`menu-burguer ${burguerState}`} onClick={ToggleBurguer}>
            <div className="burguer"></div>
          </div>
        </div>
        <Link to="/home" className="nav-item">
          <i className="svg-icon">
            <FiHome />
          </i>
        </Link>
        <Link to="/profile" className="nav-item">
          <i className="svg-icon">
            <FiUser />
          </i>
        </Link>
      </nav>
      <aside className={`menu-overlay ${menuState}`}></aside>
    </>
  );
};