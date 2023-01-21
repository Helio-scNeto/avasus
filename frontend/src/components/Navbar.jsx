import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={"/"}>Página Inicial</Link>
      </h2>
      <ul>
        <li>
        <Link to={"/list"}>Sobre Nós</Link>
        </li>
        <li>
        <Link to={"#"}>Cursos</Link>
        </li>
        <li>
        <Link to={"#"}>Parceiros</Link>
        </li>
        <li>
        <Link to={"#"}>Transparência</Link>
        </li>
        <li>
        <Link to={"#"}>Contato</Link>
        </li>
        <li>
        <input type="text" placeholder='Busca por um assunto...'/>
        </li>
        <li>
        <input type="button" value='Entrar' className='btn-entrar'/>
        </li>
        <li>
        <input type="button" value='Cadastrar' className='btn-cadastrar'/>
        </li>
        <li>
      
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
