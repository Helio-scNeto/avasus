import React, { useState, useEffect } from 'react';
import axios, { all } from 'axios';
import '../styles/ModulosEducacionais.css';
import Pagination from '../components/Pagination';
import '../styles/Pagination.css';
import timerIcon from '../assets/timer-Icon.svg';
import userIcon from '../assets/user-Icon.svg';
import StarRating from '../components/StarRating';
import { Link } from 'react-router-dom';

function ModulosEducacionais() {
  //Primeiro seting da API
  const [cursos, setCursos] = useState([]);
  //filter
  const [cursosFiltrados, setCursosFiltrados] = useState(cursos);
  const [categoria, setCategoria] = useState('Covid 19');
  //paginação
  const [itensPerPage, setItensPerpage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const pages = Math.ceil(cursos.length / itensPerPage);
  const startIndex = Math.ceil(currentPage * itensPerPage);
  const endIndex = startIndex + itensPerPage;

  const handleCategory = () => {
    return cursos.filter((curso) => curso.categoria == categoria);
  };

  useEffect(() => {
    var filterData = handleCategory();
    setCursosFiltrados(filterData);
    console.log(filterData);
  }, [categoria, cursos]);

  async function getCursos() {
    const url = 'http://localhost:3000/';
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
        <li className="lastLI"> Módulos</li>
      </div>
      <div className="titulo-2">
        <h1>Módulos Educacionais</h1>
      </div>
      <div className="modulos">
        <li>
          <button
            onClick={(e) => setCategoria(e.target.value)}
            value={'Covid 19'}
          >
            COVID-19
          </button>
        </li>
        <li>
          <button
            onClick={(e) => setCategoria(e.target.value)}
            value={'Síflis e outras ist'}
          >
            Sífilis e outras ist's
          </button>
        </li>
        <li>
          <button
            onClick={(e) => setCategoria(e.target.value)}
            value={'Preceptoria'}
          >
            Preceptoria
          </button>
        </li>
        <li>Doenças raras</li>
        <li>Web Palestras</li>
        <li>
          <button
            onClick={(e) => setCategoria(e.target.value)}
            value={'Sistema Prisional'}
          >
            Sistema Prisional
          </button>
        </li>
        <li>OPAS</li>
      </div>
      <div className="pages">
        {' '}
        {`${currentPage + 1} de ${pages} resultados`}
      </div>
      <div className="cursos-2-Container">
        {cursosFiltrados && cursosFiltrados
        .slice(startIndex, endIndex).map((curso) => (
          <div className="cursoListagem" key={curso.id}>
            <div className="cursoCapaContainer">
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

export default ModulosEducacionais;
