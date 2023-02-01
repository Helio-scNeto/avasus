import axios from 'axios';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PaginaInicial.css';
import timerIcon from '../assets/timer-Icon.svg';
import userIcon from '../assets/user-Icon.svg';
import StarRating from '../components/StarRating';
import prevButton from '../assets/prev-button-1.svg';
import avasusBanner from '../assets/avasus-bannerPrincipal.svg';
import avasusBanner2 from '../assets/avasus-bannerPrincipal.svg';
import avasusBanner3 from '../assets/avasus-bannerPrincipal.svg';
import subtitulosobrePosicao from '../assets/subtitulosobrePosicao-1.svg';
import subtitulosobrePosicaoLine from '../assets/subtitulo-Line-1.svg';
import avasusBannerPrincipal from '../assets/avasus-logoPrincipal-1.svg';

const images = [avasusBanner, avasusBanner2, avasusBanner3];

const PaginaInicial = () => {
  const [cursos, setCursos] = useState([]);
  const [index, setIndex] = useState(0);
  const [endIndex, setendIndex] = useState(3);
  const [rate, setRate] = useState('matriculados');

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

  function nextStep() {
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
  }

  useEffect(() => {
    getCursos();
  }, [rate]);

  return (
    <div>
      <div className="slideContainer-1">
        <div className={'slideShow-1'}>
          <div>
            <img src={images[index]} alt="slides" className='slideShow-1-img'/>
          </div>
          {index == 0 ? (
            <div>
              <img
                src={avasusBannerPrincipal}
                alt="Capa Principal"
                className="sobrePosicao1"
              />
            </div>
          ) : null}
          {index == 0 ? (
            <div className="subtituloSobrePosicao1-Line">
              <img
                src={subtitulosobrePosicaoLine}
                alt="subtitulosobrePosicaoLine"
              />
            </div>
          ) : null}
          {index == 0 ? (
            <div className="subtitulosobrePosicao1">
              <img
                src={subtitulosobrePosicao}
                alt="Capa Principal, sobreposição"
              />
            </div>
          ) : null}
          <button className="prevButton-1" onClick={prevStep}>
            <img src={prevButton} alt="prevButton" />
          </button>
          <button className="nextButton-1" onClick={nextStep}>
          <img src={prevButton} alt="prevButton" />
          </button>
        </div>
      </div>
      <div className="titulo">
        <h1>Módulos Educacionais</h1>
      </div>
      <div className="rates">
        <li>
          <button
            className={
              rate === 'matriculados' ? 'modulos__item--active' : null
            }
            value={'matriculados'}
            onClick={(e) => setRate(e.target.value)}
          >
            Mais populares
          </button>
        </li>
        <li>
          <button
            className={
              rate === 'avaliacao' ? 'modulos__item--active' : null
            }
            value={'avaliacao'}
            onClick={(e) => setRate(e.target.value)}
          >
            Mais bem avaliados
          </button>
        </li>
        <li>
          <button
            className={
              rate === 'criado_em' ? 'modulos__item--active' : null
            }
            value={'criado_em'}
            onClick={(e) => setRate(e.target.value)}
          >
            Mais recentes
          </button>
        </li>
      </div>
      {cursos &&
        cursos
          .sort((curso1, curso2) => {
            switch (rate) {
              case 'avaliacao':
                return +curso1.avaliacao > +curso2.avaliacao ? -1 : 1;
              case 'matriculados':
                return +curso1.matriculados > +curso2.matriculados
                  ? -1
                  : 1;
              case 'criado_em':
                let date1 = new Date(curso1.criado_em.toString());
                let date2 = new Date(curso2.criado_em.toString());
                return +date1 > +date2 ? -1 : 1;
              default:
                return null;
            }
          })
          .slice(0, endIndex)
          .map((curso) => (
            <div key={curso.id}>
              <div className="curso" key={curso.id}>
                <div className="cursoTopicos">
                  <div className="cursoBanner">
                    <img src={curso.capa} alt="Capa do Curso" />
                  </div>
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
        <Link to={'cursos'}>
          <button className="btn-verMais">Ver mais</button>
        </Link>
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
