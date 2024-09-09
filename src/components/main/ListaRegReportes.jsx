/* eslint-disable react/prop-types */
import { useFilters } from "../../hooks/useFilters.jsx";
import InputList from "./maintainer/inputscomponents/inputList.jsx";
import usuarios from "../../mocks/usuarios.json";
import Slide from '@mui/material/Slide';
import InputReportButton from "./reports/InputReportButton.jsx";
import ReportFilters from "./ReportFilters.jsx";

export default function ListaRegReportes({frmReport}) {
    const { filters } = useFilters()
    return (
        <>
            <ReportFilters frmRecord={frmReport} name='REP_Fecha' isRequired={true} label='Selecciona fecha ' errorMessage='Debes ingresar una fecha '/>{
                filters.itemIdSelected?.toUpperCase() === 'RU' ? (
                <>
                    <Slide in={true} timeout={300} mountOnEnter unmountOnExit direction='up'>
                    <div>
                        <InputList frmRecord={frmReport} name='USR_Id' dataOptions={usuarios} className='col-span-12 px-2 py-2' isRequired={true} placeholder='Revisor' label='Usuario Creador' errorMessage='Debes ingresar un usuario'/>
                    </div>
                    </Slide>
                    <InputReportButton />
                </>
                ) 
                : null
            }
        </>
    )
}