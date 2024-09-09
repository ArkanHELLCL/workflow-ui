/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../hooks/useFilters.jsx";
import InputList from "./maintainer/inputscomponents/inputList.jsx";
import usuarios from "../../mocks/usuarios.json";
import Slide from '@mui/material/Slide';
import InputReportButton from "./reports/InputReportButton.jsx";
import ReportFilters from "./ReportFilters.jsx";
import { useEffect } from "react";

export default function ListaRegReportes({frmReport}) {
    const { filters } = useFilters()
    useEffect(() => {
        frmReport.reset()
    }, [filters.itemIdSelected])

    return (
        <>
            <ReportFilters frmRecord={frmReport} name='REP_Fecha' isRequired={true} label='Selecciona fecha ' errorMessage='Debes ingresar una fecha '/>{
                filters.itemIdSelected?.toUpperCase() === 'RU' ? (
                    <>
                        <Slide in={true} timeout={300} mountOnEnter unmountOnExit direction='up'>
                        <div>
                            <InputList frmRecord={frmReport} name='USR_Id' dataOptions={usuarios} className='w-full !px-2 !py-2' isRequired={true} label='Usuario Creador' errorMessage='Debes ingresar un usuario'/>
                        </div>
                        </Slide>
                        <InputReportButton />
                    </>
                ) 
                : filters.itemIdSelected?.toUpperCase() === 'RO' ? ( 
                    <>
                        <Slide in={true} timeout={300} mountOnEnter unmountOnExit direction='up'>
                        <div>
                            <InputList frmRecord={frmReport} name='USR_Id' dataOptions={usuarios} className='w-full !px-2 !py-2' isRequired={true} label='Usuario Creador' errorMessage='Debes ingresar un usuario'/>
                        </div>
                        </Slide>
                        <InputReportButton />
                    </>
                ) :null
            }
        </>
    )
}