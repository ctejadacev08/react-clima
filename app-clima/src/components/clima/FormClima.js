import React, { useState } from "react";
import useClima from "../../hook/useClima";

const FormClima = () => {

  const [alerta, setAlerta] = useState('');
  const { formState,onInputChange,inputCiudad, inputPais,consultarClima } =useClima();

  const handleSubmit = (event) =>{

    event.preventDefault();

    if(Object.values(formState).includes('')){
        setAlerta('Los campos son obligatorios');
        return
    }

    consultarClima(formState);

  }

  return (
    <>
    <div className="card border border-secondary bg-white rounded-3 m-4 p-1 w-100 ">
      <div className="card-header bg-dark text-white">Formulario de Búsqueda</div>
      <div className="card-body">
      {alerta&&<p>{alerta}</p>}
        <form
         className="row g-3 w-100 "
         onSubmit={handleSubmit}
         >
          <div className="col-md-12">
            <label htmlFor="inputCiudad" className="form-label">
              Ciudad :
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCiudad"
              name="inputCiudad"
              placeholder="Ingrese la ciudad"
              onChange={onInputChange}
              value={inputCiudad}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPais" className="form-label">
              Pais :
            </label>
            <select
              id="inputPais"
              className="form-select"
              name="inputPais"
              onChange={onInputChange}
              value={inputPais}
            >
              <option value="">---Seleccione Pais---</option>
              <option value="AR">Argentina</option>
              <option value="BO">Bolivia</option>
              <option value="BR">Brasil</option>
              <option value="CO">Colombia</option>
              <option value="CH">Chile</option>
              <option value="EC">Ecuador</option>
              <option value="ES">España</option>
              <option value="MX">Mexico</option>
              <option value="PR">Peru</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Consultar Clima
            </button>
          </div>
        </form>
        
      </div>
    </div>

      {/* <div className=" border border-secondary bg-white rounded-3 m-4 p-4 w-100  ">
        {alerta&&<p>{alerta}</p>}
        <form
         className="row g-3 w-100 "
         onSubmit={handleSubmit}
         >
          <div className="col-md-12">
            <label htmlFor="inputCiudad" className="form-label">
              Ciudad :
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCiudad"
              name="inputCiudad"
              placeholder="Ingrese la ciudad"
              onChange={onInputChange}
              value={inputCiudad}
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPais" className="form-label">
              Pais :
            </label>
            <select
              id="inputPais"
              className="form-select"
              name="inputPais"
              onChange={onInputChange}
              value={inputPais}
            >
              <option value="">---Seleccione Pais---</option>
              <option value="AR">Argentina</option>
              <option value="BO">Bolivia</option>
              <option value="BR">Brasil</option>
              <option value="CO">Colombia</option>
              <option value="CH">Chile</option>
              <option value="EC">Ecuador</option>
              <option value="ES">España</option>
              <option value="MX">Mexico</option>
              <option value="PR">Peru</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Consultar Clima
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
};

export default FormClima;
