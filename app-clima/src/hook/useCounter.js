import { useState } from "react"

export const useCounter = (valorInicial = 10) =>{

    const [counter, setcounter] = useState(valorInicial)

    const incrementar = (value=1) =>{

        setcounter(counter+value);

    }

    const decrementar = (value=1) =>{

        setcounter(
             counter-value
        );
        
    }
    const reset = () =>{

        setcounter(
            valorInicial
       );
    }

  return {
     counter,
     incrementar,
     decrementar,
     reset
  }  
}