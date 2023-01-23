import axios from 'axios';
import React from 'react';
import '../styles/PaginaInicial.css';
import avasusBannerPrincipal from '../assets/avasus-bannerPrincipal.jpg';
import timerIcon from '../assets/timer-Icon.svg';
import userIcon from '../assets/user-Icon.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PaginaInicial = () => {
  const [cursos, setCursos] = useState([]);
  const url = 'http://localhost:3000/';

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

  const [show, toggleShow] = useState(true);
  return (
    <div>
      <img src={avasusBannerPrincipal} alt="Banner principal" />
      <div className="titulo">
        <p>Módulos Educacionais</p>
      </div>
      <div className="subtitulos">
        <h2><Link>Mais populares</Link></h2>
        <h2><Link>Mais bem avaliados</Link></h2>
        <h2><Link>Mais recentes</Link></h2>
      </div>
      {!show
        ? cursos
        .sort((curso1, curso2) => (+curso1.avaliacao > +curso2.avaliacao ? -1 : 1)).slice(0, 3).map((curso) => (
            <div>
              <div className="curso" key={curso.id}>
                <div className="cursoTopicos">
                  <img src="#" alt="#" srcset="#" />
                  <div className="cursoTitulo">{curso.titulo}</div>
                  <div className="cursoParceiros">
                    {curso.parceiros}
                  </div>
                  <div className="cursoMatriculados">
                  <img src={userIcon} alt="userIcon" />
                    {curso.matriculados}
                  </div>
                  <div className="cursoDuracao" id="topico">
                  <img src={timerIcon} alt="Timer" />
                    {curso.duracao}
                  </div>
                  <div className="cursoAvalicao">
                    <img src="#" alt="#" srcset="#" />
                    {curso.avaliacao}
                  </div>
                  <Link to={`/cursos/${curso.id}`}>
                    <input
                      type="button"
                      className="btn-verModulo"
                      value={'Ver módulo'}
                    ></input>
                  </Link>
                </div>
              </div>
            </div>
          ))
        : cursos.sort((curso1, curso2) => (+curso1.avaliacao > +curso2.avaliacao ? -1 : 1)).map((curso) => (
            <div>
              <div className="curso" key={curso.id}>
                <div className="cursoTopicos">
                  <img src="#" alt="#" srcset="#" />
                  <div className="cursoTitulo">{curso.titulo}</div>
                  <div className="cursoParceiros">
                    {curso.parceiros}
                  </div>
                  <div className="cursoMatriculados">
                  <img src={userIcon} alt="userIcon" />
                    {curso.matriculados}
                  </div>
                  <div className="cursoDuracao" id="topico">
                  <img src={timerIcon} alt="TimerIcon" />
                    {curso.duracao}
                  </div>
                  <div className="cursoAvalicao">
                    <img src="#" alt="#" srcset="#" />
                    {curso.avaliacao}
                  </div>
                  <Link to={`/cursos/${curso.id}`}>
                    <input
                      type="button"
                      className="btn-verModulo"
                      value={'Ver módulo'}
                    ></input>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      <div class="btn-container-div">
        <button
          className="btn-verMais"
          onClick={() => toggleShow(!show)}
        >
          {show ? 'Ver menos' : 'Ver mais'}
        </button>
      </div>
      <div className="parceiros">
        <h4>Parceiros</h4>
      </div>
      <div className="parceiros-container">
        <div className='parceiro-hp'>
          <h1>Governo do RN</h1>
          <p>Governo do Estado do Rio Grande do Norte.</p>
        </div>
        <div className='parceiro-hp'>
          <h1>SESAP</h1>
          <p>
            Secretaria de Saúde Pública do Estado do Rio Grande do
            Norte.
          </p>
        </div>
        <div className='parceiro-hp'>
          <h1>UFRN</h1>
          <p>Universidade Federal do Rio Grande do Norte.</p>
        </div>
        <div className='parceiro-hp'>
          <div className="alinhaParceiro">
            <h1>HUOL</h1>
          </div>
          <p>
            Hospital Onofre Lopes: Hospital Universitário da UFRN
            (Universidade Federal do Rio Grande do Norte).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
