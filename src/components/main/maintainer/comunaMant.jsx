/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import InputList from './inputscomponents/inputList.jsx';
import InputText from './inputscomponents/inputText.jsx';
import InputNumbers from './inputscomponents/inputNumbers.jsx';
import InputButtons from './inputscomponents/inputButtons.jsx';
import { user } from '../../../mocks/usuario.json';

import regiones from "../../../mocks/regiones.json";
import { ButtonIcon } from '../../../utils/icons.jsx';
import { registros } from '../../../mocks/registrosM.json';
import { useEffect, useState } from 'react';

export default function MCMant({frmRecord, openDialog, setOpenDialog, mant, record }) {
    const [field, setField] = useState(null)
    
    const date = new Date()
    let fecha = date.toISOString()
    fecha = fecha.slice(0,16)?.replace('T',' ')

    useEffect(() => {
        let reg
        if(parseInt(record?.record?.Id) === 0) {
            frmRecord.reset()
            reg = {
                    "COM_Id":0,
                    "COM_Nombre":null,
                    "COM_OrdenGeografico":null,                    
                    "COM_UsuarioEdit":user.USR_Usuario,
                    "COM_FechaEdit":fecha
            }
        }else{
            reg = registros.filter(reg => reg.id === 'mc')[0].fields?.filter(fld => parseInt(fld.COM_Id) === parseInt(record?.record?.Id))[0]
        }
        console.log('useEffect')
        frmRecord.register('COM_Nombre')
        frmRecord.setValue('COM_Nombre', 'hola')
        frmRecord.resetField('COM_Nombre', { defaultValue: 'hola' })
        setField(reg)        
    },[registros, record])

    return (
        field ?
        <section id="InputsContent" className="py-3 w-full flex flex-col h-full">
            <h2 className='font-base text-lg -mb-1'>Datos del Usuario <span className='text-[#2c87d2]'>Id: {field?.COM_Id ? field.COM_Id : 'Nuevo'}</span></h2>
            <h2 className='font-sm text-base -mb-1'>Último editor: <span className='text-[#2c87d2]'>{field?.COM_UsuarioEdit ? field?.COM_UsuarioEdit : user.USR_Usuario}</span></h2>
            <h2 className='font-sm text-base pb-3'>Fecha de edición: <span className='text-[#2c87d2]'>{field?.COM_FechaEdit ? field?.COM_FechaEdit?.slice(0,16)?.replace('T',' ') : fecha}</span></h2>
            <InputButtons frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} isAllowed={null} />
            <div className="w-full pr-2 flex flex-col overflow-y-auto h-full">            
                <div className='grid grid-cols-12 gap-2 pb-3'>                    
                    <InputList frmRecord ={frmRecord} name='REG_Id' dataOptions={regiones} className='col-span-5' isRequired={true} placeholder='Región metropolitana' label='Región' errorMessage='Debes seleccionar una región'/>
                    <InputText frmRecord ={frmRecord} name='COM_Nombre' value={field?.COM_Nombre} className='col-span-5' isRequired={true} placeholder='Maipú' label='Comuna' errorMessage='Debes ingresar un nombre de comuna'/>
                    <InputNumbers frmRecord ={frmRecord} name='COM_OrdenGeografico' value={field?.COM_OrdenGeografico} className='col-span-2' isRequired={true} placeholder='11201' label='Código' errorMessage='Debes ingresar un código geográfico'/>
                </div>                   

                <div className='grid grid-cols-12 gap-2'>
                    <span className='text-[#2c87d2] !text-base !font-normal col-span-12 flex gap-2 items-center uppercase !justify-end'>{parseInt(field?.COM_Estado) === 1 && field?.COM_Estado !== undefined ?  <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/> : parseInt(field?.COM_Estado) === 1 && field?.COM_Estado !== undefined ?<ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/> : null}{parseInt(field?.COM_Estado) === 1  && field?.COM_Estado !== undefined ? ' Habilitado' : parseInt(field?.COM_Estado) !== 1  && field?.COM_Estado !== undefined ? ' Deshabilitado' : null}</span>
                </div>                                                
            </div>            
        </section>
        :
        (
            <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50`}>
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