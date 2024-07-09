/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFilters } from '../../hooks/useFilters.jsx';
import { useRecords } from '../../hooks/useRecords.jsx';
import ConfirmationDialog from './ConfirmationDialog.jsx';
import { useSnackbar } from 'notistack';
import { useEffect, useRef } from 'react';
import { registros } from '../../mocks/registrosM.json'
import { Controller } from 'react-hook-form';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import FormHelperText from '@mui/joy/FormHelperText';
import { InnerInput } from './formcontent/inputscomponents/StyledComponent.jsx';
import { useSpring, animated } from '@react-spring/web';
import { ButtonIcon } from '../../utils/icons.jsx';

function InputButtons({frmRecord, openDialog, setOpenDialog}) {    
    const buttonsAnimation1 = useSpring({
        delay: 10,
        opacity: 0,
        position: 'absolute',
        //config: { duration: 100 },
        from: {
            transform: `translateX(100px)`,
            opacity: 0,
        },
        to: {
            transform: `translateX(0px)`,            
            opacity: 1,
        }
    });

    const buttonsAnimation2 = useSpring({
        delay: 10,
        opacity: 0,
        position: 'absolute',   
        //config: { duration: 50 },     
        from: {
            transform: `translateX(400px)`,
            opacity: 0,
        },
        to: {
            transform: `translateX(0px)`,            
            opacity: 1,
        }
    });

    const buttonsAnimation3 = useSpring({
        delay: 10,
        opacity: 0,
        position: 'absolute',  
        //config: { duration: 10 },      
        from: {
            transform: `translateX(450px)`,
            opacity: 0,
        },
        to: {
            transform: `translateX(0px)`,            
            opacity: 1,
        }
    });
    
    async function hanldeOnClick(event){
        event.preventDefault()
        const isValid = await frmRecord.trigger()
        if(isValid){
            //if(btns?.dialogo==='confirm'){
                setOpenDialog({
                    ...openDialog,
                    titulo:'Guardar modificaciones',
                    mensaje:'¿Desaea guardar las modificaciones realizadas?',
                    id:'edit',
                    open:true,
                    frmname:'frmWFRecords',
                    action:'submit',
                    type:'button'
                })
            //}
        }else{
            enqueueSnackbar('Debes corregir los errores antes de grabar!', { variant : "error" })
        }
    }

    const { enqueueSnackbar } = useSnackbar();
    return(
        <div id="buttonsRecord" className='grid text-right leading-tight absolute right-2 top-0'> 
            <div className='flex items-center gap-3 pb-2' id="grpReq">
                <animated.div key='grpReq-3' className='flex' style={buttonsAnimation3} id='grpReq-3'>
                {
                    <>
                        <button 
                            key='btn_crear'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Crear nuevo registro'
                            onClick={() => hanldeOnClick(event)}>
                                <ButtonIcon typeButton="btn_crear" styles='w-7 h-7'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Nuevo</span>
                        </button>
                    </>
                }
                </animated.div>
                
                <animated.div key='grpReq-2' className='flex' style={buttonsAnimation2} id='grpReq-2'>
                {
                    <>
                        <button 
                            key='btn_modificar'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Guardar modificaciones realizadas'
                            onClick={() => hanldeOnClick(event)}>
                                <ButtonIcon typeButton="btn_modificar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Guardar</span>
                        </button>
                        <button 
                            key='btn_bloquear'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Cambiar el estado del registro a deshabilitado'
                            onClick={() => hanldeOnClick(event)}>
                                <ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Deshabilitar</span>
                        </button>
                        <button 
                            key='btn_habilitar'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Cambiar el estado del registro a habilitado'
                            onClick={() => hanldeOnClick(event)}>
                                <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Habilitar</span>
                        </button>
                        <button 
                            key='btn_eliminar'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Eliminación del registro'
                            onClick={() => hanldeOnClick(event)}>
                                <ButtonIcon typeButton="btn_eliminar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Eliminar</span>
                        </button>
                    </>
                }
                </animated.div>

                <animated.div key='grpReq-1' className='flex' style={buttonsAnimation1} id='grpReq-1'>
                {
                    <>
                        <button 
                            key='btn_anterior'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Ir al registro anterior'
                            onClick={() => hanldeOnClick(event)}>
                                <ButtonIcon typeButton="btn_retroceder" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>                                
                        </button>
                            <button 
                            key='btn_siguiente'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Ir al registro siguiente'
                            onClick={() => hanldeOnClick(event)}>
                                <ButtonIcon typeButton="btn_avanzar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>                                
                        </button>
                    </>
                }
                </animated.div>
            </div> 
        </div>
        
    )
}

