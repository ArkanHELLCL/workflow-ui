/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFilters } from '../../hooks/useFilters.jsx';
import { useRecords } from '../../hooks/useRecords.jsx';
import ConfirmationDialog from './ConfirmationDialog.jsx';
import { useSnackbar } from 'notistack';
import { useEffect, useRef } from 'react';
import { registros } from '../../mocks/registrosM.json'

function FormMatainer ({frmRecord, record, filters}){   
    const fields = registros.filter(reg => reg.id === filters.itemIdSelected)[0].fields
    //console.log('fileds',fileds, registros) 
    if(filters.itemIdSelected === 'mp'){        //Mantenedor de Proveedores
        const fieldsMP = fields.filter(fld => parseInt(fld.PRO_Id) === parseInt(record?.record?.Id))[0]
        //console.log('fieldsMP',fieldsMP, record)
        return ( 
            fieldsMP ?        
            <>
                <input name="recordTextProveedor" {...frmRecord.register('recordTextProveedor')}/>
                <input type='submit'></input>
            </> :
            <h2>Registro no encontrado : {record?.record?.Id}</h2>            
        )
    }
    if(filters.itemIdSelected === 'mu'){        //Mantenedor de Usuarios
        return (
            <>
                <input name="recordTextUusuario" {...frmRecord.register('recordTextUusuario')}/>
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