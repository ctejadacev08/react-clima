
import { useForm } from "../hook/useForm"
import { ClimaContext } from "./ClimaContext"


 export const ClimaProvider = ({children}) => {

  const {formState,onInputChange,inputCiudad,inputPais, onResetForm,consultarClima} = useForm({
    inputCiudad : '',
    inputPais : ''
  });

  
  return (
    <ClimaContext.Provider value={{formState,onInputChange,onResetForm,inputCiudad,inputPais,consultarClima }}>
        {children}      
    </ClimaContext.Provider>
  )
}


