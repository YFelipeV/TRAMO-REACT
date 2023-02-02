import React from "react";

function SolicitudesCards({ data }) {
  return (
    <>
      {data.map((lista, index) => (
        <>
          <tr key={index}>
            <td>
              <div className="d-flex justify-content-center">
                <img src={lista.image} alt="" width="95%"></img>
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.name}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.id}20 769 9910
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Cedula</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.id}059355806
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista.name}21@gmail.com
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion de residencia</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {lista - status} 78N - Popayan Cauca
              </p>
            </td>
            <td>
              <div className="text-center" style={{ marginTop: "10%" }}>
                <a
                  href=""
                  className="m-0 p-0 text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#mas-datos"
                >
                  Mostrar mas datos
                </a>
                <div className="mt-2">
                  <button className="btn btn-primary mb-2">Aceptar</button>
                  <button
                    class="btn btn-secondary mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#escribir-motivo-rechazo"
                  >
                    Rechazar
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr></tr>
        </>
      ))}
    </>
  );
}

export default SolicitudesCards;
