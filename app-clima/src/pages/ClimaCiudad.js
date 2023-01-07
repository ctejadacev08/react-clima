import React from "react";
import CardClima from "../components/clima2/CardClima";
import { useCounter } from "../hook/useCounter";
import { useFetch } from "../hook/useFetch";

const ClimaCiudad = () => {

    const {counter,incrementar,decrementar}  = useCounter(0);


  const { data, isloading, hasError } = useFetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Puno&appid=b3bf2ddcdf37275a2106189a35d10d2a&units=metric"
  );

  if (isloading || !data) {
    return (
      
      <>
        <div className="d-flex justify-content-center text-center">
          <div
            className="spinner-border m-5 text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >            
          </div>          
        </div>
        <div className="d-flex justify-content-center text-center">
          <strong>Cargando...</strong>
        </div>
        
      </>
    );
  }

  // desestructurar un obj anidado

  const { list } = data;

  console.log(list[0].dt);

  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <div className="card mt-4">
            <div className="card-header bg-dark text-white">
              <div className="text-center fs-4">Clima</div>
            </div>
            <div className="card-body">
              <div className="row ">
                <div className="col-md-2 d-flex justify-content-center align-content-center">
                  <button 
                  className="btn btn-primary"
                  onClick={() =>{

                    if(counter===0){
                        return;
                    }                    
                    decrementar()}}
                  >
                    {"<"}
                    </button>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-content-center">
                  {<CardClima objClima={list[counter]} />}
                </div>
                <div className="col-md-2 d-flex justify-content-center align-content-center">
                  <button 
                  className="btn btn-primary"
                  onClick={() =>{

                    if(counter===list.length-1){
                        return;
                    }   
                    
                    incrementar()}}
                  >
                    {">"}
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClimaCiudad;
