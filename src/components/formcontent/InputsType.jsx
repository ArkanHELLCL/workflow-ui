/* eslint-disable react/prop-types */
import { FormInputText } from './inputscomponents/FormInputText.jsx'
import { FormInputNumber } from './inputscomponents/FormInputNumber.jsx'

export default function InputsType({campo, className}){    
    switch (campo.FDI_TipoCampo) {
        case 'C':   //Texto tamaño mediano
            return <FormInputText campo={campo} className={className}/>
        case 'N':   //Número
            return <FormInputNumber campo={campo} className={className}/>
        default:
            return <FormInputText campo={campo} className={className}/>
    }
}