/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../code20.png';

const Navbar = () => {
    return (
    <NavbarContainer className="navbar navbar-expand-lg navbar-light px-5 py-0">
  <Link className="navbar-brand" to="/">
    <img style={{width: '60px'}} src={logo} alt="code" />
  </Link>
  <button className="navbar-toggler" type="button" 
  data-toggle="collapse" 
  data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" 
  aria-expanded="false" 
  aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" 
  id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-article">Add Article</Link>
      </li>
    </ul>
  </div>
</NavbarContainer>
  )
}

export default Navbar

// Main Navbar style

const NavbarContainer = styled.div`
  background: var(--dark-green);

  .nav-link {
    color:#fff !important;
    &:hover {
      background: var(--light-green);
    }
  }
`;
