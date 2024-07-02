/* eslint-disable react/prop-types */
import Inputs from './Inputs.jsx';

export default function InputsForm({setDropEnter, dropEnter, campos, onChange}) {
    
    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDropEnter(true);
    };
    
    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDropEnter(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDropEnter(false);
        onChange(event);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
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
                <Inputs campos={campos} />
            }
        </div>
    );
}