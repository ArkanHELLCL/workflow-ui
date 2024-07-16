/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFilters } from '../../hooks/useFilters.jsx';
import { useRecords } from '../../hooks/useRecords.jsx';
import ConfirmationDialog from './ConfirmationDialog.jsx';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import { registros } from '../../mocks/registrosM.json'

import MPMant from './maintainer/proveedorMant.jsx';
import MUMant from './maintainer/usuarioMant.jsx';
import MCMant from './maintainer/comunaMant.jsx';

function FormMatainer ({frmRecord, record, filters, openDialog, setOpenDialog, filesList, setFilesList, setRecord}){    
    const fields = registros.filter(reg => reg.id === filters.itemIdSelected)[0].fields    
    if (fields === undefined) return (
        <>
            <h2>Registro del mantenedor no encontrado</h2>
            Id: {record.record.Id}
        </>
    )
    switch (filters.itemIdSelected) {
        case 'mp':  //Proveedores
            return <MPMant fields={fields} frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} mant={filters.itemIdSelected} record={record} setFilesList={setFilesList} setRecord={setRecord}/>
        case 'mu':  //Usuarios
            return <MUMant fields={fields} frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} mant={filters.itemIdSelected} record={record} filesList={filesList} setFilesList={setFilesList} setRecord={setRecord}/>
        case 'mc':  //Comunas
            return <MCMant fields={fields} frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} mant={filters.itemIdSelected} record={record} setFilesList={setFilesList} setRecord={setRecord}/>
        default:
            return (
                <>
                    <h2>Mantenedor no encontrado</h2>
                    {filters.itemIdSelected}
                </>
            )
    }
}

export default function FormRecord({frmRecord, openDialog, setOpenDialog, setRecord}){
    const { record } = useRecords()
    const { filters } = useFilters()
    const [filesList, setFilesList] = useState([]);

    const onSubmit = (data) => {        
        console.log('recordcomponent',data);
        frmRecord.reset()
        frmRecord.clearErrors()
        setFilesList([])
    };

    useEffect(() => {        
        if(openDialog?.option){
            formRef.current.requestSubmit()
            enqueueSnackbar('Operación realizada correctamente!', { variant : "success" } )
        }
        setOpenDialog({...openDialog, option:false})                    
    }
    ,[openDialog?.option])    

    const { enqueueSnackbar } = useSnackbar();
    const formRef = useRef(null)
    return(
        <>
            {
                record  &&
                <section id="contentForm" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1`}>                    
                    <form id="frmWFRecords" noValidate ref={formRef}
                        className="h-full w-full flex flex-col columns-1"
                        onSubmit={frmRecord.handleSubmit(onSubmit)}>
                            <FormMatainer frmRecord={frmRecord} record={record} filters={filters} openDialog={openDialog} setOpenDialog={setOpenDialog} filesList={filesList} setFilesList={setFilesList} setRecord={setRecord}/>
                    </form>
                </section>
            }{
                openDialog?.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}