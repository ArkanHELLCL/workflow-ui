/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useFilters, useRequest, useButtonsGroup } from '../../hooks';
import SenderData from './formcontent/header/SenderData.jsx';
import UpdateDate from './formcontent/header/UpdateDate.jsx';
import ButtonsActions from './messages/ButtonsActions.jsx';
import MessageBody from './messages/MessageBody.jsx';
import { formulario as formularioMant } from '../../mocks/formularioMant.json';

export default function FormMessages({frmMessages}){
    const { request } = useRequest()    
    const { filters } = useFilters()
    const [campos, setCampos] = useState([])
    const { grupos, setGrupos } = useButtonsGroup()

    useEffect(() => {
        const campos = formularioMant.filter(item => item.id === filters.itemIdSelected)[0]?.FOR_Campos        
        const grp = formularioMant.filter((item) => item.id === filters.itemIdSelected)[0]?.FOR_Botones                
        setGrupos(grp)
        setCampos(campos)

        frmMessages.clearErrors()
    },[filters.itemIdSelected, formularioMant, request])

    useEffect(() => {
        frmMessages.clearErrors()
    }, [])
    
    return(        
        request  &&
        <section id="contentForm" className={`pl-4 h-full w-full relative overflow-hidden flex flex-col z-50 columns-1`}>                    
            <div className="h-full w-full dataMessages">
                <SenderData />
                <UpdateDate />
                <ButtonsActions grupos={grupos}/>
                <MessageBody body={request?.request?.REQ_Descripcion} frmMessages={frmMessages}/>
            </div>
        </section>        
    )
}