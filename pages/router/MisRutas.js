import React from 'react'
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { Inicio } from './components/Inicio';
import { Servicios } from './components/Servicios';
import { Portafolio } from './components/Portafolio';
import { Footer } from './components/Footer';
import Nav from './../../.next/static/webpack/pages/index.710694309c928a8e.hot-update';

export const MisRutas = () => {
  return (
    <BrowserRouter>

      {/* HEADER */}
      <Nav />


      {/* CONTENIDO */}
      <section className="content">
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/servicios' element={<Servicios />} />
          {/* <Route path='/contacto' element={<Contacto />} />
          <Route path='/proyecto/:id' element={<Proyecto />} /> */}
          <Route path='*' element={
            <div className='page'>
              <h1>Error 404 {":("}</h1>
              <p className='text-error'>Lo sentimos. Esta página no existe. <Link to="/inicio">Volver a Inicio...</Link></p>
            </div>
          } />

        </Routes>
      </section>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  )
}
