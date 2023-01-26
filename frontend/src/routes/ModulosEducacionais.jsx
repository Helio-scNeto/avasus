import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ModulosEducacionais.css';
import Pagination from '../components/Pagination';
import '../styles/Pagination.css';
import timerIcon from '../assets/timer-Icon.svg';
import userIcon from '../assets/user-Icon.svg';
import StarRating from '../components/StarRating';
import { Link } from 'react-router-dom';


function ModulosEducacionais() {
  const [cursos, setCursos] = useState([]);
  const [itensPerPage, setItensPerpage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const url = 'http://localhost:3000/';

  const pages = Math.ceil(cursos.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = cursos.slice(startIndex, endIndex);

  async function getCursos() {
    try {
      const response = await axios.get(url + 'cursos');
      const data = response.data;
      setCursos(data);
    } catch (error) {
      console.log('What happened? ' + error);
    }
  }
  useEffect(() => {
    getCursos();
  }, []);

  return (
    <div>
      <div className="path">
        <li>Inicio</li>
        <li>/</li>
        <li>Cursos </li>
        <li>/</li>
        <li className='lastLI'> Módulos</li>
      </div>
      <div className="titulo-2">
        <h1>Módulos Educacionais</h1>
      </div>
      <div className="modulos">
        <li>
          <input type="button" value="COVID-19"></input>
        </li>
        <li>Sífilis e outras ist's</li>
        <li>Preceptoria</li>
        <li>Doenças raras</li>
        <li>Web Palestras</li>
        <li>Sistema prisional</li>
        <li>OPAS</li>
      </div>
      <div className='pages'> {`${currentPage +1} de ${pages} resultados`}</div>
      <div className="cursos-2-Container">
        {currentItens.map((curso) => (
          <div className="cursoListagem" key={curso.id}>
            <div className='cursoCapaContainer'>
              <img
                className="cursoCapa"
                src={curso.capa}
                alt="Capa do Curso"
              />
            </div>
            <div>
              <div className="cursoTitulo-container-2">
                <h1>{curso.titulo}</h1>
                </div>
              <div className="cursoParceiros-2">
                {curso.parceiros}
              </div>
            </div>
            <div className="cursoStats-2">
              <div className="cursoMatriculado-2">
                <img src={userIcon} alt="userIcon" />
                <div className="cursoMatriculadosDiv">
                  {curso.matriculados}
                </div>
              </div>
              <div className="cursoDuracao-2">
                <img src={timerIcon} alt="TimerIcon" />
                <div className="cursoDuracao-2-div">
                  {curso.duracao}
                </div>
              </div>
              <div className="cursoAvalicao-2">
                <StarRating avaliacao={curso.avaliacao}></StarRating>
                <div className="ava-2">{curso.avaliacao}</div>
              </div>
            </div>
            <div className="cursoResumo">
              <p>{curso.resumo}</p>
            </div>
            <Link to={`/cursos/${curso.id}`}>
              <input
                type="button"
                className="btn-verCurso"
                value={'Ver Curso'}
              ></input>
            </Link>
          </div>
        ))}
      </div>
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default ModulosEducacionais;
