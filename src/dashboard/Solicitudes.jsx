import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { getPost } from "../api/api";
import { useEffect, useState } from "react";
import "../css/styleAdmin.css";
import camion from "../assets/icons/camion.jpg";
import SolicitudesCards from "./SolicitudesCards";

function Solicitudes() {
  const [listas, setLista] = useState([]);
  useEffect(() => {
    async function load() {
      let response = await getPost();
      setLista(response.results);
      console.log(response.results);
    }
    load();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div id="main" className="main">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h4 className="text-light ps-3">Solicitudes Pendientes</h4>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <SolicitudesCards data={listas} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solicitudes;
