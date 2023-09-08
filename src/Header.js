import React from 'react';
import { Link } from 'react-router-dom'; 


const Header = () => {
  return (
    
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3 shadow">
        <h1 className="text-body-empasis">SCP Foundation</h1>
        <p className="lead">*Secure*Contain*Protect*</p>
        <header className = "header">
          <nav className = "navbar">
            <ul>

            <Link to="/" className="common-button">
              Home
            </Link>
            </ul>
            <ul>

            <Link to="/carousel" className="common-button">
              Carousel
            </Link>
            </ul>
            
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;

