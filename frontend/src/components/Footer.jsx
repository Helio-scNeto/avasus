import React from 'react';
import './Footer.css';
import laisLogo from '../assets/lais-logo.svg';
import ufrnLogo from '../assets/ufrn-logo.svg';
import facebookLogo from '../assets/facebook-logo.svg';
import twitterLogo from '../assets/twitter-logo.svg';
import instagramLogo from '../assets/instagram-logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="footer-1">
        <div className="flexContainer-Realização">
          <h2>Realização</h2>
        </div>
        <div className="logoContainer">
          <img className="laisLogo" src={laisLogo} alt="lais-Logo" />
          <img className="ufrnLogo" src={ufrnLogo} alt="lais-Logo" />
        </div>
      </footer>
      <footer className="footer-2">
        <div className="flexWrap-footer2">
          <div className="flexContainer-footer2">
            <img
              className="laisLogo"
              src={laisLogo}
              alt="lais-Logo"
            />
            <p>Laboratório de inovação Tecnológica em Saúde.</p>
          </div>
          <div className="flexContainer-footer2-1">
            <h2>Links Úteis</h2>
            <ul>
              <li>
                <Link to={'#'}>Inicio</Link>
              </li>
              <li><Link to={'#'}>Sobre Nós</Link></li>
              <li><Link to={'#'}>Módulos</Link></li>
              <li><Link to={'#'}>Parceiros</Link></li>
              <li><Link to={'#'}>Transparência</Link></li>
            </ul>
            <p>Laboratório de inovação Tecnológica em Saúde.</p>
          </div>
          <div className="flexContainer-footer2-3">
            <h2>Redes sociais</h2>
            <Link to={`#`}>
              <img
                className="facebookLogo"
                src={facebookLogo}
                alt="facebook-Logo"
              />
            </Link>
            <Link to={'#'}>
              <img
                className="twitterLogo"
                src={twitterLogo}
                alt="twitter-Logo"
              />
            </Link>
            <Link to={'#'}>
              <img
                className="instagramLogo"
                src={instagramLogo}
                alt="instagram-Logo"
              />
            </Link>
          </div>
        </div>
      </footer>
      <footer className="footer-3">
        <div className="flexContainer">
          <p>2022 &copy; LAIS (HUOL). Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
