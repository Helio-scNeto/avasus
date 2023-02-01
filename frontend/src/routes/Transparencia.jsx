import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/transparência.css';
import userIcon from '../assets/user-Icon.svg';
import inscricoesIcon from '../assets/inscricoes-logo-4.svg';
import cursosAtivosIcon from '../assets/cursosativos-logo-4.svg';
import direitoACertificado from '../assets/direitoaCertificado-logo-4.svg';
import investimentoAlunoIcon from '../assets/investimentoMedioAluno-icon-4.svg';
import investimentoCursoIcon from '../assets/investimentoMedioCurso-icon-4.svg';
import BrazilMap from '../assets/brazil-map-5.svg';
import grafico from '../assets/graficos-5.svg';

function Transparencia() {
  const [transparencia, setTransparencia] = useState([]);
  const [usuariosPorCurso, setUsuariosPorCurso] = useState([]);
  const [usuariosPorEstado, setUsuariosPorEstado] = useState([]);

  async function getDados() {
    const url = 'http://localhost:3000/';
    try {
      const response = await axios.get(url + 'transparecia');
      const data = response.data;
      setTransparencia(data);
      setUsuariosPorCurso(data.usuarios_por_curso);
      setUsuariosPorEstado(data.usuarios_por_estado);
    } catch (error) {
      console.log('What happened? ' + error);
    }
  }

  useEffect(() => {
    getDados();
  }, []);

  return (
    <div className="mainContainer">
      <div className="path-4-container">
        <div>Inicio</div>
        <li>Parceiros</li>
      </div>
      <div className="transparenciaTituloContainer-4">
        <h1>Transparência</h1>
      </div>
      <div className="transparênciaDadosContainer-4">
        <div className="transparenciaSubtituloContainer-4">
          <h2>Dados Gerais</h2>
        </div>
        <div className="align-4">
          <div className="usuarioRegistradosTextoImg-4">
            <img src={userIcon} alt="userIcon" />
            <p>Total de usuário registrados</p>
          </div>
          <div className="inscriçõesRealizadasTextoImg-4">
            <img src={inscricoesIcon} alt="inscricoesIcon" />
            <p>Inscrições realizadas</p>
          </div>
          <div className="cursosAtivosTextoImg-4">
            <img src={cursosAtivosIcon} alt="cursosAtivosIcon" />
            <p>Cursos ativos</p>
          </div>
          <div className="direitoaCertificadoTextoImg-4">
            <img
              src={direitoACertificado}
              alt="direitoACertificadoIcon"
            />
            <p>Direito à Certificação</p>
          </div>
        </div>
        <div className="align-4-2">
          <div className="investimentoCursoTextoImg-4">
            <img
              src={investimentoCursoIcon}
              alt="investimentoCursoIcon"
            />
            <p>Investimento médio por curso</p>
          </div>
          <div className="investimentoAlunoTextoImg-4">
            <img
              src={investimentoAlunoIcon}
              alt="investimentoAlunoIcon"
            />
            <p>Investimento médio por aluno</p>
          </div>
        </div>
        {transparencia &&
          Object.keys(transparencia).map((dado, i) => (
            <div>
              <div key={i}>
                <span className="usuarioRegistrados-4">
                  {transparencia[dado].usuarios_registrados}
                </span>
                <span className="inscricoesRealizadas-4">
                  {transparencia[dado].inscricoes_realizadas}
                </span>
                <span className="cursosAtivos-4">
                  {transparencia[dado].cursos_ativos}
                </span>
                <span className="direitoaCertificacao-4">
                  {transparencia[dado].direito_certificacao}
                </span>
                <span className="investimentoMedioCurso-4">
                  {transparencia[dado].investimento_medio_curso}
                </span>
                <span className="investimentoMedioAluno-4">
                  {transparencia[dado].investimento_medio_aluno}
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className="graficoContainer">
      <div className='graficoContainerTitulo'>
        <h1>Usuários por curso</h1>
      </div>
        <div className="grafico" >
          <img src={grafico} alt="Mapa do Brasil" />
        </div>
        {usuariosPorCurso != null &&
          usuariosPorCurso.map((dado, i) => (
            <div>
              <div key={i}>
                <span className="usuariosPorCurso">
                  <li>
                    <span className={`marcador-${i}`}/>
                    <div className='graficoData'>{dado.curso + ': ' + dado.usuarios}</div>
                  </li>
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className="MapaContainer">
      <div className='MapaContainerTitulo'>
        <h1>Usuários por Estado</h1>
      </div>
        <div className='mapa'>
          <img src={BrazilMap} alt="Brazilian Map" />
        </div>
        {usuariosPorEstado != null &&
          usuariosPorEstado.map((dado, i) => (
            <div>
              <div key={i}>
                <span className="usuariosPorEstado-5">
                  <li>
                    {dado.estados + ': ' + dado.usuarios_totais}
                  </li>
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Transparencia;
