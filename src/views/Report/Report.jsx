import React from 'react'
import { useAuth } from '../../context/authContext'

function Report() {

  const {loading} = useAuth()

  if(loading) return <h1>Cargando...</h1>

  return (
    <div>
    <br/>
    <div class="col-md-10 mx-auto">
        <div class="card">

            <div class="card-header">
                <h1>Reporte de residuos</h1>
            </div>

            <div class="card-body">
                <form class="was-validated" action="" method="POST">
                    <div class="mb-3 row">
                        <div class="col-3">
                            <button class="btn btn-outline-secondary">Obtener ubicación</button>
                        </div>
                        <div class="col">
                        <input class="form-control" disabled placeholder='Dirección'></input>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <div class="col-3">
                            <button class="btn btn-outline-secondary">Tomar / Subir foto</button>
                        </div>
                        <div class="col">
                        <input type="file" class="form-control" disabled></input>
                        </div>
                    </div>

                    <div class="mb-3 text-start">
                        <label for="validationTextarea" class="form-label">Descripción del problema</label>
                        <textarea name="descripcion" class="form-control is-invalid" id="validationTextarea" placeholder="Háblanos sobre el problema" required></textarea>

                    </div>
                    <div class = "mb-3 text-center">
                        <button name="btnpostular" class="btn btn-primary" type="submit">Subir reporte</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Report
