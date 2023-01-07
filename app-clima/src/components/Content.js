import React from "react";

const Content = ({ children }) => {
  return (

    <main className=" contenedor-main rounded-2 ">
     <div className=" row justify-content-center">
            <div  className="col-10">
                {children}
            </div>
        </div>
    </main>
  );
   
};

export default Content;
