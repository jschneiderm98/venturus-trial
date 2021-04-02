import React from 'react';
import './styles.css';
import logo from '../../assets/venturus-logo.png';

export default function Header() {
  return (
    <div className="Header">
      <div className="HeaderComponent">
        <img src={logo} alt="venturus-logo" />
        <h2>Squad Management Tool</h2>
      </div>
      <div className="HeaderComponent">
        <span>John Doe</span>
        <div className="circle">
          <span className="initials">JD</span>
        </div>
      </div>
    </div>
  );
}
