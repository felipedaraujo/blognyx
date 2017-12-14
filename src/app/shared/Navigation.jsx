import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link to={`/`} className='navbar-brand'>Blognyx</Link>

          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link to={`/`} className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to={`/about`} className='nav-link'>About</Link>
              </li>
              <li className='nav-item'>
                <Link to={`/blog`} className='nav-link'>Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

export default Navigation;
