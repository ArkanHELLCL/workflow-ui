/* eslint-disable react/prop-types */
//import InputList from './inputscomponents/inputList.jsx';
//import InputText from './inputscomponents/inputText.jsx';
//import InputRut from './inputscomponents/inputRut.jsx';
//import InputEmail from './inputscomponents/inputEmail.jsx';
//import InputPhone from './inputscomponents/inputPhone.jsx';
import InputButtons from './inputscomponents/inputButtons.jsx';
//import { ButtonIcon } from '../../../utils/icons.jsx';

export default function MUMant({field, frmRecord, openDialog, setOpenDialog, mant, record}) {
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