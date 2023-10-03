/* eslint-disable react/prop-types */
import { RequerimientoItem } from "./RequerimientoItem.jsx";

export default function Requerimiento({item, showDia}){
    console.log('Requerimiento')
    return(
      <>
        {item.map((req) => (
          <RequerimientoItem key={req.DRE_Id} req={req} showDia={showDia} />
        ))}
      </>
    )
}