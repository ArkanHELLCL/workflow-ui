/* eslint-disable react/prop-types */
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

export const ToastMessages = ({error, setError}) => {
    const { enqueueSnackbar } = useSnackbar();    
    useEffect(() => {        
        if(error){
            const {variant, message} = error
            enqueueSnackbar(message, { variant : variant, anchorOrigin : { horizontal: "right", vertical: "bottom"} })
            setError(null)
        }
    })

    return null
}