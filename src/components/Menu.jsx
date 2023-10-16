/* eslint-disable react/prop-types */
import { MenuTree } from "../treeComponent/MenuTree.tsx"
import { flujos, mantenedores, reportes } from "../mocks/menu.json";
import { useFilters } from "../hooks/useFilters.jsx";
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading.jsx";
import { Spinner } from "@material-tailwind/react";

export default function Menu(){    
    const [loading, setLoading] = useState(true);

    const Menu = ({setLoading}) => {
        useEffect(() => {
            setLoading(false)
        }, [])        
        
        return (
            <>
                <MenuTree menu={bandejas} title="Bandejas"/>
                {
                    mantenedores.length > 0 ?
                        <MenuTree menu={mantenedores} title="Mantenedores"/>
                    : null
                    }
                    {
                    reportes.length > 0 ?
                        <MenuTree menu={reportes} title="Reportes"/>
                    : null
                }                
            </>
        )
      }

    const { filters } = useFilters()    
    let bandejas = flujos.filter(item => item.id === filters.flujo)[0].bandejas
    
    return (
        <div className="px-4 lstmnu relative">            
            {loading ? (
            <span className="absolute left-[50%] top-[50%]">
                <Spinner />
            </span>): null
            }
            <Suspense fallback={<Loading />}>
                <Menu setLoading={setLoading}/>
            </Suspense>                
        </div>
    )
}