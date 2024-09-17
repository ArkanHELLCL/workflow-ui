/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Inputs from '../formcontent/inputs.jsx';
import InputButtons from './inputscomponents/inputButtons.jsx';
import InputSaveButtons from './inputscomponents/inputSaveButtons.jsx';
import FlujosTable from './usuariomant/flujosTable.jsx';
import { user } from '../../../mocks/usuario.json';
import { ButtonIcon } from '../../../utils/icons.jsx';
import { registros } from '../../../mocks/registrosM.json';
import { useEffect, useState } from 'react';
import { formulario } from '../../../mocks/formularioMant.json';

export default function MUMant({frmRecord, mant, record, filesList, setFilesList, singleButton}) {    
    const [field, setField] = useState(null)
    const [campos, setCampos] = useState([])
    
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
                    "USR_Jefatura":false,
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
        frmRecord.setValue('USR_Jefatura', reg?.USR_Jefatura === 1 ? true : false)        
        
        setField(reg)        
    },[registros, record])

    useEffect(() => {
        const campos = formulario.filter(item => item.id === 'mu')[0]?.FOR_Campos
        setCampos(campos)        
    },[formulario])
    
    return (
        field ?
        <>
            <section className="frmmantheaderfrom pt-1">
                <h2 className='font-base text-lg -mb-1'>Datos del Usuario <span className='text-[#2c87d2]'>{field.USR_Id === 0 ? 'Creación' : 'Id: ' + field.USR_Id}</span></h2>
                <h2 className='font-sm text-base -mb-1'>{field.USR_Id === 0 ? 'Creador: ' : 'Último editor: '} <span className='text-[#2c87d2]'>{field.USR_UsuarioEdit}</span></h2>
            </section>{
                singleButton ?
                    <InputSaveButtons />
                :   
                    <InputButtons isAllowed={parseInt(field.USR_Estado)===1 ? true : false}/>
            }
            <section className='justify-self-end pr-2 frmmantdate'>
                <span className='text-[11px] leading-tight'>{field.USR_FechaEdit.slice(0,16).replace('T',' ')}</span>
            </section>
            <section className="py-3 w-full frmmantbody">
                <div className="w-full pr-2 flex flex-col overflow-y-auto">
                    <Inputs frmRequest={frmRecord} campos={campos} filesList={filesList} setFilesList={setFilesList}/>
                    <div className='grid grid-cols-12 gap-2'>
                        <span className='text-[#2c87d2] !text-base !font-normal col-span-12 flex gap-2 items-center uppercase !justify-end'>{parseInt(field.USR_Estado) === 1 ?  <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/> : <ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>}{parseInt(field.USR_Estado) === 1 ? ' Habilitado' : ' Deshabilitado'}</span>
                    </div>                
                    
                    <div className='grid grid-cols-12 gap-2 pb-3'>
                        <div className='col-span-3 w-full min-w-36'>
                            <h2 className='!text-lg font-light dark:!text-stone-100 !text-stone-950 pb-2 truncate'>Previsualizción de firma</h2>{
                            filesList.length > 0 ? (
                                <img className="h-auto w-full" src={URL.createObjectURL(filesList[0])} />
                            ) : (
                                <div className="h-40 h-a w-full dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] rounded flex justify-center flex-col text-center font-light text-base mx-[1px]">
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
        </>
        :
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