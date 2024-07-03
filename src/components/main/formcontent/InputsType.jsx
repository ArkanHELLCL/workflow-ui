/* eslint-disable react/prop-types */
import {
    InputText,
    InputNumber,
    InputDecimal,
    InputMonto,
    InputMontoD,
    InputFecha,
    InputTextArea,
    InputRut,
    InputList
} from './inputscomponents'

export default function InputsType({campo, className}){    
    switch (campo.FDI_TipoCampo.trim().toUpperCase()) {
        case 'A':   //Archivo
            return
        case 'C':   //Texto tamaño mediano
            return <InputText campo={campo} className={className}/>
        case 'N':   //Número, separador de miles sin decimales
            return <InputNumber campo={campo} className={className}/>
        case 'D':   //Número, separador de miles con 2 decimales
            return <InputDecimal campo={campo} className={className}/>
        case 'G':   //Monto, separador de miles sin decimales
            return <InputMonto campo={campo} className={className}/>
        case 'H':   //Monto, separador de miles con 2 decimales
            return <InputMontoD campo={campo} className={className}/>
        case 'F':   //Fecha
            return <InputFecha campo={campo} className={className}/>
        case 'V':   //Fecha Vencimiento
            return <InputFecha campo={campo} className={className}/>
        case 'T':   //Texto tamaño grande
            return <InputTextArea campo={campo} className={className}/>
        case 'R':   //Rut
            return <InputRut campo={campo} className={className}/>
        case 'L':   //Lista desplegable
            return <InputList campo={campo} className={className}/>
        case 'X1':   //Lista desplegable
            return <InputList campo={campo} className={className}/>
        default:
            return <InputText campo={campo} className={className}/>
    }
}