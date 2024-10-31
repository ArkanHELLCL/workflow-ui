/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useRequest, usePreview, useFilters, useAttach, useButtonsGroup, useAuth } from '../../hooks';
import { NoData, Header, Files, Inputs, Preview } from './formcontent';
import MPMant from './maintainer/proveedorMant.jsx'
import Button from '@mui/material/Button';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
//import { formulario } from'../../mocks/formulario.json'
import { formulario as formularioMant } from '../../mocks/formularioMant.json';
import { Constants } from "../../utils/const.jsx";

function PreviewObj({preview, filters, request, frmRecord, campos}){
    return(
        preview.obj === 'X1' &&
        <>
            <div className="frmmanttitle">
                <h2 className="font-thin text-xl">Mantenedor de proveedores</h2>
                <h2 className="font-thin text-base border border-b border-t-0 border-r-0 border-l-0 dark:border-stone-700 pb-2">Ingreso unitario para formulario de {request?.request?.FLU_Descripcion}</h2>
            </div>
            <MPMant frmRecord={frmRecord} record={null} mant={filters.itemIdSelected} campos={campos} singleButton={true} formaction={'/mpmant/'}/>   
        </>
    )
}

export default function Formcomponent({frmRequest, frmRecord, filesList, setFilesList}){    
    const { request } = useRequest()
    const { filters, setFilters } = useFilters()
    const { preview, setPreview } = usePreview()
    const { setAdjuntos } = useAttach()    
    const { setAuth } = useAuth()
    const [dropEnter, setDropEnter] = useState(false);    
    const [campos, setCampos] = useState([])
    const { setGrupos } = useButtonsGroup()
    const [formulario, setFormulario] = useState([])
    const { host, fecthParams : params } = Constants()
    const [error, setError] = useState(null)

    useEffect(() => {
        let url = ''
        if(filters.itemIdSelected=== 'be')
            url = '/api/bandejas/entrada/'
        if(filters.itemIdSelected=== 'bs')
            url = '/api/bandejas/salida/'
        if(filters.itemIdSelected=== 'bo')
            url = '/api/bandejas/otros/'
        if(filters.itemIdSelected=== 'ba')
            url = '/api/bandejas/archivados/'
        if(filters.itemIdSelected=== 'bf')
            url = '/api/bandejas/finalizados/'
        if(filters.itemIdSelected=== 'bnc')
            url = '/api/bandejas/antiguos/compras/'
        if(filters.itemIdSelected=== 'bnw')
            url = '/api/bandejas/antiguos/workflowv1'
            
        const endpoint = host + url + request?.request?.DRE_Id        

        fetch(endpoint, params)
        .then((response) => response.json())
        .then((data) => {            
            if(data.error){                
                if(parseInt(data.error) === 401){
                    setAuth(false)
                }                
                throw new Error(data.message)
            }
            else{
                frmRequest.clearErrors()
                setFormulario(data)                
                setAdjuntos(data.adjuntos)
                setGrupos(data.botones)
                setCampos(data.campos)                
            }
        })
        .catch((error) => {
            console.log(error)
            setError(error)
        })
        
        setFilters(prevState => ({
            ...prevState,
            path: url?.replace('/api','')  + request?.request?.DRE_Id
        }))
    },[filters.itemIdSelected, formularioMant, request])    

    const handleOnClick = () => {
        setPreview({
            state:false,
            obj:null,
            selected:preview.selected
        })        
    }

    function PreviewButtonBack(){
        return(
            <Button variant="text" startIcon={<TrendingFlatIcon className="rotate-180" />} className={`hover:dark:!bg-[#505050] hover:!bg-[#e6f2fa] !border-0 dark:!text-stone-100 !text-stone-500 !text-xs !font-base !py-1 !rounded-none !ps-1 !pe-1 prevtitle w-fit ${preview.state && preview?.obj ? 'frmmantbackbuttom': '' }`} onClick={handleOnClick}>
                Volver al formulario
            </Button>
        )
    }

    return(
        <>
            {
                request && formulario &&
                <section id="contentForm" className={`pl-4 pt-1 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1${dropEnter ? ' dark:bg-[#1c1c1c]' : ''}`}>
                    <div className={`h-full w-full ${preview.state && preview?.selected!==null ? 'datapreview' : preview.state && preview.obj ? 'dataMantform' : 'dataform'} `}>
                        {
                            !preview.state &&
                                <>
                                    <Header />
                                    <Files setFilesList={setFilesList} filesList={filesList}/>{
                                        campos ?
                                            <Inputs dropEnter={dropEnter} setDropEnter={setDropEnter} campos={campos} frmRequest={frmRequest} filesList={filesList} setFilesList={setFilesList}/>
                                        :
                                        <div className="text-center flex justify-center lstRequestEmpty align-middle items-center h-full w-full !overflow-hidden">
                                            <span className='text-[#2c87d2] text-xl w-full'>Error : {error ? error : 'Sin informacón'}</span>
                                        </div>
                                    }
                                </>
                        }{
                            preview.state &&
                                <PreviewButtonBack />
                        }
                        {
                            preview.state && preview.obj &&
                                <PreviewObj preview={preview} filters={filters} request={request} frmRecord={frmRecord} campos={campos}/>
                        }{
                            preview.state && !preview.obj &&
                                <Preview />
                        }
                    </div>
                </section>
            }{  !formulario &&
                    <NoData />
            }
        </>
    )
}