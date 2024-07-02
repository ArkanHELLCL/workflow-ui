/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';

export default function FormInputFile ({ value, onChange }) {
    const inputRef = useRef();
    const [files, setFiles] = useState([]);
  
    // Handle reset
    useEffect(() => {
      if (!value) {
        setFiles([]);
      }
    }, [value]);
  
    /*const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const { files } = e.dataTransfer;
      // Only allows 1 file at a time
      if (files?.length > 1) return;
      setFiles(files);
      onChange(files);
      console.log(`dropped files`, files);
    };*/
  
    const handleChange = (e) => {
      if (onChange) {
        onChange(e.target.files);
      }
      setFiles(e.target.files);
    };
  
    return (
      <>        
        <input ref={inputRef} type="file" id="file" onChange={handleChange} />        
      </>
    );
}