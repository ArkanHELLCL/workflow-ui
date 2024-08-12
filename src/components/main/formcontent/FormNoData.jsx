/* eslint-disable react/prop-types */
import { useRequest } from '../../../hooks/useRequest.jsx';
const handleNotDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
    return false;
}

export default function FormNoData() {
    const { request } = useRequest()
    return (
        <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50`} onDragOver={handleNotDragOver}>
            <div className='w-full h-full flex justify-center align-middle items-center'>
                <span className='text-[#2c87d2] text-2xl'>No hay datos para mostrar{`${request?.request?.VRE_Id ? ' - R: ' + request?.request?.VRE_Id : ''}`}</span>
            </div>
        </div>
    )
}

