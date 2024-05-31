/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { RequerimientoItem } from "./RequerimientoItem.jsx";
import Loading from "./Loading.jsx";

export default function Requerimiento({item, showDia}){
  return(
    <Suspense fallback={<Loading />}>
      {item && item.map((req) => (          
          <RequerimientoItem key={req.DRE_Id} req={req} showDia={showDia} />          
      ))}
    </Suspense>
  )
}