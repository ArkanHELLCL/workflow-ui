/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useFilters, useRequest, useRecords, useReports, usePreview, useUserData } from "../hooks";
import { InBoxIcon, ReportIcon, TableIcon, MyMessageIcon } from "../utils/icons.jsx";

export default function SideBar(){
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()
    const { setRecord } = useRecords()    
    const { setReport } = useReports()
    const { setPreview } = usePreview()
    const { userdata } = useUserData()   

    const mantenedores = userdata?.treeMenu?.mantenedores
    const mensajes = userdata?.treeMenu?.mensajes
    const bandejas = userdata?.treeMenu?.flujos.filter(item => parseInt(item.id) === filters.flujo)[0].bandejas
    const reportes = userdata?.treeMenu?.flujos.filter(item => parseInt(item.id) === filters.flujo)[0].reportes
    
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
                <ul className="flex flex-col w-full h-full gap-2">{
                    bandejas &&
                        <li>
                            <div className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "b" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2 cursor-pointer`} onClick={()=>handleClickItem("b")} title="Bandejas"> 
                                <InBoxIcon styles="w-6 h-6" strokeWidth=""/>   
                            </div>             
                        </li>
                        }{
                        mensajes &&
                        <li>
                            <div className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "j" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2 cursor-pointer`} onClick={()=>handleClickItem("j")} title="Mensajes"> 
                                <MyMessageIcon styles="w-8 h-8" strokeWidth=""/>   
                            </div>             
                        </li>
                        }{
                        reportes &&                    
                        <li>
                            <div className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "r" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2 cursor-pointer`} onClick={()=>handleClickItem("r")} title="Reportes">
                                <ReportIcon styles="w-7 h-7" strokeWidth={2}/>
                            </div>                        
                        </li>
                        }{
                        mantenedores &&
                        <li>
                            <div className={`${filters.itemIdSelected.charAt(0).toLowerCase() === "m" ? 'dark:text-[#58b8fe] text-[#0173c6] ' : ''} dark:hover:text-white hover:text-black dark:hover:bg-[#0067b0] hover:bg-[#cde6f7] flex flex-col items-center py-2 cursor-pointer`} onClick={()=>handleClickItem("m")} title="Mantenedores">
                                <TableIcon styles="w-6 h-6" strokeWidth=""/>
                            </div>
                            <span>
                                <i data-icon-name="ArrowReplyRegularLight" aria-hidden="true" className="icon-373">
                                    <i className="s_cNr lightIcon--ArrowReplyRegular"></i>
                                </i>
                            </span>
                            <span>
                                <i data-icon-name="PersonFeedbackRegularLight" aria-hidden="true" className="icon-371">
                                    <i className="s_cNr lightIcon--PersonFeedbackRegular"></i>
                                </i>
                            </span>

                            <span>
                                <i data-icon-name="InboxRegular" aria-hidden="true" className="icon-371">
                                    <i className="s_cNr lightIcon--InboxRegular"></i>
                                </i>
                            </span>
                            <div className="___j5n0910 f16u1re feuyn0r"><i className="fui-Icon-font fui-Icon-filled jgnYx SuSxc ORnNd MgbmD ___1yriaci fjseox fne0op0 fg4l7m0 fmd4ok8 f303qgw f1sxfq9t" aria-hidden="true"></i><i className="fui-Icon-font fui-Icon-regular jgnYx SuSxc ORnNd MgbmD ___1sd6q6k f1w7gpdv fne0op0 fg4l7m0 fmd4ok8 f303qgw f1sxfq9t"  aria-hidden="true"></i></div>
                        </li>     
                    }
                </ul>
            </section>
        </section>
    )
}