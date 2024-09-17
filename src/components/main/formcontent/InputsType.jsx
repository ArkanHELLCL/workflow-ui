/* eslint-disable react/prop-types */
import {
    InputText,
    InputNumber,
    InputNumberS,
    InputDecimal,
    InputMonto,
    InputMontoD,
    InputFecha,
    InputTextArea,
    InputRut,
    InputList,
    InputEmail,
    InputPhone,
    InputFile,
    InputSwitch
} from './inputscomponents'

export default function InputsType({frmRequest, campo, className, filesList, setFilesList}){    
    switch (campo.FDI_TipoCampo.trim().toUpperCase()) {
        case 'A':   //Archivo
            return
        case 'C':   //Texto tamaño mediano
            return <InputText frmRequest={frmRequest} campo={campo} className={className}/>
        case 'N':   //Número, separador de miles sin decimales
            return <InputNumber frmRequest={frmRequest} campo={campo} className={className}/>
        case 'D':   //Número, separador de miles con 2 decimales
            return <InputDecimal frmRequest={frmRequest} campo={campo} className={className}/>
        case 'G':   //Monto, separador de miles sin decimales
            return <InputMonto frmRequest={frmRequest} campo={campo} className={className}/>
        case 'H':   //Monto, separador de miles con 2 decimales
            return <InputMontoD frmRequest={frmRequest} campo={campo} className={className}/>
        case 'I':   //Número, sin separador de miles sin decimales
            return <InputNumberS frmRequest={frmRequest} campo={campo} className={className}/>
        case 'F':   //Fecha
            return <InputFecha frmRequest={frmRequest} campo={campo} className={className}/>
        case 'V':   //Fecha Vencimiento
            return <InputFecha frmRequest={frmRequest} campo={campo} className={className}/>
        case 'T':   //Texto tamaño grande
            return <InputTextArea frmRequest={frmRequest} campo={campo} className={className}/>
        case 'R':   //Rut
            return <InputRut frmRequest={frmRequest} campo={campo} className={className}/>
        case 'L':   //Lista desplegable
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'X1':  //Lista desplegable proveeodres
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'X2':  //Lista desplegable regiones
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'X3':  //Lista desplegable regiones
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'X4':  //Lista desplegable regiones
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'X5':  //Lista desplegable departamentos
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'X6':  //Lista desplegable sexo
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'X7':  //Lista desplegable perfiles
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'U':   //Usuario destinatario
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'PM':  //Periodos de pago
            return <InputList frmRequest={frmRequest} campo={campo} className={className}/>
        case 'M':   //Mail
            return <InputEmail frmRequest={frmRequest} campo={campo} className={className}/>
        case 'P':   //Telefono
            return <InputPhone frmRequest={frmRequest} campo={campo} className={className}/>
        case 'S':   //Switch
            return <InputSwitch frmRequest={frmRequest} campo={campo} className={className}/>
        case 'B':   //Boton de adjunto
            return <InputFile frmRequest={frmRequest} campo={campo} className={className} filesList={filesList} setFilesList={setFilesList}/>
        default:
            return <InputText frmRequest={frmRequest} campo={campo} className={className}/>
    }
}