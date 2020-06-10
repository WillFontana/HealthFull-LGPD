import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function MedicosEmFoco() {
  return (
    <>
      <aside className="info-card">
        <div className="info-card-header">
          <Link className="return-path" to="/home">
            <i className="svg-icon">
              <FiArrowLeft />
            </i>
          </Link>
          <h2 className="typo-display-2 typo-color-dark-secondary">
            Médicos em foco
          </h2>
        </div>
        <div className="info-card-body -fr1 -first">
          <div className="text-card">
            <p className="text typo-body-2 typo-color-dark-primary">
            
            </p>
          </div>
        </div>
     
       
      </aside>
    </>
  );
}