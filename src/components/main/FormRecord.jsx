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
import { Fn } from '../../utils/validaRut.jsx';
import FormatearRut from '../../utils/FormatearRut.jsx';
/*const fieldData = {
    name: null,
    value: null,
    className: null,
    isRequired: null,
    placeholder: null,
    label: null,
    errorMessage: null
}*/

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
                            type='button'
                            onClick={() => console.log('crear')}>
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
                            type='button'
                            onClick={() => console.log('deshabiloitar')}>
                                <ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Deshabilitar</span>
                        </button>
                        <button 
                            key='btn_habilitar'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Cambiar el estado del registro a habilitado'
                            type='button'
                            onClick={() => console.log('habilitar')}>
                                <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>
                                <span className='text-xs font-normal leading-tight w-fit px-2'>Habilitar</span>
                        </button>
                        <button 
                            key='btn_eliminar'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Eliminación del registro'
                            type='button'
                            onClick={() => console.log('eliminar')}>
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
                            type='button'
                            onClick={() => console.log('reg. anterior')}>
                                <ButtonIcon typeButton="btn_retroceder" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>                                
                        </button>
                            <button 
                            key='btn_siguiente'
                            className='h-9 w-auto dark:bg-[#444444] bg-white outline outline-[1px] dark:outline-[#575757] outline-[#b8b5b2] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1] flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20' 
                            title='Ir al registro siguiente'
                            type='button'
                            onClick={() => console.log('reg. siguiente')}>
                                <ButtonIcon typeButton="btn_avanzar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>                                
                        </button>
                    </>
                }
                </animated.div>
            </div> 
        </div>
        
    )
}

