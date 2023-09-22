/* eslint-disable react/prop-types */
import { systems } from "../mocks/flows.json"
import { ItemsMenu } from "./ItemsMenu"
const { flows, Mantenedores, Reportes } = systems

export function FlowsMenu({menu}){
    return (
            menu === 0 ? <ItemsMenu items={flows}/> : 
            menu === 1 ? <ItemsMenu items={Mantenedores}/> : 
            menu === 2 ? <ItemsMenu items={Reportes}/> : null
       
    )
}