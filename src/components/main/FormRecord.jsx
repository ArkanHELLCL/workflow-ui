/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFilters } from '../../hooks/useFilters.jsx';
import { useRecords } from '../../hooks/useRecords.jsx';
import ConfirmationDialog from './ConfirmationDialog.jsx';
import { useSnackbar } from 'notistack';
import { useEffect, useRef } from 'react';


function FormMatainer ({frmRecord, record, filters}){    
    if(filters.itemIdSelected === 'mp'){        //Mantenedor de Proveedores
        return (
            <>
                <input name="recordText" {...frmRecord.register('recordText')}/>
                <input type='submit'></input>
            </>
        )
    }
    if(filters.itemIdSelected === 'mu'){        //Mantenedor de Usuarios
        return (
            <>
                <input name="recordText" {...frmRecord.register('recordText')}/>
                <input type='submit'></input>
            </>
        )
    }
    return (
        <>
            <h2>Mantenedor no encontrado</h2>
            {filters.itemIdSelected}
        </>
    )
}

export default function FormRecord({frmRecord, openDialog, setOpenDialog}){
    const { record } = useRecords()
    const { filters } = useFilters()

    const onSubmit = (data) => {        
        console.log('recordcomponent',data);
        frmRecord.reset()
        frmRecord.clearErrors()        
        //setAdjuntos(REQ_Adjuntos)
        //setFilesList([])
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
                            <FormMatainer frmRecord={frmRecord} record={record} filters={filters} />
                    </form>
                </section>
            }{
                openDialog?.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}