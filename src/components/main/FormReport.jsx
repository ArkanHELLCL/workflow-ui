/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useFilters } from '../../hooks/useFilters.jsx';
//import { useState } from 'react';
//import MPMant from './maintainer/proveedorMant.jsx';
import RUReport from './reports/diasusuarioReporte.jsx'

function FormReporter ({filters, dataReport, loading}){
    switch (filters.itemIdSelected) {
        case 'ru':  //Dias por usuario
            return <RUReport dataReport={dataReport} loading={loading}/>
        default:
            return (
                <>
                    <h2>Reporte no encontrado</h2>
                    {filters.itemIdSelected}
                </>
            )
    }
}

export default function FormReport({dataReport, loading}){
    const { filters } = useFilters()    

    return(        
        <section id="" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1`}>                    
            <div className="h-full w-full flex">
                <FormReporter filters={filters} dataReport={dataReport} loading={loading} />
            </div>
        </section>        
    )
}