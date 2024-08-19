/* eslint-disable react/prop-types */
import InputsType from './InputsType.jsx'

const colwidth = (campo) => {
    return 'col-span-' + campo.FDI_TamanoDiseno
}

export default function Inputs({campos}){
    return(
        <section id="InputsContent" className="py-3 w-full h-full flex">
            <div className="w-full pr-2">
                <div className='grid grid-cols-12 gap-2'>{        
                    campos?.map((campo) => {
                        //let colwidth = campo.FDI_TamanoDiseno === 12 ? 'col-span-12' : campo.FDI_TamanoDiseno === 11 ? 'col-span-11' : campo.FDI_TamanoDiseno === 10 ? 'col-span-10' : campo.FDI_TamanoDiseno === 9 ? 'col-span-9' : campo.FDI_TamanoDiseno === 8 ? 'col-span-8' : campo.FDI_TamanoDiseno === 7 ? 'col-span-7' : campo.FDI_TamanoDiseno === 6 ? 'col-span-6' : campo.FDI_TamanoDiseno === 5 ? 'col-span-5' : campo.FDI_TamanoDiseno === 4 ? 'col-span-4' : campo.FDI_TamanoDiseno === 3 ? 'col-span-3' : campo.FDI_TamanoDiseno === 2 ? 'col-span-2' : 'col-span-1'
                        //colwidth = colwidth + ' relative'
                        return(
                            <InputsType key={campo.FDI_NombreHTML} campo={campo} className={colwidth(campo) + ' relative pb-3'}/>                                
                        )}
                    )
                }
                </div>
            </div>
        </section>
    )
}