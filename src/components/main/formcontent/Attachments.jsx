/* eslint-disable react/prop-types */
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListDivider from '@mui/joy/ListDivider';

import { DeleteFileIcon, OpenFolderIcon, PrinterIcon, SaveAllIcon, SaveAsIcon, TypeDoc } from '../../../utils/icons.jsx';

const Adjuntos = ({file, selected, setSelected, setPreview, setAdjuntos, setFilesList}) => {        
    const HandleClickFile = (file) =>{
        setSelected(file)
        if(file.extension === 'docx' || file.extension === 'pptx' ||  file.extension === 'xlsx') return
        setPreview(true)        
    }

    const handleEliminarClick = (file) => {
        setAdjuntos((prevAdjuntos) =>
          prevAdjuntos.filter((a) => a !== file)
        );        
        setFilesList((prevFilesList) =>
          prevFilesList.filter((f) => f.name !== file.nombre)
        );
    };    

    const handlePreview = (file) => {
        if(file.extension === 'docx' || file.extension === 'pptx' ||  file.extension === 'xlsx') return
        setSelected(file)        
        setPreview(true)
    }

    return(
        <>
            <div key={file.id} className='flex items-center relative overflow-hidden z-50 elmadj' id={file.id}>
                <div className={`dark:border-[#5f5f5f] border-[#b9b9b9] p-1 dark:bg-[#363636] hover:bg-[#cde6f7] hover:cursor-pointer border-r-0 z-0 w-full h-full flex border hover:dark:border-[#a8a8a8] ${selected?.nombre === file.nombre ? 'bg-[#b1d6f0] dark:bg-[#666666] dark:hover:bg-[#4a4a4a] dark:border-[#a8a8a8]':'dark:hover:bg-[#4a4a4a]'} peer/adjunto`}
                onClick={() => HandleClickFile(file)}>
                    {
                        file.thumbail ?
                            <span className='min-w-[2.25rem] min-h-[2.25rem] flex items-center'>
                                <img src={file.thumbail} className='h-9 w-9' />
                            </span>
                        :   
                        <span className='w-9 h-9'>
                            <TypeDoc typeDoc={file.extension} />
                        </span>
                    }
                    <div className='grid'>
                        <span className='text-xs font-normal leading-tight w-auto px-2 truncate'>{file.nombre}</span>
                        <span className='text-xs font-normal leading-tight w-fit px-2'>Tamaño: {file.tamano}</span>
                    </div>
                </div>
                <Dropdown>
                    <MenuButton className={`dark:hover:!bg-[#444444] p-2 pt-[6px] pb-[6px]" !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 !pb-1.5 dark:!text-stone-100 !text-stone-500 !font-thin  h-full w-5 right-0 dark:!bg-[#363636] !border-[#b9b9b9] !border dark:!border-[#5f5f5f] hover:!bg-[#cde6f7] z-20 !border-l-0 !items-center !align-middle !justify-center flex peer-hover/adjunto:dark:!border-[#a8a8a8] ${selected?.nombre === file.nombre ? '!bg-[#b1d6f0] dark:!bg-[#666666] dark:hover:!bg-[#666666] dark:!border-[#a8a8a8]':'dark:hover:!bg-[#4a4a4a] !bg-[#fdfdfd]'}`}>
                    <KeyboardArrowDownIcon/>
                    </MenuButton>
                    <Menu placement="bottom-end" className="!py-2 !border-[#e1dfdd] dark:!border-[#8a8886] !bg-[#ffffff] dark:!bg-[#323130] !border !rounded-none dark:!text-stone-100 !text-stone-500 !m-h-min"> {
                        (file.extension !== 'docx' && file.extension !== 'pptx' &&  file.extension !== 'xlsx') &&       
                            <>                                                    
                                <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => handlePreview(file)} >
                                    <ListItemDecorator></ListItemDecorator>Vista Previa                   
                                </MenuItem>
                                <ListDivider/>
                            </>
                        }
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('abrir ' + file.id)} >
                            <ListItemDecorator><OpenFolderIcon styles='w-[18px] h-[18px] !ml-0'/></ListItemDecorator>Abrir                  
                        </MenuItem>
                        <ListDivider className="!pl-2"/>
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('Impresión rápida ' + file.id)} >
                            <ListItemDecorator><PrinterIcon styles="w-[24px] h-[24px] !-ml-1" strokeWidth='2.75'/></ListItemDecorator>Impresión rápida                  
                        </MenuItem>{
                        !file?.upload  &&
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('Guardar como ' + file.id)} >
                                <ListItemDecorator><SaveAsIcon styles="!ml-5"/></ListItemDecorator>Guardar como                  
                            </MenuItem>
                        }
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('Guardar como ' + file.id)} >
                            <ListItemDecorator><SaveAllIcon styles='h-5 w-5 ml-2' strokeWidth={1.75}/></ListItemDecorator>Guardar todos los adjuntos                  
                        </MenuItem>{
                        file?.upload  &&
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={()=>handleEliminarClick(file)} >
                                <ListItemDecorator><DeleteFileIcon styles='h-5 w-5 text-red-600' strokeWidth={2} /></ListItemDecorator>Quitar todos los adjuntos                  
                            </MenuItem>
                        }
                    </Menu>   
                </Dropdown>
            </div>                
                  
        </>
    )
}

const handleNotDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
    return false;
}

export default function Attachments({adjuntos, setAdjuntos, selected, setSelected, setPreview, setFilesList, filesList}){
    //const { REQ_Adjuntos } = formulario;
    //const [adjuntos, setAdjuntos] = useState(REQ_Adjuntos);
    console.log('Adjuntos',filesList)
    return(
        <div className=' max-h-28 overflow-y-auto py-0 pr-2 relative z-10' onDragOver = {handleNotDragOver}>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-1">
            {
                adjuntos.map((file, index) => {
                    return (                        
                        <Adjuntos file={file} key={index} selected={selected} setSelected={setSelected} setPreview={setPreview} setAdjuntos={setAdjuntos} setFilesList={setFilesList} filesList={filesList}/>
                    )}
                )
            }
            </div>
        </div>
    )
}