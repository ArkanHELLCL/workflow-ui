/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useRequest } from '../../hooks/useRequest.jsx';
import { usePreview } from '../../hooks/usePreview.jsx';
import { useAttach } from '../../hooks/useAttach.jsx';
import {    NoData, 
            Header,
            Files,
            Inputs,
            Preview
        } from './formcontent';
import ConfirmationDialog from './ConfirmationDialog.jsx';
//import { useSnackbar } from 'notistack';
import { formulario } from'../../mocks/formulario.json'

import MPMant from './maintainer/proveedorMant.jsx'
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function Formcomponent({frmRequest, frmRecord, filesList, setFilesList, openDialog, setOpenDialog}){    
    const { request } = useRequest()
    const { preview, setPreview } = usePreview()
    const { setAdjuntos } = useAttach()    
    const [dropEnter, setDropEnter] = useState(false);
    const [form, setForm] = useState()
    //const { enqueueSnackbar } = useSnackbar();
    //const formRef = useRef(null) 

    useEffect(() => {        
        let frm
        if(request?.request?.VFO_Id){
            frm = formulario.filter(item => item.VFO_Id === request?.request?.VFO_Id && item.Bandeja === request?.request?.Bandeja)
        }else{
            frm = formulario.filter(item => (item.VFO_Id === 0 && item.FLU_Id === request?.request?.FLU_Id && item.Bandeja === request?.request?.Bandeja))   
        }        
        const adjuntos = frm[0]?.REQ_Adjuntos ? frm[0]?.REQ_Adjuntos : []
        frmRequest.clearErrors()
        setAdjuntos(adjuntos)
        setForm(frm[0])
        
    },[formulario, request])

    /*const onSubmitRequest = (data) => {
        console.log('formcomponent',data);
        enqueueSnackbar('Los datos han sifo grabados exitosamente! ' + frmRequest.formState.submitCount , { variant : "success", anchorOrigin : { horizontal: "right", vertical: "bottom"} })
        frmRequest.clearErrors()
        frmRequest.reset()
        console.log(frmRequest.formState.isSubmitted)
        setAdjuntos(form.REQ_Adjuntos)
        setFilesList([])
        setPreview({
            state:false,
            obj:null,
            selected:null
        }) 
    };*/

    const handleOnClick = () => {
        setPreview({
            state:false,
            obj:null,
            selected:preview.selected
        })        
    }

    /*useEffect(() => {    
        if(openDialog?.option && openDialog?.type === 'submit' && openDialog.frmname === form?.name){
            formRef.current.requestSubmit()            
            enqueueSnackbar('Operación realizada correctamente!', { variant : "success" , anchorOrigin : { horizontal: "right", vertical: "bottom"}} )
        }
        setOpenDialog({...openDialog, option:false})
    }
    ,[openDialog?.option])*/

    //console.log('formcomponent',frmRecord.formState.isSubmitting, frmRecord.formState.isSubmitted, frmRecord.formState.isValid, frmRecord.formState.submitCount, frmRecord.formState.isValidating)

    //detectandoo error al submitir el formulario
    
    //frmRequest.formState.isValid && frmRequest.formState.isSubmitted ? 
    //null :


    /*!frmRequest.formState.isValid && frmRequest.formState.submitCount >= 0 && frmRequest.formState.isSubmitted ?  
        enqueueSnackbar('Debes corregir los errores antes de grabar! ' + frmRequest.formState.submitCount, { variant : "error", anchorOrigin : { horizontal: "right", vertical: "bottom"} }) 
        : null */

    return(
        <>
            {
                request && form &&
                <section id="contentForm" className={`pl-4 pt-1 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1${dropEnter ? ' dark:bg-[#1c1c1c]' : ''}`}>
                    <div className={`h-full w-full ${preview.state && preview?.selected!==null ? 'datapreview' : preview.state && preview.obj ? 'dataMantform' : 'dataform'} `}>
                        <Header formulario={form} setOpenDialog={setOpenDialog} />
                        {
                            !preview.state && !preview.obj &&
                                <>
                                    <Files setFilesList={setFilesList} filesList={filesList}/>
                                    <Inputs dropEnter={dropEnter} setDropEnter={setDropEnter} campos={form.FOR_Campos} frmRequest={frmRequest} filesList={filesList} setFilesList={setFilesList}/>
                                </>
                        }{
                            preview.state && preview.obj === 'X1' &&
                                <>
                                    <Dropdown>
                                        <MenuButton startDecorator={<TrendingFlatIcon className="rotate-180" />} className="hover:dark:!bg-[#505050] hover:!bg-[#e6f2fa] !border-0 dark:!text-stone-100 !text-stone-500 !text-xs !font-base !py-1 !rounded-none !ps-1 !pe-1 prevtitle w-fit frmmantbackbuttom" onClick={handleOnClick}>
                                        Volver al formulario
                                        </MenuButton>
                                    </Dropdown>
                                    <div className="frmmanttitle">
                                        <h2 className="font-thin text-xl">Mantenedor de proveedores</h2>
                                        <h2 className="font-thin text-base border border-b border-t-0 border-r-0 border-l-0 dark:border-stone-700 pb-2">Ingreso unitario para formulario de {request?.request?.FLU_Descripcion}</h2>
                                    </div>
                                    <MPMant frmRecord={frmRecord} singleButton={true} />   
                                </>
                        }{
                            preview.state && preview?.selected!==null &&
                                <Preview />
                        }
                    </div>
                </section>
            }{  !form &&
                    <NoData />
            }{
                openDialog?.open &&
                    <ConfirmationDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
            }  
        </>
    )
}