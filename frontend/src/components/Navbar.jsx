import React from 'react';
import searchIcon from '../assets/earth-search-logo.svg';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="avasusLogo"></div>
        
        <ul className="navlist">
          <li className="nav-item">
            <Link to={'/'}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to={'sobrenos'}>Sobre Nós</Link>
          </li>
          <li className="nav-item">
            <Link to={'cursos'}>Cursos</Link>
          </li>
          <li className="nav-item">
            <Link to={'parceiros'}>Parceiros</Link>
          </li>
          <li className="nav-item">
            <Link to={'transparencia'}>Transparência</Link>
          </li>
          <li className="nav-item">
            <Link to={'#'}>Contato</Link>
          </li>
          <li>
            <div className="search-box">
              <img src={searchIcon} alt="search icon" />
              <input
                className="search"
                type="search"
                placeholder="Busca por um assunto..."
              />
            </div>
          </li>
          <li>
            <div className="btn-entrar">
              <Link to={'#'}>
                <input type="button" value="Entrar" />
              </Link>
            </div>
          </li>
        </ul>
        <div>
          <Link to={'#'}>
            <input
              type="button"
              value="Cadastrar"
              className="btn-cadastrar"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
