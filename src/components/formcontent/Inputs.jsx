/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form'
import { IconForm } from '../icons.jsx'
import { FormInputText } from './inputscomponents/FormInputText.jsx'

export default function Inputs({campos}){
    const { register, control, formState: { errors } } = useForm()
    console.log(campos)
    return(
        <section id="InputsContent" className="py-3 w-full h-full">
            <div className="w-full pr-2">
                <div className='grid grid-cols-12 gap-2'>{        
                    campos?.map((campo) => {
                        let colwidth = campo.FDI_TamanoDiseno === 12 ? 'col-span-12' : campo.FDI_TamanoDiseno === 11 ? 'col-span-11' : campo.FDI_TamanoDiseno === 10 ? 'col-span-10' : campo.FDI_TamanoDiseno === 9 ? 'col-span-9' : campo.FDI_TamanoDiseno === 8 ? 'col-span-8' : campo.FDI_TamanoDiseno === 7 ? 'col-span-7' : campo.FDI_TamanoDiseno === 6 ? 'col-span-6' : campo.FDI_TamanoDiseno === 5 ? 'col-span-5' : campo.FDI_TamanoDiseno === 4 ? 'col-span-4' : campo.FDI_TamanoDiseno === 3 ? 'col-span-3' : campo.FDI_TamanoDiseno === 2 ? 'col-span-2' : 'col-span-1'
                        colwidth = colwidth + ' relative'
                        return(
                            <div key={campo.FDI_NombreHTML} className={colwidth}>
                                <label htmlFor={campo.FDI_NombreHTML} className={`${errors[campo?.FDI_NombreHTML] ? ' !text-red-500' : ''} block mb-2 text-sm font-medium dark:text-stone-400 text-stone-500`}>{campo.FDI_Descripcion}</label>
                                <div className="flex">
                                    <span className={`inline-flex items-center px-3 text-sm dark:text-stone-100 !text-stone-500 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-[#4a4a4a] dark:border-gray-600`}>
                                        <IconForm typeIcon={campo.FDI_IconoDiseno} styles={`${errors[campo?.FDI_NombreHTML] ? ' !fill-red-500 !text-red-500' :''}`}/>
                                    </span>
                                    <FormInputText name={campo.FDI_NombreHTML} label={campo.FDI_Descripcion} control={control} />
                                </div>
                            </div>
                        )}
                    )
                }
                </div>
            </div>
        </section>
    )
}