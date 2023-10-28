import {Fragment} from "react";
//import {createRoot} from 'react-dom/client';
function Login() {
    return (
        <Fragment>
            <main>
            <section class="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white">
                                <div class="card-body p-5 text-center">
                                    <div class="mb-md-5 mt-md-4 pb-5">
                                        <h2 class="fw-bold mb-2 text-uppercase">Gestion productos</h2>
                                        <p class="text-white-50 mb-5">Por favor ingrese su usuario y contraseña</p>
                                        <form action="http://localhost:3000/">
                                            <div class="form-outline form-white mb-4">
                                                <input type="text"  class="form-control form-control-lg" />
                                                <label class="form-label" for="username">Usuario</label>
                                            </div>
                                            <div class="form-outline form-white mb-4">
                                                <input type="password" class="form-control form-control-lg" />
                                                <label class="form-label" for="password">Contraseña</label>
                                            </div>
                                            <input class="btn btn-outline-light btn-lg px-5" type="submit" value="Iniciar Sesion"></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </main>
        </Fragment>
    );
}

export default Login;

//En la linea 12 toco quitar el style estaba generando error y no cargaba la pag login
//<div class="card bg-dark text-white" style="border-radius: 1rem;">
