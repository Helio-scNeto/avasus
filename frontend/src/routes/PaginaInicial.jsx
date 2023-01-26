import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PaginaInicial.css';
import timerIcon from '../assets/timer-Icon.svg';
import userIcon from '../assets/user-Icon.svg';
import StarRating from '../components/StarRating';

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
      <div className='bannerPrincipal'></div>
      <div className="titulo">
        <h1>Módulos Educacionais</h1>
      </div>
      <div className="subtitulos">
        <h4>
          <Link>Mais populares</Link>
        </h4>
        <h4>
          <Link>Mais bem avaliados</Link>
        </h4>
        <h4>
          <Link>Mais recentes</Link>
        </h4>
      </div>
      {!show &&
        cursos
          .sort((curso1, curso2) =>
            +curso1.avaliacao > +curso2.avaliacao ? -1 : 1
          )
          .slice(0, 3)
          .map((curso) => (
            <div>
              <div className="curso" key={curso.id}>
                <div className="cursoTopicos">
                  <div className="cursoBanner"></div>
                  <div className="tituloParceiros">
                    <div className="cursoTitulo">{curso.titulo}</div>
                    <div className="cursoParceiros">
                      {curso.parceiros}
                    </div>
                  </div>
                  <div className="cursoStats">
                    <div className="cursoMatriculados">
                      <img src={userIcon} alt="userIcon" />
                      {curso.matriculados}
                    </div>
                    <div className="cursoDuracao">
                      <img src={timerIcon} alt="TimerIcon" />
                      <div className="tempo">{curso.duracao}</div>
                    </div>
                    <div className="cursoAvalicao">
                      <StarRating
                        avaliacao={curso.avaliacao}
                      ></StarRating>
                      <div className="ava">{curso.avaliacao}</div>
                    </div>
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
      <div className="btn-container-div">
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
        <div className="parceiro-hp">
          <h1>Governo do RN</h1>
          <p>Governo do Estado do Rio Grande do Norte.</p>
        </div>
        <div className="parceiro-hp">
          <h1>SESAP</h1>
          <p>
            Secretaria de Saúde Pública do Estado do Rio Grande do
            Norte.
          </p>
        </div>
        <div className="parceiro-hp">
          <h1>UFRN</h1>
          <p>Universidade Federal do Rio Grande do Norte.</p>
        </div>
        <div className="parceiro-hp">
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
