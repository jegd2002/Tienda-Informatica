//import {render} from "react-dom";
//import ReactDOM from 'react-dom/client';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./components/productos-admin/tienda.js";
import Registro from "./components/registro-admin/registro.js";
import { VentasRealizadas } from './components/ventas-realizadas-admin/ventas_Realizadas.js';
import{
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Login from "./components/vista-login/vistaLoginGen.js";
import Productosu from './components/productos-usuario/productos-usuario.js';



//Renderizacion nueva
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path ='login' element={<Login />} />
            <Route path='registro' element={<Registro />} />
            <Route path='ventas' element={<VentasRealizadas />} />
            <Route path='/' element={<App />} />
            <Route path='product' element={<Productosu/>} />
            
        </Routes>
        
        </BrowserRouter>,
    rootElement
);

/*
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">Tienda y electronica JJEJJ</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Productos</a>
                      </li>
                      <li  class="nav-item">
                          <a class="nav-link" href="#">carrito de compras</a>
                      </li>
                      <li  class="nav-item disabled">
                          <a class="nav-link disabled" href="#">Gracias por preferirnos</a>
                      </li>
                  </ul>
                  <ul  class="navbar-nav ms-auto">
                      <li class="nav-item mr-4">
                          <a href="#" class="nav-link disabled">
                              <i class="fas fa-user"></i>
                              <span>Bienvenido </span>
                          </a>
                      </li>
                      <li class="nav-item">
                          <form method="post" action="/">
                              <a href="#" onclick="this.parentNode.submit();" class="nav-link">
                                  <i class="fas fa-sign-out-alt"></i>
                                  Salir
                              </a>
                          </form>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
*/