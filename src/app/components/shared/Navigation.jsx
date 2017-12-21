import React, { Component } from 'react';
import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
   this.setState({
     isOpen: !this.state.isOpen
   });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Navbar color="faded" light expand="md">
              <Link to={`/`} className='navbar-brand'>Blognyx</Link>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
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
              </Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }

};

export default Navigation;
