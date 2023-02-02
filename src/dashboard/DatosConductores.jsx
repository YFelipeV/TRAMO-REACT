import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../css/styleAdmin.css";
import { getPost } from "../api/api";
import { useEffect, useState } from "react";
import camion from "../assets/icons/camion.jpg";
import DatosConduCard from "./DatosConduCard";
import { Modal } from "bootstrap";

function DatosConductores() {
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
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <main className="main" id="main">
        <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative pb-3 mt-n4 mx-3 z-index-2">
                <div className="bg-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h4 className="text-light ps-3 mb-2">
                    Conductores Habilitados
                  </h4>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-2">
                    <tbody>
                      <DatosConduCard data={listas} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* {tabla dos} */}
      <div className="row">
          <div className="col-12">
            <div className="card my-4">
              <div className="card-header p-0 position-relative pb-3 mt-n4 mx-3 z-index-2">
                <div className="bg-warning shadow-primary border-radius-lg pt-4 pb-3">
                  <h4 className="text-light ps-3 mb-2">
                    Conductores Inhabilitados
                  </h4>
                </div>
              </div>
              <div className="card-body px-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-2">
                    <tbody>
                      <DatosConduCard data={listas} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        </main>
    </>
  );
}

export default DatosConductores;
