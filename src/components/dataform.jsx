/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from "../hooks/useRequest.jsx";
import { useRecords } from "../hooks/useRecords.jsx";
import FormRecord from "./main/FormRecord.jsx";
import Formcomponent from "./main/Formcomponent.jsx";
import FormReport from "./main/FormReport.jsx";

export default function DataForm({frmRequest, frmRecord, frmReport, filesList, setFilesList, dataReport, loading}) {
    const { filters } = useFilters()
    const { request } = useRequest()
    const { record } = useRecords()
    //const report = true
    return(
      <section id="formwf" className="bg-[#ffffff] dark:bg-transparent">
        <div className='dark:text-stone-100 text-stone-500 dark:border-[#353535] border-[#d4d4d4] w-full border-r h-full overflow-auto relative'>{
            filters.itemIdSelected?.charAt(0).toUpperCase() === 'B' ? 
              request ? ( 
                <Formcomponent frmRequest={frmRequest} frmRecord={frmRecord} filesList={filesList} setFilesList={setFilesList} />
              ) : ( 
                <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                    <div className='w-full h-full flex justify-center align-middle items-center'>
                        <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un requerimiento para ver<br/> los datos del formulario</span>
                    </div>
                </div>
              ) :
                filters.itemIdSelected?.charAt(0).toUpperCase() === 'M' ? 
                  record ? (
                      <FormRecord frmRecord={frmRecord} />                      
                  ) : (                
                    <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                        <div className='w-full h-full flex justify-center align-middle items-center'>
                            <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un registro para ver<br/> los datos en el mantenedor</span>
                        </div>
                    </div>
                  ) :
                    filters.itemIdSelected?.charAt(0).toUpperCase() === 'R' ? 
                      dataReport ? (
                          <FormReport dataReport={dataReport} loading={loading}/>                      
                      ) : (                      
                        <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                            <div className='w-full h-full flex justify-center align-middle items-center'>
                                <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un informe para ver<br/> los datos del reporte</span>
                            </div>
                        </div>
                        ) : 
                        filters.itemIdSelected?.charAt(0).toUpperCase() === 'J' ? (                      
                          <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                              <div className='w-full h-full flex justify-center align-middle items-center'>
                                  <span className='text-[#2c87d2] text-2xl text-balance text-center'>Selecciona un mensaje para ver<br/> el contenido y sus acciones</span>
                              </div>
                          </div>
                          ) : (
                          <div className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 `}>
                              <div className='w-full h-full flex justify-center align-middle items-center'>
                                  <span className='text-[#2c87d2] text-2xl text-balance text-center'>Menú no especificado</span>
                              </div>
                          </div>
                        )
          }
          </div>
      </section>
    )
}