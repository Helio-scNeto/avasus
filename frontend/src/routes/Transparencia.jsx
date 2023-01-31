import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/transparência.css';

function Transparencia() {
  const [dados, setDados] = useState([]);
  const url = 'http://localhost:3000/';

  async function getDados() {
    const url = 'http://localhost:3000/';
    try {
      const response = await axios.get(url + 'transparecia');
      const data = response.data;
      setDados(data);
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
        <div>
          <li>
            <p>Total de Usuários Registrados</p>
            {dados.dados_gerais.usuarios_registrados}
          </li>
          <li>
            <p>Inscrições realizadas</p>
            {dados.dados_gerais.incricoes_realizadas}
          </li>
          <li>
            <p>Cursos ativos</p>
            {dados.dados_gerais.cursos_ativos}
          </li>
          <li>
            <p>Direito à Certificação</p>
            {dados.dados_gerais.direito_certificacao}
          </li>
          <li>
            <p>Investimento médio por curso</p>
            {dados.dados_gerais.investimento_medio_curso}
          </li>
          <li>
          <p>Investimento médio por aluno</p>
          {dados.dados_gerais.investimento_medio_aluno}
          </li>
        </div>
      </div>
    </div>
  );
}

export default Transparencia;
