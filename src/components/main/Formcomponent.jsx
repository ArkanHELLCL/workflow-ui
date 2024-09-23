/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from "react";
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
import Button from '@mui/material/Button';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid/locales';

function PreviewObj({preview, filters, request, frmRecord, campos}){
    return(
        preview.obj === 'X1' &&
        <>
            <div className="frmmanttitle">
                <h2 className="font-thin text-xl">Mantenedor de proveedores</h2>
                <h2 className="font-thin text-base border border-b border-t-0 border-r-0 border-l-0 dark:border-stone-700 pb-2">Ingreso unitario para formulario de {request?.request?.FLU_Descripcion}</h2>
            </div>
            <MPMant frmRecord={frmRecord} record={null} mant={filters.itemIdSelected} campos={campos} singleButton={true} />   
        </>
    )
}

export default function Formcomponent({frmRequest, frmRecord, filesList, setFilesList}){    
    const { request } = useRequest()
    const { filters } = useFilters()
    const { preview, setPreview } = usePreview()
    const { setAdjuntos } = useAttach()    
    const [dropEnter, setDropEnter] = useState(false);
    const [form, setForm] = useState()
    const [campos, setCampos] = useState([])
    const prefersDarkMode = filters.darkMode
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
          },
          typography: {
            allVariants: {
              fontFamily: "Segoe UI Web (West European) ,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
              textTransform: 'none',
              lineHeight: "1.5rem",
              fontWeight: 400,
              fontSize: '0.75rem'
            },
          },
          components: {
            MuiButton: {
              defaultProps: {
                palette: "palette"
              },
              styleOverrides: {
                root: {
                  padding: ".5rem 1.5rem"
                }
              }
            }
          }
        },
      esES),
      [prefersDarkMode],
    );

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

    function PreviewButtonBack(){
        return(
            <Button variant="text" startIcon={<TrendingFlatIcon className="rotate-180" />} className={`hover:dark:!bg-[#505050] hover:!bg-[#e6f2fa] !border-0 dark:!text-stone-100 !text-stone-500 !text-xs !font-base !py-1 !rounded-none !ps-1 !pe-1 prevtitle w-fit ${preview.state && preview?.obj ? 'frmmantbackbuttom': '' }`} onClick={handleOnClick}>
                Volver al formulario
            </Button>
        )
    }

    return(
        <ThemeProvider theme={theme}>
            {
                request && form &&
                <section id="contentForm" className={`pl-4 pt-1 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1${dropEnter ? ' dark:bg-[#1c1c1c]' : ''}`}>
                    <div className={`h-full w-full ${preview.state && preview?.selected!==null ? 'datapreview' : preview.state && preview.obj ? 'dataMantform' : 'dataform'} `}>
                        {
                            !preview.state &&
                                <>
                                    <Header formulario={form} />
                                    <Files setFilesList={setFilesList} filesList={filesList}/>
                                    <Inputs dropEnter={dropEnter} setDropEnter={setDropEnter} campos={form.FOR_Campos} frmRequest={frmRequest} filesList={filesList} setFilesList={setFilesList}/>
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
            }{  !form &&
                    <NoData />
            }
        </ThemeProvider>
    )
}