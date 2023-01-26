import React from 'react';
import searchIcon from '../assets/earth-search-logo.svg';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const inicioURL = import.meta.env.BASE_URL;
  return (
    <div>
      <div className="navbar">
        <div className="avasusLogo"></div>
        <ul>
          <li className="nav-item">
            <Link to={'/'}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to={'/sobrenos'}>Sobre Nós</Link>
          </li>
          <li className="nav-item">
            <Link to={'cursos'}>Cursos</Link>
          </li>
          <li className="nav-item">
            <Link to={'/parceiros'}>Parceiros</Link>
          </li>
          <li className="nav-item">
            <Link to={'#'}>Transparência</Link>
          </li>
          <li className="nav-item">
            <Link to={'#'}>Contato</Link>
          </li>
        </ul>
        <div className="search-box">
          <img src={searchIcon} alt="search icon" />
          <input
            className="search"
            type="search"
            placeholder="Busca por um assunto..."
          />
        </div>
        <div>
          <Link to={'#'}>
            <input
              type="button"
              value="Entrar"
              className="btn-entrar"
            />
          </Link>
        </div>
        <div>
          <Link to={'#'}>
            <input
              type="button"
              value="Cadastrar"
              className="btn-cadastrar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
