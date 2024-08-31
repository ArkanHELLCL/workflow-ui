/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import bancos from "../../../mocks/bancos.json";
import tiposdecuenta from "../../../mocks/tiposdecuenta.json";
import InputList from './inputscomponents/inputList.jsx';
import InputText from './inputscomponents/inputText.jsx';
import InputRut from './inputscomponents/inputRut.jsx';
import InputEmail from './inputscomponents/inputEmail.jsx';
import InputPhone from './inputscomponents/inputPhone.jsx';
import InputButtons from './inputscomponents/inputButtons.jsx';
import InputSaveButtons from './inputscomponents/inputSaveButtons.jsx';
import { ButtonIcon } from '../../../utils/icons.jsx';
import { user } from '../../../mocks/usuario.json';
import { registros } from '../../../mocks/registrosM.json';
import { useEffect, useState } from 'react';

export default function MPMant({frmRecord, mant, record, singleButton }) {
    const [field, setField] = useState(null)
    
    const date = new Date()
    let fecha = date.toISOString()
    fecha = fecha.slice(0,16)?.replace('T',' ')

    useEffect(() => {
        let reg
        if(parseInt(record?.record?.Id) === 0 || !record?.record) {
            frmRecord.reset()
            reg = {
                    "PRO_Id":0,
                    "PRO_RazonSocial":'',
                    "PRO_Rut":'',
                    "PRO_Direccion":'',
                    "PRO_Mail":'',
                    "PRO_Telefono":'',
                    "PRO_Banco_ILD":null,
                    "PRO_NumCuentaBancaria":'',
                    "TCU_Id":null,
                    "PRO_Estado":1,
                    "PRO_UsuarioEdit":user.USR_Usuario,                    
                    "PRO_FechaEdit":fecha
            }
        }else{
            reg = registros.filter(reg => reg.id === 'mp')[0].fields?.filter(fld => parseInt(fld.PRO_Id) === parseInt(record?.record?.Id))[0]
        }        
        frmRecord.setValue('PRO_RazonSocial', reg?.PRO_RazonSocial)
        frmRecord.setValue('PRO_Rut', reg?.PRO_Rut)
        frmRecord.setValue('PRO_Direccion', reg?.PRO_Direccion)
        frmRecord.setValue('PRO_Mail', reg?.PRO_Mail)
        frmRecord.setValue('PRO_Telefono', reg?.PRO_Telefono)
        frmRecord.setValue('PRO_Banco_ILD', reg?.PRO_Banco_ILD)
        frmRecord.setValue('PRO_NumCuentaBancaria', reg?.PRO_NumCuentaBancaria)
        frmRecord.setValue('TCU_Id', reg?.TCU_Id)
        setField(reg)        
    },[registros, record])

    return ( 
        field ?
            <>
                <section className="frmmantheaderfrom pt-1">
                    <h2 className='font-base text-lg -mb-1'>Datos del Proveedor <span className='text-[#2c87d2]'>{field.PRO_Id === 0 ? 'Creación' : 'Id: ' + field.PRO_Id}</span></h2>
                    <h2 className='font-sm text-base -mb-1'>{field.PRO_Id === 0 ? 'Creador: ' : 'Último editor: '} <span className='text-[#2c87d2]'>{field.PRO_UsuarioEdit}</span></h2>
                </section>{
                    singleButton ?
                        <InputSaveButtons />
                    :   
                        <InputButtons isAllowed={parseInt(field.PRO_Estado)===1 ? true : false}/>
                }
                <section className='justify-self-end pr-2 frmmantdate'>
                    <span className='text-[11px] leading-tight'>{field.PRO_FechaEdit.slice(0,16).replace('T',' ')}</span>
                </section>                
                <section id="InputsContent" className="py-3 w-full frmmantbody">
                    <div className="w-full pr-2 flex flex-col overflow-y-auto">
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <InputText frmRecord={frmRecord} name='PRO_RazonSocial' className='col-span-9' isRequired={true} placeholder='Empresa de aseo y limpieza' label='Razón Social' errorMessage='Debes ingresar una razón social'/>
                            <InputRut frmRecord={frmRecord} name='PRO_Rut' className='col-span-3' isRequired={true} placeholder='12345678K' label='Rut' errorMessage='Debes ingresar un RUT válido'/>
                        </div>
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <InputText frmRecord ={frmRecord} name='PRO_Direccion' className='col-span-12' isRequired={false} placeholder='Calle 35, Providencia' label='Dirección comercial' errorMessage=''/>
                        </div>
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <InputEmail frmRecord ={frmRecord} name='PRO_Mail' className='col-span-8' isRequired={true} placeholder='miempresa@correo.cl' label='Correo electrónico' errorMessage='Debes ingresar el Email del proveedor'/>
                            <InputPhone frmRecord ={frmRecord} name='PRO_Telefono' className='col-span-4' isRequired={false} placeholder='912345678' label='Teléfono' errorMessage='Debes ingresar un télefono válido'/>
                        </div>
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <InputList frmRecord ={frmRecord} name='PRO_Banco_ILD' dataOptions={bancos} className='col-span-4' isRequired={true} placeholder='Seleccione un banco' label={bancos.name} errorMessage='Debes seleccionar un banco'/>
                            <InputText frmRecord ={frmRecord} name='PRO_NumCuentaBancaria' className='col-span-4' isRequired={true} placeholder='1234567890' label='Número de cuenta bancaria' errorMessage='Debes ingresar el número de cuenta bancaria'/>
                            <InputList frmRecord ={frmRecord} name='TCU_Id' dataOptions={tiposdecuenta} className='col-span-4' isRequired={true} placeholder='Seleccione un banco' label={tiposdecuenta.name} errorMessage='Debes seleccionar un tipo de cuenta'/>
                        </div>
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <span className='text-[#2c87d2] !text-base !font-normal col-span-12 flex gap-2 items-center uppercase !justify-end'>{parseInt(field.PRO_Estado) === 1 ?  <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/> : <ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>}{parseInt(field.PRO_Estado) === 1 ? ' Habilitado' : ' Deshabilitado'}</span>
                        </div>
                    </div>

                    <input type="hidden" {...frmRecord.register('PRO_Id')} value={field?.PRO_Id} />
                </section> 
            </> :
            (
                <div className={`pl-4 h-full w-full relative overflow-hidden frmmantbody z-50`}>
                    <div className='w-full h-full flex justify-center align-middle items-center'>
                        <div className='flex flex-col items-center gap-0'>
                            <span className='text-[#2c87d2] text-2xl'>Registro no encontrado</span>
                            <span className='text-[#2c87d2] text-2xl'>Mantenedor : {mant}</span>
                            <span className='text-[#2c87d2] text-2xl'>Id : {record?.record?.Id}</span>
                        </div>
                    </div>
                </div>
            )
            
    )
}