import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Curso.css';
import StarRating from '../components/StarRating';
import timerIcon from '../assets/timer-Icon.svg';
import userIcon from '../assets/user-Icon.svg';
import calendarioIcon from '../assets/calendario-Icon.svg';
import laisLogo from '../assets/lais-logo-3.svg';
import sedisLogo from '../assets/sedis-logo-3.svg';
import ufrnLogo from '../assets/ufrn-logo-3.svg';
import enbserhLogo from '../assets/ebserh-logo-3.svg';

function Curso() {
  const url = 'http://localhost:3000/';
  const [curso, setCurso] = useState([]);
  const { id } = useParams();

  const getCurso = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCurso(data);
    } catch (error) {
      console.log('What happened? ' + error);
    }
  };

  useEffect(() => {
    const cursoUrl = `${url}cursos/${id}`;
    console.log(cursoUrl);
    getCurso(cursoUrl);
  }, []);

  return (
    <div className="cursoPagina">
      <div
        className="cursoCapa-3"
        style={{ backgroundImage: `url(${`${curso.capa}`})` }}
      ></div>
      <ul className="path-3-container">
        <div>Inicio</div>
        <li>Cursos</li>
        <li>Modulos</li>
        <li>{curso.titulo}</li>
      </ul>
      <div className="curso-titulo-3-container">
        <h1>{curso.titulo}</h1>
      </div>
      <div className="curso-parceiros-3-container">
        <h2>{curso.parceiros}</h2>
      </div>
      <div className="InformaçoesGerais-3">
        <h1>Informações Gerais do Curso</h1>
      </div>
      <div className="cursoStats-3" key={curso.id}>
        <div className="cursoDuracao-3">
          <img src={timerIcon} alt="TimerIcon" />
          <p>
            {curso.duracao && curso.duracao.replace('h', ' horas')}
          </p>
        </div>
        <div className="criadoEmContainer-3">
          <img src={calendarioIcon} alt="TimerIcon" />
          <p>Desde {curso.criado_em}</p>
        </div>
        <div className="cursoMatriculado-3">
          <img src={userIcon} alt="userIcon" />
          <p className="cursoMatriculadosP-3">
            {curso.matriculados} alunos matriculados
          </p>
        </div>
        <div className="cursoAvalicao-3">
          <StarRating avaliacao={curso.avaliacao}></StarRating>
          <p className="ava-3">
            {!curso.avaliacao
              ? 'Ainda não há avaliação!'
              : curso.avaliacao &&
                curso.avaliacao.replace('.', ',')}{' '}
            ({curso.numero_avaliacoes} avaliações)
          </p>
        </div>
      </div>
      <div className="sobreoCurso-3">
        <h2>Sobre o curso</h2>
      </div>
      <div className="resumo-3">
        <p>{curso.resumo ? curso.resumo : 'Não consta resumo!'}</p>
      </div>
      <div className="objetivos-titulo-3">
        <h2>Objetivos</h2>
      </div>
      <div className="objetivoGeral-3">
        <h2>Objetivo Geral</h2>
        <p>
          {curso.objetivo_geral
            ? curso.objetivo_geral
            : 'Não consta objetivo geral!'}
        </p>
      </div>
      <div className="objetivosEspecificos-3">
        <h2>Objetivo Específicos</h2>
        <p>
          {curso.objetivo_especifico
            ? curso.objetivo_especifico
            : 'Não constam objetivos específicos!'}
        </p>
      </div>
      <div className="recursosEducacionais-3">
        <h2>Recursos educacionais</h2>
        <p>
          {curso.recursos_educacionais
            ? curso.recursos_educacionais
            : 'Não constam recursos educacionais!'}
        </p>
      </div>
      <div className="creditos-3">
        <h2>Créditos</h2>
      </div>
      <div className="creditos-3-container-imgs">
        <img src={laisLogo} alt="lais-Logo" />
        <img src={sedisLogo} alt="sedis-Logo" />
        <img src={ufrnLogo} alt="ufrnLogo" />
        <img src={enbserhLogo} alt="ufrnLogo" />
      </div>
    </div>
  );
}
export default Curso;
