import { useEffect, useState } from "react"


export const useFetch = (url) =>{

    const [state, setstate] = useState({

        data : null, // producto de la peticion
        isloading : true, // para saber si estoy cargando o no por defecto cuando se monta el hook
        hasError : null // para saber si hay un error en la pesticion
    })

    

  const getFetch = async() =>{

    setstate({

        ...state,
        isloading: true,

    });


    const respuesta = await fetch(url);
    const data =  await respuesta.json();

    // cuando sale todo bien llamamos al setState, cuando mandamos el setState a un obj
    // mandamos todas las propiedades.
    setstate({
        data : data, // data,
        isloading : false,
        hasError : null,
    });
    // console.log(data);
  }  

useEffect(() => { 
 // se va a disparar la peticion fetch
 // no se puede definir que su callback puede hacer asincrono debemos hacerlo con una funcion afuera.
 // el useEffect esta esperando una funcion pura no una promesa.
getFetch();
  
  
}, [url]);

 

    return {
        data: state.data,
        isloading: state.isloading,
        hasError: state.hasError
    };
}