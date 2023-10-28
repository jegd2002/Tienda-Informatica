//Vista para el registro de productos nuevos

import React from "react";
import { Fragment } from "react";
import { createproductos } from "../../api/apiProductos";

function Registro() {
  return (
    <Fragment>
      <main>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark  ">
          <div class="container-fluid">
            <a class="navbar-brand " href="#">
              Tienda y electronica JJEJJ
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="registro">
                    Resgistrar producto
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="ventas">
                    Ventas
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="product">
                    Productos
                  </a>
                </li>
                <li class="nav-item disabled">
                  <a class="nav-link disabled" href="#">
                    Gracias por preferirnos
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto">
                <li class="nav-item mr-4">
                  <a href="#" class="nav-link disabled">
                    <i class="fas fa-user"></i>
                    <span>Bienvenido </span>
                  </a>
                </li>
                <li class="nav-item">
                  <form method="post" action="/">
                    <a
                      href="#"
                      onclick="this.parentNode.submit();"
                      class="nav-link"
                    >
                      <i class="fas fa-sign-out-alt"></i>
                      Salir
                    </a>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section class="p-2">
          <div class="row justify-content-center align-items-center ">
            <div class="col-sm-4 mt-2 ">
              <div class=" border mx-auto shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                <div class="border mx-auto border-dark rounded mb-3 d-flex justify-content-center align-items-center bg-success text-dark bg-opacity-70 ">
                  <h1 class="p-2 mt-2 h2 fw-bold">Registro de productos </h1>
                </div>
                <form
                  action="http://localhost:3100/api/product"
                  class="row g-3 border mx-auto mt-2 border-dark rounded"
                  method="POST"
                >
                  <div>
                    <label for="nombre" class="form-label fw-bold">
                      Nombre
                    </label>
                    <input
                      class="form-control mb-2"
                      type="text"
                      name="nombre"
                      placeholder="Ingrese nombre"
                    />
                  </div>
                  <div class="col-md-7 position-relative">
                    <label for="precio" class="form-label fw-bold">
                      Precio
                    </label>
                    <input
                      class="form-control mb-2"
                      type="text"
                      name="precio"
                      placeholder="Ingrese precio"
                    />
                  </div>
                  <div class="col-md-5 position-relative">
                    <label for="cantidad" class="form-label fw-bold">
                      Cant. en stock
                    </label>
                    <input
                      class="form-control mb-2"
                      type="text"
                      name="cantidad"
                      placeholder="Ingrese la cantidad"
                    />
                  </div>
                  <div>
                    <label class="form-label fw-bold">
                      Imagen del producto
                    </label>
                    <input
                      class="form-control mb-2"
                      type="text"
                      name="imagen"
                      placeholder="Ingrese URL de la imagen"
                    />
                  </div>
                  <div>
                    <label for="descripcion" class="form-label fw-bold">
                      Descripción del producto
                    </label>
                    <textarea
                      class="form-control mb-2"
                      rows="3"
                      type="text"
                      name="descripcion"
                      placeholder="Ingrese la descripcion del producto"
                    ></textarea>
                  </div>

                  <div class="d-flex justify-content-center align-items-center">
                    <button
                      class="btn btn-success px-4 mb-2 mt-1"
                      type="submit"
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
export default Registro;

/*
<div class="d-flex justify-content-center align-items-center">
                                        <button class="btn btn-success px-4 mb-2 mt-1" onClick={handleGuardarProducto()} data-bs-toggle="modal" type="submit">Guardar</button>
                                    </div>

<div class="d-flex justify-content-center align-items-center">
<button class="btn btn-success px-4 mb-2 mt-1 "  data-bs-toggle="modal"  type="submit">Guardar</button>
</div>


<div class="d-flex justify-content-center align-items-center">
                                    <button type="button" class="btn btn-success px-4 mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
                                </div>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Mensaje de alerta</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                El producto se agrego correctamente
                                            </div>
                                        </div>
                                    </div>
                                </div>

*/
