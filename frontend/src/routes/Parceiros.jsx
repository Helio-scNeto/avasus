import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '../components/Pagination';
import '../styles/parceiros.css';

function Parceiros() {
  //Primeiro seting da API
  const [parceiros, setParceiros] = useState([]);
  //paginação
  const [itensPerPage, setItensPerpage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const pages = Math.ceil(
    Number(parceiros.length) / itensPerPage
  );
  const startIndex = Math.ceil(currentPage * itensPerPage);
  const endIndex = startIndex + itensPerPage;

  async function getParceiros() {
    const url = 'http://localhost:3000/';
    try {
      const response = await axios.get(url + 'parceiros');
      const data = response.data;
      setParceiros(data);
    } catch (error) {
      console.log('What happened? ' + error);
    }
  }
  useEffect(() => {
    getParceiros();
  }, []);

  return (
    <div>
      <div className="path-4-container">
        <div>Inicio</div>
        <li>Parceiros</li>
      </div>
      <div className="tituloContainer-4">
        <h1>Nossos parceiros</h1>
      </div>
      <div className="pages-4">
        {' '}
        {`${currentPage + 1} de ${pages} resultados`}
      </div>
      <div className="parceirosContainer-4">
        {parceiros &&
          parceiros.slice(startIndex, endIndex).map((parceiro) => (
            <div className="parceirosListagem-4" key={parceiro.id}>
              <div className="cursoCapaContainer-4">
                <img
                  className="cursoCapa-4"
                  src={parceiro.capa}
                  alt="Logo dos parceiros"
                />
              </div>
              <div>
                <div className="parceiroTituloContainer-4">
                  <Link to={`/parceiros/${parceiro.id}`}>
                    <h1>{parceiro.titulo}</h1>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination
        itensPerPage={itensPerPage}
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        offset={offset}
        setOffset={setOffset}
      />
    </div>
  );
}

export default Parceiros;
