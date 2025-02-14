/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Buttons from "../formcontent/header/ButtonsAction.jsx";
import InputSaveButtons from './inputscomponents/inputSaveButtons.jsx';
import { useUserData, useButtonsGroup, useFilters } from "../../../hooks";
import Inputs from '../formcontent/Inputs.jsx';
import { formulario as formant } from '../../../mocks/formularioMant.json';
import { ButtonIcon } from '../../../utils/icons.jsx';
import { registros } from '../../../mocks/registrosM.json';
import { useEffect, useState } from 'react';

export default function MCMant({frmRecord, mant, record, singleButton}) {
    const { userdata : user } = useUserData();
    const { setFilters } = useFilters()
    const [field, setField] = useState(null)
    const [campos, setCampos] = useState([])
    const { grupos, setGrupos } = useButtonsGroup()
    
    const date = new Date()
    let fecha = date.toISOString()
    fecha = fecha.slice(0,16)?.replace('T',' ')
    
    useEffect(() => {
        let reg        
        if(parseInt(record?.record?.Id) === 0) {
            frmRecord.reset()
            reg = {
                    "COM_Id":0,
                    "REG_Id":null,
                    "COM_Nombre":'',
                    "COM_OrdenGeografico":'',
                    "COM_UsuarioEdit":user.USR_Usuario,
                    "COM_FechaEdit":fecha
            }
        }else{
            reg = registros.filter(reg => reg.id === 'mc')[0].fields?.filter(fld => parseInt(fld.COM_Id) === parseInt(record?.record?.Id))[0]
        }
        frmRecord.clearErrors()        
        frmRecord.setValue('COM_Nombre', reg?.COM_Nombre)
        frmRecord.setValue('REG_Id', reg?.REG_Id)
        frmRecord.setValue('COM_OrdenGeografico', reg?.COM_OrdenGeografico)
        setField(reg)

        setFilters(prevState => ({
            ...prevState,
            path: '/mantenedores/comunas/' + record?.record?.Id
        }))
    },[registros, record])

    const [formulario] = formant.filter(item => item.id === 'mc')
    useEffect(() => {
        const campos = formulario?.FOR_Campos
        const grp = formulario?.FOR_Botones
        setCampos(campos)
        setGrupos(grp)        
    },[formulario])

    return (
        field ?
            <>
                <section className="frmmantheaderfrom pt-1">
                    <h2 className='font-base text-lg -mb-1'>Datos de la Comuna <span className='text-[#2c87d2]'>{field.COM_Id === 0 ? 'Creación' : 'Id: ' + field.COM_Id}</span></h2>
                    <h2 className='font-sm text-base -mb-1'>{field.COM_Id === 0 ? 'Creador: ' : 'Último editor: '} <span className='text-[#2c87d2]'>{field.COM_UsuarioEdit}</span></h2>
                </section>{
                    singleButton ?
                        <InputSaveButtons />
                    :   
                        <Buttons grupos={grupos} className={'frmmantbuttonsact pt-2'}/>
                }
                <section className='justify-self-end pr-2 frmmantdate'>
                    <span className='text-[11px] leading-tight'>{field.COM_FechaEdit.slice(0,16).replace('T',' ')}</span>
                </section>
                <section className="py-3 w-full frmmantbody">
                    <div className="w-full flex flex-col overflow-y-auto">
                        <Inputs frmRequest={frmRecord} campos={campos} />
                        <input type="hidden" {...frmRecord.register('COM_Id')} value={field?.COM_Id} />

                        <div className='grid grid-cols-12 gap-2 pr-2'>
                            <span className='text-[#2c87d2] !text-base !font-normal col-span-12 flex gap-2 items-center uppercase !justify-end'>{parseInt(field?.COM_Estado) === 1 && field?.COM_Estado !== undefined ?  <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/> : parseInt(field?.COM_Estado) === 1 && field?.COM_Estado !== undefined ?<ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/> : null}{parseInt(field?.COM_Estado) === 1  && field?.COM_Estado !== undefined ? ' Habilitado' : parseInt(field?.COM_Estado) !== 1  && field?.COM_Estado !== undefined ? ' Deshabilitado' : null}</span>
                        </div>                                                
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