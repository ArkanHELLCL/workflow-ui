/* eslint-disable react/prop-types */

import { IconForm } from "./icons"

const InputType = ({campo}) => {    
    const classInput = "rounded-none rounded-e-lg bg-gray-50 border border-gray-300 dark:text-stone-100 text-stone-500 focus:border-[#deecf9] block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-[#363636] dark:border-gray-600 dark:placeholder-gray-400"    

    switch (campo.FDI_TipoCampo) {
        case 'C':
            return <input type="text" id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} value={campo.DFO_Dato}/>
        case 'N':
            return <input type="number" id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} value={campo.DFO_Dato}/>
        case 'F':
            return <input type="date" id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} value={campo.DFO_Dato}/> 
        case 'T':
            return <textarea id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} value={campo.DFO_Dato}/>
        case 'LM':
            return null
        default:
            return <input type="text" id={campo.FDI_NombreHTML} className={classInput} placeholder={campo.FDI_Descripcion} value={campo.DFO_Dato}/>
    }
}

export function InputTypes({campos}){
    return(
        campos?.map((campo) => {
            let colwidth = campo.FDI_TamanoDiseno === 12 ? 'col-span-12' : campo.FDI_TamanoDiseno === 11 ? 'col-span-11' : campo.FDI_TamanoDiseno === 10 ? 'col-span-10' : campo.FDI_TamanoDiseno === 9 ? 'col-span-9' : campo.FDI_TamanoDiseno === 8 ? 'col-span-8' : campo.FDI_TamanoDiseno === 7 ? 'col-span-7' : campo.FDI_TamanoDiseno === 6 ? 'col-span-6' : campo.FDI_TamanoDiseno === 5 ? 'col-span-5' : campo.FDI_TamanoDiseno === 4 ? 'col-span-4' : campo.FDI_TamanoDiseno === 3 ? 'col-span-3' : campo.FDI_TamanoDiseno === 2 ? 'col-span-2' : 'col-span-1'
            return(
                <div key={campo.FDI_NombreHTML} className={colwidth}>
                    <label htmlFor={campo.FDI_NombreHTML} className="block mb-2 text-sm font-medium dark:text-stone-100 text-stone-500">{campo.FDI_Descripcion}</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm dark:text-stone-100 text-stone-500 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-[#4a4a4a] dark:border-gray-600">
                            <IconForm typeIcon={campo.FDI_IconoDiseno} />
                        </span>
                        <InputType campo={campo} />
                    </div>
                </div>
            )}
        )
    )
}