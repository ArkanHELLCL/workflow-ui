/* eslint-disable react/prop-types */

export default function DropAttach({handleDrop, handleDragOver, handleDragLeave}) {
    return(
        <section id="DropAttach" className="py-3 w-full h-full flex overflow-auto">
            <div className="w-full pr-2">
                <div className='dark:bg-[#071725] bg-[#ebf3fc] opacity-80 border border-dashed dark:border-[#1f4568] border-[#478ecc] hover:pointer-events-auto z-50 flex justify-center align-middle items-center flex-1 flex-col columns-1 h-full w-full'
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}                        
                    onDragLeave={handleDragLeave}
                    >
                    <div>
                        <span className='text-[#2c87d2]'> Agregar adjuntos</span>
                    </div>
                </div>                
            </div>
        </section>
    )
}