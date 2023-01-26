import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

//paginas
import PaginaInicial from './routes/PaginaInicial';
import ModulosEducacionais from './routes/ModulosEducacionais';
import Curso from './routes/Curso';
import Parceiros from './routes/Parceiros';
import SobreNos from './routes/SobreNos';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <PaginaInicial /> },
      { path: 'cursos', element: <ModulosEducacionais/> },
      { path: 'cursos/:id', element: <Curso/> },
      { path: 'parceiros', element: <Parceiros/> },
      { path: 'sobrenos', element: <SobreNos/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
