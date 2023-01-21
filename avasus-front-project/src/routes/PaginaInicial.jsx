import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const PaginaInicial = () => {
  const [cursos, setCursos] = useState([]);

  const getCursos = async () => {
    try {
      const response = await axios.get(
        "/cursos?cateroria=Acessibilidade"
      );
      console.log(response)
    } catch (error) {}
  };

  useEffect(() => {
    getCursos();
  }, []);
  return <div>PaginaInicial</div>;
};

export default PaginaInicial;
