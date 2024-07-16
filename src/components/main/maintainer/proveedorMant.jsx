/* eslint-disable react/prop-types */
import bancos from "../../../mocks/bancos.json";
import tiposdecuenta from "../../../mocks/tiposdecuenta.json";
import InputList from './inputscomponents/inputList.jsx';
import InputText from './inputscomponents/inputText.jsx';
import InputRut from './inputscomponents/inputRut.jsx';
import InputEmail from './inputscomponents/inputEmail.jsx';
import InputPhone from './inputscomponents/inputPhone.jsx';
import InputButtons from './inputscomponents/inputButtons.jsx';
import { ButtonIcon } from '../../../utils/icons.jsx';

export default function MPMant({fields, frmRecord, openDialog, setOpenDialog, mant, record, setFilesList, setRecord}) {
    const field = fields.filter(fld => parseInt(fld.PRO_Id) === parseInt(record?.record?.Id))[0]
    return ( 
        field ?
            <section id="InputsContent" className="py-3 w-full flex flex-col h-full">
                <h2 className='font-base text-lg -mb-1'>Datos del Proveedor <span className='text-[#2c87d2]'>Id: {field.PRO_Id}</span></h2>
                <h2 className='font-sm text-base -mb-1'>Último editor: <span className='text-[#2c87d2]'>{field.PRO_UsuarioEdit}</span></h2>
                <h2 className='font-sm text-base pb-3'>Fecha de edición: <span className='text-[#2c87d2]'>{field.PRO_FechaEdit.slice(0,16).replace('T',' ')}</span></h2>
                <InputButtons frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} isAllowed={parseInt(field.PRO_Estado)===1 ? true : false} setFilesList={setFilesList} setRecord={setRecord}/>
                <div className="w-full pr-2 flex flex-col overflow-y-auto h-full">
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
                        <InputList frmRecord ={frmRecord} name='PRO_Banco_ILD' dataOptions={bancos} className='col-span-4' isRequired={true} placeholder='Seleccione un banco' label={bancos.name} errorMessage='Debes seleccionar un banco'/>
                        <InputText frmRecord ={frmRecord} name='PRO_NumCuentaBancaria' value={field.PRO_NumCuentaBancaria} className='col-span-4' isRequired={true} placeholder='1234567890' label='Número de cuenta bancaria' errorMessage='Debes ingresar el número de cuenta bancaria'/>
                        <InputList frmRecord ={frmRecord} name='TCU_Id' dataOptions={tiposdecuenta} className='col-span-4' isRequired={true} placeholder='Seleccione un banco' label={tiposdecuenta.name} errorMessage='Debes seleccionar un tipo de cuenta'/>
                    </div>
                    <div className='grid grid-cols-12 gap-2 pb-3'>
                        <span className='text-[#2c87d2] !text-base !font-normal col-span-12 flex gap-2 items-center uppercase !justify-end'>{parseInt(field.PRO_Estado) === 1 ?  <ButtonIcon typeButton="btn_habilitar" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/> : <ButtonIcon typeButton="btn_bloquear" styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>}{parseInt(field.PRO_Estado) === 1 ? ' Habilitado' : ' Deshabilitado'}</span>
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