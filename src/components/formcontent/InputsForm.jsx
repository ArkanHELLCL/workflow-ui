/* eslint-disable react/prop-types */

export default function InputsForm({setAdjuntos, setDropEnter, dropEnter}) {
    const handleDragEnter = (event) => {
        event.preventDefault();
        setDropEnter(true);
    };
    
    const handleDragLeave = (event) => {
        event.preventDefault();
        setDropEnter(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDropEnter(false);
        const files = Array.from(event.dataTransfer.files);
        const validFiles = files.filter((file) => {
            const validExtensions = [".jpg", ".jpeg", ".png", ".gif",".pdf",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".txt","webp"];
            const isValidExtension = validExtensions.some((ext) =>
                file.name.toLowerCase().endsWith(ext)
            );
            const isValidSize = file.size <= 10485760; // 10 MB
            return isValidExtension && isValidSize;
        });

        const remapValidFiles = validFiles.map((adjunto, index) => {            
            const data = {
                id: adjunto?.name,
                nombre: adjunto?.name,
                extension: adjunto?.name?.split('.').pop(),
                tamano: adjunto?.size,
                thumbail:  event.dataTransfer.files[index].type.includes('image') ? URL.createObjectURL(event.dataTransfer.files[index]) : null,
                url: URL.createObjectURL(event.dataTransfer.files[index]),
                upload: true
            }
            return data
        })

        setAdjuntos((prevAdjuntos) => {
            const newAdjuntos = [...prevAdjuntos, ...remapValidFiles];
            const finalAdjuntos = Array.from(new Set(newAdjuntos)); // Eliminar duplicados  
            console.log(finalAdjuntos)      
            return finalAdjuntos
        });
        
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div id="inpuntsForm" className={`flex-1 overflow-auto flex ${dropEnter ? 'dark:bg-[#1c1c1c]' : ''} px-0 py-0 min-w-96`} onDragEnter={handleDragEnter}>
            {
                dropEnter ?
                <div className=' dark:bg-[#071725] bg-[#ebf3fc] opacity-80 border border-dashed dark:border-[#1f4568] border-[#478ecc] hover:pointer-events-auto z-50 flex justify-center align-middle items-center flex-1'
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}                        
                    onDragLeave={handleDragLeave}
                    //onDragEnd={handleDragEnd}
                    >
                    <div>
                        <span className='text-[#2c87d2]'> Agregar adjuntos</span>
                    </div>
                </div> :
                <div className="py-3">
                   <span>Inputs</span>
                </div>
            }
        </div>
    );
}