import './App.css';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Error from './pages/error';
import Series from './pages/Series';
import Original from './pages/Original';
import MovieDetail from './pages/MovieDetail';

import axios from 'axios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'series', element: <Series /> },
      { path: 'original', element: <Original /> },
      { path: 'cart', element: <Cart /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Error /> },
      {path: "/:id", element: <MovieDetail/>},
      {path: "series/:id", element: <MovieDetail/>},
      {path: "original/:id", element: <MovieDetail/>},
      {path: "cart/:id", element: <MovieDetail/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;