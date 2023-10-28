import React from "react";

export function VentasRealizadas() {
  return (
    <div className="ventas_Realizadas">
      <container>
        <main>
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="http://localhost:3000/">
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
                      Registrar productos
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
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Carrito de compras
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
                      <a href="http://localhost:3000/login/" class="nav-link">
                        <i class="fas fa-sign-out-alt"></i>
                        Salir
                      </a>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </main>
        <section class="py-1 text-center container">
          <h3 class="p-2 mt-2 h2 fw-bold">Ventas Realizadas </h3>
          <table class="table table-striped">
            <thead className="table-secondary">
              <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>id Venta</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>22/10/2022</td>
                <td>123</td>
                <td>$35.000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>22/10/2022</td>
                <td>456</td>
                <td>$20.000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>22/10/2022</td>
                <td>789</td>
                <td>$50.000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>22/10/2022</td>
                <td>110</td>
                <td>$1.000</td>
              </tr>
              <tr>
                <td>5</td>
                <td>22/10/2022</td>
                <td>111</td>
                <td>$1.000</td>
              </tr>
              <tr>
                <td>6</td>
                <td>22/10/2022</td>
                <td>112</td>
                <td>$1.000</td>
              </tr>
              <tr>
                <td>7</td>
                <td>22/10/2022</td>
                <td>113</td>
                <td>$1.000</td>
              </tr>
              <tr className="table-secondary">
                <td colSpan={3}>Total Vendido</td>
                <td>$110.000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </container>
      <container>
        <footer>
          <div class="d-grid gap-2 col-2 mx-auto">
            <button class="btn btn-primary" type="button">
              Descarga
            </button>
          </div>
        </footer>
      </container>
    </div>
  );
}
