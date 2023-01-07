import React from "react";
import FormClima from "../components/clima/FormClima";
import ResultsClima from "../components/clima/ResultsClima";

const AppClima = () => {
  return (
    <div className="row mt-4">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <FormClima />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <ResultsClima />
      </div>
    </div>
  );
};

export default AppClima;
