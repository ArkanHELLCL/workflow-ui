/* eslint-disable react/prop-types */
import { FormInputText } from './inputscomponents/FormInputText.jsx'
import { FormInputNumber } from './inputscomponents/FormInputNumber.jsx'
import { FormInputDecimal } from './inputscomponents/FormInputDecimal.jsx'
import { FormInputMonto } from './inputscomponents/FormInputMonto.jsx'
import { FormInputMontoD } from './inputscomponents/FormInputMontoD.jsx'
import { FormInputFecha } from './inputscomponents/FormInputFecha.jsx'
import { FormInputTextArea } from './inputscomponents/FormInputTextArea.jsx'

export default function InputsType({campo, className}){    
    switch (campo.FDI_TipoCampo) {
        case 'C':   //Texto tamaño mediano
            return <FormInputText campo={campo} className={className}/>
        case 'N':   //Número, separador de miles sin decimales
            return <FormInputNumber campo={campo} className={className}/>
        case 'D':   //Número, separador de miles con 2 decimales
            return <FormInputDecimal campo={campo} className={className}/>
        case 'G':   //Monto, separador de miles sin decimales
            return <FormInputMonto campo={campo} className={className}/>
        case 'H':   //Monto, separador de miles con 2 decimales
            return <FormInputMontoD campo={campo} className={className}/>
        case 'F' || 'V':   //Fecha
            return <FormInputFecha campo={campo} className={className}/>
        case 'T':   //Texto tamaño grande
            return <FormInputTextArea campo={campo} className={className}/>
        default:
            return <FormInputText campo={campo} className={className}/>
    }
}