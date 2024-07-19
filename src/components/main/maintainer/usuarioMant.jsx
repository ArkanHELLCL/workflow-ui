/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import InputList from './inputscomponents/inputList.jsx';
import InputText from './inputscomponents/inputText.jsx';
import InputRut from './inputscomponents/inputRut.jsx';
import InputEmail from './inputscomponents/inputEmail.jsx';
import InputButtons from './inputscomponents/inputButtons.jsx';
import InputPhone from './inputscomponents/inputPhone.jsx';
import InputSwitch from './inputscomponents/inputSwitch.jsx';
import InputFile from './inputscomponents/inputFile.jsx';
import FlujosTable from './usuariomant/flujosTable.jsx';
import { user } from '../../../mocks/usuario.json';

import departamentos from "../../../mocks/departamentos.json";
import sexos from "../../../mocks/sexos.json";
import perfiles from "../../../mocks/perfiles.json";
import { ButtonIcon } from '../../../utils/icons.jsx';
import { registros } from '../../../mocks/registrosM.json';
import { useEffect, useState } from 'react';

export default function MUMant({frmRecord, openDialog, setOpenDialog, mant, record, filesList, setFilesList}) {    
    const [field, setField] = useState(null)
    
    const date = new Date()
    let fecha = date.toISOString()
    fecha = fecha.slice(0,16)?.replace('T',' ')

    useEffect(() => {
        let reg
        if(parseInt(record?.record?.Id) === 0) {
            frmRecord.reset()
            reg = {
                    "USR_Id":0,
                    "USR_Usuario":'',
                    "USR_Nombre":'',
                    "USR_Apellido":'',
                    "USR_Rut":'',
                    "USR_Mail":'',
                    "DEP_Id":null,
                    "USR_Telefono":'',
                    "SEX_Id":null,
                    "PER_Id":null,
                    "USR_Firma":'',
                    "USR_Jefatura":0,
                    "USR_Estado":1,
                    "USR_UsuarioEdit":user.USR_Usuario,
                    "USR_FechaEdit":fecha
            }
        }else{
            reg = registros.filter(reg => reg.id === 'mu')[0].fields?.filter(fld => parseInt(fld.USR_Id) === parseInt(record?.record?.Id))[0]
        }        
        frmRecord.setValue('USR_Usuario', reg?.USR_Usuario)
        frmRecord.setValue('USR_Nombre', reg?.USR_Nombre)
        frmRecord.setValue('USR_Apellido', reg?.USR_Apellido)

        frmRecord.setValue('USR_Rut', reg?.USR_Rut)
        frmRecord.setValue('USR_Mail', reg?.USR_Mail)
        frmRecord.setValue('DEP_Id', reg?.DEP_Id)
        frmRecord.setValue('USR_Telefono', reg?.USR_Telefono)
        frmRecord.setValue('SEX_Id', reg?.SEX_Id)
        frmRecord.setValue('PER_Id', reg?.PER_Id)
        frmRecord.setValue('USR_Firma', reg?.USR_Firma)
        frmRecord.setValue('USR_Jefatura', reg?.USR_Jefatura)        
        
        setField(reg)        
    },[registros, record])
    
    return (
        field ?
        <section id="InputsContent" className="py-3 w-full flex flex-col h-full">
            <h2 className='font-base text-lg -mb-1'>Datos del Usuario <span className='text-[#2c87d2]'>Id: {field.USR_Id}</span></h2>
            <h2 className='font-sm text-base -mb-1'>Último editor: <span className='text-[#2c87d2]'>{field.USR_UsuarioEdit}</span></h2>
            <h2 className='font-sm text-base pb-3'>Fecha de edición: <span className='text-[#2c87d2]'>{field.USR_FechaEdit.slice(0,16).replace('T',' ')}</span></h2>
            <InputButtons frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} isAllowed={parseInt(field.USR_Estado)===1 ? true : false} />
            <div className="w-full pr-2 flex flex-col overflow-y-auto h-full">
                <div className='grid grid-cols-12 gap-2 pb-3'>
                    <InputText frmRecord ={frmRecord} name='USR_Usuario' value={field.USR_Usuario} className='col-span-4' isRequired={true} placeholder='jlopez' label='Código' errorMessage='Debes ingresar un código de usuario'/>
                    <InputText frmRecord ={frmRecord} name='USR_Nombre' value={field.USR_Nombre} className='col-span-4' isRequired={true} placeholder='Juan' label='Nombre' errorMessage='Debes ingresar un nombre de usuario'/>
                    <InputText frmRecord ={frmRecord} name='USR_Apellido' value={field.USR_Apellido} className='col-span-4' isRequired={true} placeholder='Lopez Perez' label='Apellido' errorMessage='Debes ingresar un apellido de usuario'/>
                </div>
            
                <div className='grid grid-cols-12 gap-2 pb-3'>
                    <InputRut frmRecord ={frmRecord} name='USR_Rut' value={field.USR_Rut} className='col-span-2' isRequired={true} placeholder='123456780' label='RUT' errorMessage='Debes ingresar el RUT del usuario'/>
                    <InputEmail frmRecord ={frmRecord} name='USR_Mail' value={field.USR_Mail} className='col-span-4' isRequired={true} placeholder='jlopez@mintrab.gob.cl' label='Email' errorMessage='Debes ingresar el email del usuario'/>
                    <InputList frmRecord ={frmRecord} name='DEP_Id' dataOptions={departamentos} className='col-span-6' isRequired={true} placeholder='Departamento de Tecnologías de Información' label='Departamento' errorMessage='Debes ingresar el departamento del usuario'/>
                </div>

                <div className='grid grid-cols-12 gap-2 pb-3'>
                    <InputPhone frmRecord ={frmRecord} name='USR_Telefono' value={field.USR_Telefono} className='col-span-2' isRequired={false} placeholder='123456788' label='Teléfono' errorMessage=''/>
                    <InputList frmRecord ={frmRecord} name='SEX_Id' dataOptions={sexos} className='col-span-3' isRequired={true} placeholder='Femenino' label='Género' errorMessage='Debes seleccionar un sexo'/>
                    <InputList frmRecord ={frmRecord} name='PER_Id' dataOptions={perfiles} className='col-span-3' isRequired={true} placeholder='Revisor' label='Perfil' errorMessage='Debes ingresar el perfil del usuario'/>
                    <InputFile frmRecord ={frmRecord} name='USR_Firma' label='Firma' className='col-span-2' isRequired={true} filesList={filesList} setFilesList={setFilesList} errorMessage='Debes adjuntar un archivo'/>
                    <InputSwitch frmRecord ={frmRecord} name='USR_Jefatura' value={parseInt(field.USR_Jefatura)===0 ? false : true} className='col-span-2 !items-center !justify-center' label='Jefatura'/>                    
                </div>                

                <div className='grid grid-cols-12 gap-2'>
                    <span className='text-[#2c87d2] !text-base !font-normal col-span-12 flex gap-2 items-center uppercase !justify-end'>{parseInt(field.USR_Estado) === 1 ?  <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/> : <ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>}{parseInt(field.USR_Estado) === 1 ? ' Habilitado' : ' Deshabilitado'}</span>
                </div>                
                
                <div className='grid grid-cols-12 gap-2 pb-3'>
                    <div className='col-span-3 w-full min-w-36'>
                        <h2 className='!text-lg font-light dark:!text-stone-100 !text-stone-950 pb-2 truncate'>Previsualizción de firma</h2>{
                        filesList.length > 0 ? (
                            <img className="h-auto w-full" src={URL.createObjectURL(filesList[0])} />
                        ) : (
                            <div className="h-40 h-a w-full dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] rounded flex justify-center flex-col text-center font-light text-base">
                                <span className='truncate'>Sin firma cargada</span>
                            </div>
                        )}
                    </div>
                    <div className='col-span-9 flex justify-center flex-col gap-2'>
                        <FlujosTable title="Flujos asignados" pageSize={5}/>
                    </div>                    
                </div>

                <input type="hidden" {...frmRecord.register('USR_Id')} value={field?.USR_Id} />
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