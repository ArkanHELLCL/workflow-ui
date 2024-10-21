/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { RequerimientoItem } from "./RequerimientoItem.jsx";
import Loading from "../../../utils/Loading.jsx";

export default function Requerimiento({item, showDia, showYear, frmRequest, frmMessages}){  
  return(
    <Suspense fallback={<Loading />}>
      {item && item.map((req) => (          
          <RequerimientoItem key={req.VRE_Id} req={req} showDia={showDia} showYear={showYear} frmRequest={frmRequest} frmMessages={frmMessages}/>          
      ))}
    </Suspense>
  )
}