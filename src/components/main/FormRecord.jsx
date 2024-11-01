/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFilters, useRecords } from '../../hooks';
import { useState } from 'react';
import { MPMant, MUMant, MCMant} from './maintainer';

function FormMatainer ({frmRecord, record, filters, filesList, setFilesList, setRecord}){
    switch (filters.itemIdSelected) {
        case 'mp':  //Proveedores            
            return <MPMant frmRecord={frmRecord} mant={filters.itemIdSelected} record={record} />
        case 'mu':  //Usuarios
            return <MUMant frmRecord={frmRecord} mant={filters.itemIdSelected} record={record} filesList={filesList} setFilesList={setFilesList} setRecord={setRecord}/>
        case 'mc':  //Comunas
            return <MCMant frmRecord={frmRecord} mant={filters.itemIdSelected} record={record} />
        default:
            return (
                <>
                    <h2>Mantenedor no encontrado</h2>
                    {filters.itemIdSelected}
                </>
            )
    }
}

export default function FormRecord({frmRecord}){
    const { record, setRecord } = useRecords()
    //const { setPreview } = usePreview()
    const { filters } = useFilters()
    const [filesList, setFilesList] = useState([]);

    return(        
        record  &&
        <section id="contentForm" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1`}>                    
            <div className="h-full w-full mantform">
                <FormMatainer frmRecord={frmRecord} record={record} filters={filters} filesList={filesList} setFilesList={setFilesList} setRecord={setRecord}/>
            </div>
        </section>        
    )
}