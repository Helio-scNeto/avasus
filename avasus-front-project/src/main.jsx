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
import PaginaDeListagem from './routes/PaginaDeListagem';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <PaginaInicial /> },
      { path: '/list', element: <PaginaDeListagem /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
