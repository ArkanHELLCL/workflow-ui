/* eslint-disable react/prop-types */
import InputsType from './InputsType.jsx'

export default function Inputs({frmRequest, campos}){
    return(
        <section id="InputsContent" className="py-3 w-full h-full flex overflow-auto">
            <div className="w-full pr-2 container">
                <div className='grid grid-cols-12 gap-2'>{        
                    campos?.map((campo) => {
                        const colwidth = campo.FDI_TamanoDiseno === 12 ? 'col-span-12' : campo.FDI_TamanoDiseno === 11 ? '2xl:col-span-11 xl:col-span-12' : campo.FDI_TamanoDiseno === 10 ? '2xl:col-span-10 xl:col-span-12' : campo.FDI_TamanoDiseno === 9 ? '2xl:col-span-9 xl:col-span-12' : campo.FDI_TamanoDiseno === 8 ? '2xl:col-span-8 xl:col-span-12' : campo.FDI_TamanoDiseno === 7 ? '2xl:col-span-7 xl:col-span-12' : campo.FDI_TamanoDiseno === 6 ? '2xl:col-span-6 xl:col-span-12 md:col-span-12' : campo.FDI_TamanoDiseno === 5 ? 'sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-6 2xl:col-span-5' : campo.FDI_TamanoDiseno === 4 ? 'sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-6 2xl:col-span-4' : campo.FDI_TamanoDiseno === 3 ? 'sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-3' : campo.FDI_TamanoDiseno === 2 ? 'sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-2' : 'sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-1'
                        //colwidth = colwidth + ' relative'
                        return(
                            <InputsType key={campo.FDI_NombreHTML} frmRequest={frmRequest} campo={campo} className={colwidth + ' relative pb-3'}/>                                
                        )}
                    )
                }
                </div>
            </div>
        </section>
    )
}