function InputText ({frmRecord, name, value, className, isRequired, placeholder, label, errorMessage}) {
    return(
        <Controller
            control={frmRecord.control}
            name={name}
            rules={isRequired ? {required : errorMessage} : {required : false}}
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

function InputRut ({frmRecord, name, value : val, className, isRequired, placeholder, label, errorMessage}) {  
    return (
      <Controller
          control={frmRecord.control}
          name={name}
          rules={{
              validate: {
                required: (value) => {
                  if (value && !Fn.validaRut(value)) return 'El RUT ingresado no es válido';
                  if (!value && isRequired) return errorMessage;
                }
              },
              maxLength: 13
            }}
          defaultValue={FormatearRut(val)}
          render={({ field }) => (
              <FormControl
                  {...field}
                  id={name}
                  size='sm'
                  className={className}>
                  <Input    
                      placeholder={placeholder}
                      name={name}
                      autoComplete='on'
                      autoFocus={false}
                      error={!!frmRecord.formState.errors[name]}                    
                      variant="outlined"
                      slots={{ input: InnerInput }}
                      onChange={(e) => field.onChange(()=>frmRecord.setValue(name,FormatearRut(e.target.value)))}
                      onBlur={field.onBlur}
                      value={field.value}
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
    );
}

function InputEmail ({frmRecord, name, value : val, className, isRequired, placeholder, label, errorMessage}) {
    return(
        <Controller
            control={frmRecord.control}
            name={name}
            rules={{
                validate: {
                  required: (value) => {
                    if (!value && isRequired) return errorMessage;
                  },
                  validEmail: (value) => {
                    let currentEmails = value
                    let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/i;
                        if (!regex.test(currentEmails.replace(/\s/g, ''))) {
                            return 'El Email ingresado no es válido';
                        }
                    }
                },
              }}
            defaultValue={val}
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
                        defaultValue={val}
                        variant="outlined"
                        slots={{ input: InnerInput }}
                        onChange={onChange}
                        onBlur={onBlur}    
                        slotProps={{ 
                                input: { placeholder: placeholder, type: 'text', label: label, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300' }, 
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

function InputPhone ({frmRecord, name, value : val, className, isRequired, placeholder, label, errorMessage}) {
    return(
        <Controller
            control={frmRecord.control}
            name={name}
            rules={{
                validate: {
                  required: (value) => {
                    if (!value && isRequired) return errorMessage;
                  },
                  validPhone: (value) => {
                    if((value.length>=1 && value.length<9) || (value.length>9)){
                        return 'El télefono ingresado no es válido';
                    }
                  },
                }
              }}
            defaultValue={val}
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
                        defaultValue={val}
                        variant="outlined"
                        slots={{ input: InnerInput }}
                        onChange={onChange}
                        onBlur={onBlur}    
                        slotProps={{ 
                                input: { placeholder: placeholder, type: 'text', label: label, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300' }, 
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

function MUMant({field, frmRecord, openDialog, setOpenDialog, mant, record}) {
    return (
        field ?
        <section id="InputsContent" className="py-3 w-full h-full">
            <h2 className='font-extralight text-lg pb-3 text-[#2c87d2]'>Datos del Proveedor</h2>            
            <InputButtons frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} />
            <div className="w-full pr-2">
                <div className='grid grid-cols-12 gap-2 pb-3'>
                    <input name="MUN_Nombre" {...frmRecord.register('MUN_Nombre')} className='col-span-4' required/>
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

function MPMant({field, frmRecord, openDialog, setOpenDialog, mant, record}) {
    return ( 
        field ?
            <section id="InputsContent" className="py-3 w-full h-full">
                <h2 className='font-extralight text-lg pb-3 text-[#2c87d2]'>Datos del Proveedor</h2>
                <InputButtons frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} />
                <div className="w-full pr-2">
                    <div className='grid grid-cols-12 gap-2 pb-3'>
                        <InputText frmRecord ={frmRecord} name='PRO_RazonSocial' value={field.PRO_RazonSocial} className='col-span-9' isRequired={true} placeholder='Empresa de aseo y limpieza' label='Razón Social' errorMessage='Debes ingresar una razón social'/>
                        <InputRut frmRecord ={frmRecord} name='PRO_Rut' value={field.PRO_Rut} className='col-span-3' isRequired={true} placeholder='12345678K' label='Rut' errorMessage='Debes ingresar un RUT válido'/>
                    </div>
                    <div className='grid grid-cols-12 gap-2 pb-3'>
                        <InputText frmRecord ={frmRecord} name='PRO_Direccion' value={field.PRO_Direccion} className='col-span-12' isRequired={false} placeholder='Calle 35, Providencia' label='Dirección comercial' errorMessage=''/>
                    </div>
                    <div className='grid grid-cols-12 gap-2 pb-3'>
                        <InputEmail frmRecord ={frmRecord} name='PRO_Mail' value={field.PRO_Mail} className='col-span-8' isRequired={true} placeholder='miempresa@correo.cl' label='Correo electrónico' errorMessage='Debes ingresar el Email del proveedor'/>
                        <InputPhone frmRecord ={frmRecord} name='PRO_Telefono' value={field.PRO_Telefono} className='col-span-4' isRequired={false} placeholder='912345678' label='Teléfono' errorMessage='Debes ingresar un télefono válido'/>
                    </div>
                    <div className='grid grid-cols-12 gap-2 pb-3'>
                        <input name="PRO_Banco_ILD" {...frmRecord.register('PRO_Banco_ILD')} type="number" className='col-span-4' required/>
                        <InputText frmRecord ={frmRecord} name='PRO_NumCuentaBancaria' value={field.PRO_NumCuentaBancaria} className='col-span-4' isRequired={true} placeholder='1234567890' label='Número de cuenta bancaria' errorMessage='Debes ingresar el número de cuenta bancaria'/>
                        <input name="TCU_Id" {...frmRecord.register('TCU_Id')} type="number" className='col-span-4' required/>
                    </div>
                    <div className='grid grid-cols-12 gap-2 pb-3'>
                        <input name="PRO_Estado" {...frmRecord.register('PRO_Estado')} type="number" className='col-span-6'/>
                    </div>                                                        
                </div>
            </section> :
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

function FormMatainer ({frmRecord, record, filters, openDialog, setOpenDialog}){   
    const fields = registros.filter(reg => reg.id === filters.itemIdSelected)[0].fields
    const field = fields.filter(fld => parseInt(fld.PRO_Id) === parseInt(record?.record?.Id))[0]
    return(        
        filters.itemIdSelected === 'mp' ? (
            <MPMant field={field} frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} mant={filters.itemIdSelected} record={record}/>
        ) : (
            filters.itemIdSelected === 'mu' ? (
                <MUMant field={field} frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} mant={filters.itemIdSelected} record={record}/>
            ) :
            <>
                <h2>Mantenedor no encontrado</h2>
                {filters.itemIdSelected}
            </>
        )
    )
       
}

export default function FormRecord({frmRecord, openDialog, setOpenDialog}){
    const { record } = useRecords()
    const { filters } = useFilters()

    const onSubmit = (data) => {        
        console.log('recordcomponent',data);
        frmRecord.reset()
        frmRecord.clearErrors()        
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