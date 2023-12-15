/* eslint-disable react/prop-types */
import { useState } from 'react';

import { IconForm } from "./icons"

const InputType = ({campo}) => {    
    const classInput = "rounded-none rounded-e-lg bg-gray-50 border border-gray-300 dark:text-stone-100 text-stone-500 focus:ring-[#deecf9] focus:border-[#deecf9] block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-[#363636] dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-[#deecf9] dark:focus:border-[#deecf9]"    

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
        campos?.map((campo) => 
            <div key={campo.FDI_NombreHTML} className={campo.FDI_TamanoDiseno}>
                <label htmlFor={campo.FDI_NombreHTML} className="block mb-2 text-sm font-medium dark:text-stone-100 text-stone-500">{campo.FDI_Descripcion}</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm dark:text-stone-100 text-stone-500 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-[#4a4a4a] dark:border-gray-600">
                        <IconForm typeIcon={campo.FDI_IconoDiseno} />
                    </span>
                    <InputType campo={campo} />
                </div>
            </div>
        )
    )
}