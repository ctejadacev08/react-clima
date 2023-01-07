import { useState } from "react";

 export const useForm = (initialForm ={}) =>{

    const [formState, setformState] = useState({initialForm})  
   
    
    const onInputChange =({target}) =>{
    
        const {name,value} = target;
        // console.log({name,value});
        setformState({
            ...formState,
            [name] : value// propiedades computadas
        });
    
    }

    const onResetForm = () =>{

        setformState(initialForm);
    }

    const consultarClima = (datos) =>{

        console.log(datos);

    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        consultarClima,

    };
}