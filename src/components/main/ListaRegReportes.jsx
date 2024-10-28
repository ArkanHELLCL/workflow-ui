/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useFilters } from "../../hooks";
import { ReportFilters } from "./ReportFilters.jsx";
import Slide from '@mui/material/Slide';
import Inputs from './formcontent/Inputs.jsx';
import InputReportButton from "./reports/InputReportButton.jsx";
import { formulario } from '../../mocks/formularioRep.json';

export default function ListaRegReportes({frmReport}) {
    const { filters } = useFilters()
    const [campos, setCampos] = useState([])
    
    useEffect(() => {
        frmReport.reset()
    }, [filters.itemIdSelected])

    useEffect(() => {
        const campos = formulario.filter(item => item.id === filters.itemIdSelected)[0]?.FOR_Campos
        setCampos(campos)    
    },[formulario, filters.itemIdSelected])

    return (
        <>
            <ReportFilters frmRecord={frmReport} name='REP_Fecha' isRequired={true} label='Selecciona fecha ' errorMessage='Debes ingresar una fecha '/>{
                filters.itemIdSelected?.toUpperCase() === 'RU' ? (
                    <>
                        <Slide in={true} timeout={300} mountOnEnter unmountOnExit direction='up'>
                            <div className="pl-3">
                                <Inputs frmRequest={frmReport} campos={campos} />
                            </div>
                        </Slide>
                        <InputReportButton />
                    </>
                ) 
                : filters.itemIdSelected?.toUpperCase() === 'RO' ? ( 
                    <>
                        <Slide in={true} timeout={300} mountOnEnter unmountOnExit direction='up'>
                            <div className="pl-3">
                                <Inputs frmRequest={frmReport} campos={campos} />
                            </div>
                        </Slide>
                        <InputReportButton />
                    </>
                ) :null
            }
        </>
    )
}