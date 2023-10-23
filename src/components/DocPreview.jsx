export function DocPreview() {
    
    const handleNotDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "none";
        return false;
    }
    
  return (
    <div className='pl-4 h-full pt-[10px] w-full relative overflow-hidden flex flex-col z-50' onDragOver={handleNotDragOver}>              
        

          
        
    </div>
  )
}