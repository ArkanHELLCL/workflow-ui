/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { useRequest } from '../hooks/useRequest.jsx';
import { useRecords } from '../hooks/useRecords.jsx';
import { useReports } from '../hooks/useReports.jsx';
import { usePreview } from "../hooks/usePreview.jsx";
import { InBoxIcon, ReportIcon, TableIcon, MyMessageIcon } from "../utils/icons.jsx";

export default function SideBar(){
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()
    const { setRecord } = useRecords()    
    const { setReport } = useReports()
    const { setPreview } = usePreview()
    
    useEffect(() => {                
        setRequest(null)
        setRecord(null)
        setReport(null)
        setPreview(null)

    }, [filters.itemIdSelected])
    
    function handleClickItem(id) {
        setFilters(prevState => ({
            ...prevState,         
            itemIdSelected: id,
            loading: id !== filters.itemIdSelected ? true : false
        }))        
    }

    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }    

    return(
        <section className="h-full dark:bg-[#363636] bg-[#ffffff] border-r-[1px] border-[#d4d4d4] dark:border-[#484644] transition-color delay-75 z-20" onDragOver={handleNotDragOver} id="sidebar">
        <section className="flex flex-col items-start gap-3 h-full pt-1 pr-1 pl-2 relative dark:text-gray-100 text-stone-500 fill-stone-500 dark:fill-stone-100" onDragOver={handleNotDragOver}>
            <div className={`w-[2px] h-[36px] absolute left-[6px] bg-[#58b8fe] mt-[2px] transition-all duration-300 ${filters.itemIdSelected.charAt(0).toLowerCase()==='b' ? ' translate-y-[2px]': filters.itemIdSelected.charAt(0).toLowerCase()==='j' ? ' translate-y-[50px]' : filters.itemIdSelected.charAt(0).toLowerCase()==='r' ? ' translate-y-[106px]': filters.itemIdSelected.charAt(0).toLowerCase()==='m' ? ' translate-y-[156px]' : ' translate-y-[2px]'}`}></div>            
            <ul className="flex flex-col w-full h-full gap-2">
                <li>
                    <div className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "b" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2 cursor-pointer`} onClick={()=>handleClickItem("b")} title="Bandejas"> 
                        <InBoxIcon styles="w-6 h-6" strokeWidth=""/>   
                    </div>             
                </li>
                <li>
                    <div className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "j" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2 cursor-pointer`} onClick={()=>handleClickItem("j")} title="Mensajes"> 
                        <MyMessageIcon styles="w-8 h-8" strokeWidth=""/>   
                    </div>             
                </li>                                       
                <li>
                    <div className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "r" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2 cursor-pointer`} onClick={()=>handleClickItem("r")} title="Reportes">
                        <ReportIcon styles="w-7 h-7" strokeWidth={2}/>
                    </div>                        
                </li>
                <li>
                    <div className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "m" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2 cursor-pointer`} onClick={()=>handleClickItem("m")} title="Mantenedores">
                        <TableIcon styles="w-6 h-6" strokeWidth=""/>
                    </div>
                </li>     
            </ul>
        </section>
        </section>
    )
}