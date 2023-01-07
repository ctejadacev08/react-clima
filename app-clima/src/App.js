import React from "react";
import "./App.css";
import AppClima from "./pages/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ClimaCiudad from "./pages/ClimaCiudad";

const App = () => {
  return (
    <ClimaProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clima-por-pais" element={<AppClima />} />
            <Route path="/clima-por-ciudad" element={<ClimaCiudad  />} />             
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ClimaProvider>

    // <div className="container-fluid mt-3">
    //   <Header />
    //   
    // </div>
  );
};

export default App;
