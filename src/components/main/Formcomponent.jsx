/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useRequest } from '../../hooks/useRequest.jsx';
import { usePreview } from '../../hooks/usePreview.jsx';
import { useFilters } from '../../hooks/useFilters.jsx';
import { useAttach } from '../../hooks/useAttach.jsx';
import {    NoData, 
            Header,
            Files,
            Inputs,
            Preview
        } from './formcontent';
import { formulario } from'../../mocks/formulario.json'
import { formulario as formularioMant } from '../../mocks/formularioMant.json';
import MPMant from './maintainer/proveedorMant.jsx'
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function Formcomponent({frmRequest, frmRecord, filesList, setFilesList}){    
    const { request } = useRequest()
    const { filters } = useFilters()
    const { preview, setPreview } = usePreview()
    const { setAdjuntos } = useAttach()    
    const [dropEnter, setDropEnter] = useState(false);
    const [form, setForm] = useState()
    const [campos, setCampos] = useState([])

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

    useEffect(() => {
        const campos = formularioMant.filter(item => item.id === filters.itemIdSelected)[0]?.FOR_Campos
        setCampos(campos)        
    },[filters.itemIdSelected])


    const handleOnClick = () => {
        setPreview({
            state:false,
            obj:null,
            selected:preview.selected
        })        
    }

    return(
        <>
            {
                request && form &&
                <section id="contentForm" className={`pl-4 pt-1 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1${dropEnter ? ' dark:bg-[#1c1c1c]' : ''}`}>
                    <div className={`h-full w-full ${preview.state && preview?.selected!==null ? 'datapreview' : preview.state && preview.obj ? 'dataMantform' : 'dataform'} `}>
                        <Header formulario={form} />
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
                                    <MPMant frmRecord={frmRecord} record={null} mant={filters.itemIdSelected} campos={campos} singleButton={true} />   
                                </>
                        }{
                            preview.state && preview?.selected!==null &&
                                <Preview />
                        }
                    </div>
                </section>
            }{  !form &&
                    <NoData />
            }
        </>
    )
}