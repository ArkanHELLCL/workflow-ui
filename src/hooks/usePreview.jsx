import { useContext } from 'react'
import { PreviewContext } from '../context/preview.jsx'

export function usePreview() {  
    const {preview, setPreview} = useContext(PreviewContext)    
    return {preview, setPreview}
}