/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFilters } from '../../hooks/useFilters.jsx';
import { useRecords } from '../../hooks/useRecords.jsx';
import ConfirmationDialog from './ConfirmationDialog.jsx';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';

import MPMant from './maintainer/proveedorMant.jsx';
import MUMant from './maintainer/usuarioMant.jsx';
import MCMant from './maintainer/comunaMant.jsx';

function FormMatainer ({frmRecord, record, filters, openDialog, setOpenDialog, filesList, setFilesList, setRecord}){
    switch (filters.itemIdSelected) {
        case 'mp':  //Proveedores
            return <MPMant frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} mant={filters.itemIdSelected} record={record} />
        case 'mu':  //Usuarios
            return <MUMant frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} mant={filters.itemIdSelected} record={record} filesList={filesList} setFilesList={setFilesList} setRecord={setRecord}/>
        case 'mc':  //Comunas
            return <MCMant frmRecord={frmRecord} openDialog={openDialog} setOpenDialog={setOpenDialog} mant={filters.itemIdSelected} record={record} />
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
        if(openDialog?.option && openDialog?.action === 'submit'){
            formRef.current.requestSubmit()
            //enviar al endpoint datos del formulario
            enqueueSnackbar('Operación realizada correctamente!', { variant : "success" } )
        }else{
            if(openDialog?.option && openDialog?.action === 'delete'){
                //Ejecutar eliminación
                enqueueSnackbar('Eliminación realizada correctamente!', { variant : "success" } )
            }else{
                if(openDialog?.option && openDialog?.action === 'new'){
                    //Limpiar formulario
                    frmRecord.reset({}, { 
                            keepValues: false, 
                            keepDefaultValues: false, 
                            keepDirty: false 
                        })
                    frmRecord.clearErrors()
                    console.log('nuevo registro');
                    setFilesList([])
                    setRecord({"record":{"Id":0}})        
                    const elToRemove = document.getElementsByClassName('reqselected')[0]
                    elToRemove?.classList.remove('reqselected')                    
                }
            }
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