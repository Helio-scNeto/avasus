import React from 'react';
import searchIcon from "../assets/earth-search-logo.svg";
import avasusLogo from "../assets/avasus-logo.svg";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
 const inicioURL = import.meta.env.BASE_URL
  return (
    <div>
    <nav className="navbar">
      <ul>
        <li>
        <img className='avasusLogo' src={avasusLogo} alt="" />
        </li>
        <li className="nav">
          <Link to={`${inicioURL}`}>Inicio</Link>
        </li>
        <li className="nav">
          <Link to={'/list'}>Sobre Nós</Link>
        </li>
        <li className="nav">
          <Link to={'#'}>Cursos</Link>
        </li>
        <li className="nav">
          <Link to={'#'}>Parceiros</Link>
        </li>
        <li className="nav">
          <Link to={'#'}>Transparência</Link>
        </li>
        <li className="nav">
          <Link to={'#'}>Contato</Link>
        </li>
        <li className="search-box">
        <img src={searchIcon} alt="search icon" />
          <input
            className="search"
            type="search"
            placeholder="Busca por um assunto..."
          />
        </li>
        <li>
          <Link to={'#'}>
            <input
              type="button"
              value="Entrar"
              className="btn-entrar"
            />
          </Link>
        </li>
        <li>
          <Link to={'#'}>
            <input
              type="button"
              value="Cadastrar"
              className="btn-cadastrar"
            />
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