function InputText ({frmRecord, name, value, className, isRequired, placeholder, label}) {
    return(
        <Controller
            control={frmRecord.control}
            name={name}
            rules={isRequired ? {required : 'Campo requerido'} : {required : false}}
            defaultValue={value}
            render={({ field: { onChange, onBlur } }) => (
                <FormControl
                    id={name}
                    size='sm'
                    className={className}>
                    <Input                                
                        placeholder={placeholder}
                        name={name}
                        autoComplete='on'
                        autoFocus={false}
                        error={!!frmRecord.formState.errors[name]}                    
                        defaultValue={value}
                        variant="outlined"
                        slots={{ input: InnerInput }}
                        onChange={onChange}
                        onBlur={onBlur}                    
                        slotProps={{ 
                                input: { placeholder: placeholder, type: 'text', label: label, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
                                root : { className : "dark:!bg-transparent dark:!border-[#575757]"}}}
                        sx={{
                            '--Input-minHeight': '56px',
                            '--Input-radius': '6px',
                        }}                                
                    />
                    <FormHelperText className="!text-red-600">
                        {frmRecord.formState.errors[name]?.message}
                    </FormHelperText>                       
                </FormControl>
            )}
        />
    )
}

function FormMatainer ({frmRecord, record, filters, openDialog, setOpenDialog}){   
    const fields = registros.filter(reg => reg.id === filters.itemIdSelected)[0].fields
    if(filters.itemIdSelected === 'mp'){        //Mantenedor de Proveedores        
        const fieldsMP = fields.filter(fld => parseInt(fld.PRO_Id) === parseInt(record?.record?.Id))[0]
    
        return ( 
            fieldsMP ?
                <section id="InputsContent" className="py-3 w-full h-full">
                    <h2 className='font-extralight text-lg pb-3 text-[#2c87d2]'>Datos del Proveedor</h2>
                    <InputButtons frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} />
                    <div className="w-full pr-2">
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <InputText frmRecord ={frmRecord} name='PRO_RazonSocial' value={fieldsMP.PRO_RazonSocial} className='col-span-12' isRequired={true} placeholder='Empresa de aseo y limpieza' label='Razón Social'/>
                            <input name="PRO_Rut" {...frmRecord.register('PRO_Rut')} className='col-span-4' required/>
                        </div>
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <InputText frmRecord ={frmRecord} name='PRO_Direccion' value={fieldsMP.PRO_Direccion} className='col-span-12' isRequired={false} placeholder='Calle 35, Providencia' label='Dirección comercial'/>
                        </div>
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <input name="PRO_Telefono" {...frmRecord.register('PRO_Telefono')} type="number" className='col-span-4'/>
                            <input name="PRO_Email" {...frmRecord.register('PRO_Email')} type="email" className='col-span-5' required/>
                            <input name="PRO_NumCuentaBancaria" {...frmRecord.register('PRO_NumCuentaBancaria')} className='col-span-3' required/>
                        </div>
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <input name="PRO_Banco_ILD" {...frmRecord.register('PRO_Banco_ILD')} type="number" className='col-span-6' required/>
                            <input name="TCU_Id" {...frmRecord.register('TCU_Id')} type="number" className='col-span-6' required/>
                        </div>
                        <div className='grid grid-cols-12 gap-2 pb-3'>
                            <input name="PRO_Estado" {...frmRecord.register('PRO_Estado')} type="number" className='col-span-6'/>
                        </div>                                                        
                    </div>
                </section> :
                <h2>Registro no encontrado : {record?.record?.Id}</h2>            
        )
    }
    if(filters.itemIdSelected === 'mu'){        //Mantenedor de Usuarios
        return (
            <>
                <input name="recordTextUusuario" {...frmRecord.register('recordTextUusuario')}/>
                <input type='submit'></input>
            </>
        )
    }
    return (
        <>
            <h2>Mantenedor no encontrado</h2>
            {filters.itemIdSelected}
        </>
    )
}

export default function FormRecord({frmRecord, openDialog, setOpenDialog}){
    const { record } = useRecords()
    const { filters } = useFilters()

    const onSubmit = (data) => {        
        console.log('recordcomponent',data);
        frmRecord.reset()
        frmRecord.clearErrors()        
        //setAdjuntos(REQ_Adjuntos)
        //setFilesList([])
    };

    useEffect(() => {        
        if(openDialog?.option){
            formRef.current.requestSubmit()
            enqueueSnackbar('Operación realizada correctamente!', { variant : "success" } )
        }
        setOpenDialog({...openDialog, option:false})                    
    }
    ,[openDialog?.option])    

    const { enqueueSnackbar } = useSnackbar();
    const formRef = useRef(null)
    return(
        <>
            {
                record  &&
                <section id="contentForm" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1`}>                    
                    <form id="frmWFRecords" noValidate ref={formRef}
                        className="h-full w-full flex flex-col columns-1"
                        onSubmit={frmRecord.handleSubmit(onSubmit)}>
                            <FormMatainer frmRecord={frmRecord} record={record} filters={filters} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
                    </form>
                </section>
            }{
                openDialog?.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}