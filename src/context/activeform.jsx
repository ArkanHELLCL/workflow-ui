/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ActiveformContext = createContext();

export function ActiveformProvider({ children }) {    
    const [activeform, setActiveform] = useState({
        context:null,       //1 Request, 2 Record
        name:null,          //Nombre del formulario
        refform:null,       //Referencia al formulario
        action:null,        //Accion a realizar
        buttonpress:null,   //Boton presionado
        errorMessage:null,  //Mensaje de error
        successMessage:null,//Mensaje de exito
        cancelMessage:null, //Mensaje de cancelación
    })
    
    return (
        <ActiveformContext.Provider value={{
            activeform,
            setActiveform
        }}>
        {children}
        </ActiveformContext.Provider>
    )
}