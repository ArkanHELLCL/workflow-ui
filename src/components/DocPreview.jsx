import { useState } from 'react'

export function DocPreview() {
    
    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }

  return (
    <>
      
    </>
  )
}