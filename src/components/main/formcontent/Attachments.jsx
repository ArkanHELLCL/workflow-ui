/* eslint-disable react/prop-types */
import { useAttach } from '../../../hooks/useAttach.jsx';
import { usePreview } from '../../../hooks/usePreview.jsx';
import { useFilters } from '../../../hooks/useFilters.jsx';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { DeleteFileIcon, OpenFolderIcon, PrinterIcon, SaveAllIcon, SaveAsIcon, TypeDoc } from '../../../utils/icons.jsx';
import { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid/locales';

const Adjuntos = ({file, preview, setPreview, setAdjuntos, setFilesList}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const HandleClickFile = (file) =>{
        if(file.extension === 'docx' || file.extension === 'pptx' ||  file.extension === 'xlsx') return
        setPreview({
            state:true,
            obj:null,
            selected: file
        })        
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
        setPreview({
            state:true,
            obj:null,
            selected: file
        }) 
    }
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <>
            <div key={file.id} className='flex items-center relative overflow-hidden z-50 elmadj' id={file.id}>
                <div className={`${file.upload ? 'dark:border-[#2c87d2] border-[#2c87d2]' :'dark:border-[#5f5f5f] border-[#b9b9b9] hover:dark:border-[#a8a8a8]'} hover:bg-[#cde6f7] p-1 dark:bg-[#363636]  hover:cursor-pointer border-r-0 z-0 w-full h-full flex border ${preview?.selected?.nombre === file.nombre ? 'bg-[#b1d6f0] dark:bg-[#666666] dark:hover:bg-[#4a4a4a] dark:border-[#a8a8a8]':'dark:hover:bg-[#4a4a4a]'} peer/adjunto`}
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
                <Button className={`dark:hover:!bg-[#444444] !border-solid !transition-none p-2 pt-[6px] !min-w-0 !bg-transparent !rounded-none !m-0 !ps-2.5 !pe-2.5 !pb-1.5 dark:!text-stone-100 !text-stone-500 !font-base h-full w-5 right-0 dark:!bg-[#363636] ${file.upload ? 'dark:!border-[#2c87d2] !border-[#2c87d2]' :'dark:!border-[#5f5f5f] !border-[#b9b9b9] peer-hover/adjunto:dark:!border-[#a8a8a8]'} !border hover:!bg-[#cde6f7] z-20 !border-l-0 !items-center !align-middle !justify-center flex  ${preview?.selected?.nombre === file.nombre ? '!bg-[#b1d6f0] dark:!bg-[#666666] dark:hover:!bg-[#666666] dark:!border-[#a8a8a8]':'dark:hover:!bg-[#4a4a4a] !bg-[#fdfdfd]'}`}
                    id={"attach-menu-" + file.id}
                    aria-controls={open ? "attach-menu-" + file.id : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    title="Acciones para el adjunto">
                    <KeyboardArrowDownIcon/>
                </Button>
                <Menu placement="bottom-end"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'attach-button-' + file.id,
                    }}>{
                    (file.extension !== 'docx' && file.extension !== 'pptx' &&  file.extension !== 'xlsx') &&       
                        <>                                                    
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !px-10 dark:!text-stone-100 !text-stone-500 !py-0`} onClick={() => handlePreview(file)} >                                
                                <ListItemText>Vista Previa</ListItemText>                   
                            </MenuItem>
                            <Divider className='!ml-10 !my-1'/>
                        </>
                    }
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 dark:!text-stone-100 !text-stone-500 !py-0`} onClick={() => console.log('abrir ' + file.id)} >                        
                        <ListItemIcon className='!min-w-7'><OpenFolderIcon styles='w-[18px] h-[18px]'/></ListItemIcon>
                        <ListItemText>Abrir</ListItemText>
                    </MenuItem>
                    <Divider className='!ml-10 !my-1'/>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('Impresión rápida ' + file.id)} >                        
                        <ListItemIcon className='!min-w-7'><PrinterIcon styles="w-[24px] h-[24px] !-ml-1" strokeWidth='2.75'/></ListItemIcon>
                        <ListItemText>Impresión rápida</ListItemText>
                    </MenuItem>{
                    !file?.upload  &&
                        <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('Guardar como ' + file.id)} >                            
                            <ListItemIcon className='!min-w-7'><SaveAsIcon styles="!ml-5"/></ListItemIcon>
                            <ListItemText>Guardar como</ListItemText>
                        </MenuItem>
                    }
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={() => console.log('Guardar como ' + file.id)} >                        
                        <ListItemIcon className='!min-w-7'><SaveAllIcon styles='h-5 w-5 ml-2' strokeWidth={1.75}/></ListItemIcon>
                        <ListItemText>Guardar todos los adjuntos</ListItemText>
                    </MenuItem>{
                    file?.upload  &&
                        <>
                            <Divider className='!ml-10 !my-1'/>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} onClick={()=>handleEliminarClick(file)} >                            
                                <ListItemIcon className='!min-w-7'><DeleteFileIcon styles='h-5 w-5 text-red-600' strokeWidth={2} /></ListItemIcon>
                                <ListItemText>Quitar todos los adjuntos</ListItemText>                  
                            </MenuItem>
                        </>
                    }
                </Menu>                
            </div>                  
        </>
    )
}

const handleNotDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
    return false;
}

export default function Attachments({setFilesList, filesList}){
    const { filters } = useFilters(); 
    const prefersDarkMode = filters.darkMode
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
          },
          typography: {
            allVariants: {
              fontFamily: "Segoe UI Web (West European) ,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
              textTransform: 'none',
              lineHeight: "1.5rem",
              fontWeight: 400,
              fontSize: '0.75rem'
            },
          },
          components: {            
            MuiMenu: {
              styleOverrides: {
                paper: {
                  //backgroundColor: prefersDarkMode ? '#333333' : '#ffffff',
                  color: prefersDarkMode ? '#c5c5c5' : '#333333',
                  //boxShadow: prefersDarkMode ? '0 0 10px 0px #000000' : '0 0 10px 0px #000000',
                  borderRadius: '0px',
                  border: prefersDarkMode ? '1px solid #8a8886' : '1px solid #e1dfdd',
                },
              },
            }
          }
        },
      esES),
      [prefersDarkMode],
    );
    const {adjuntos, setAdjuntos} = useAttach()
    const {preview, setPreview} = usePreview()
    
   
    return(
        <ThemeProvider theme={theme}>
            <div className='max-h-28 overflow-y-auto py-0 pr-2 relative z-10 frmatachment' onDragOver = {handleNotDragOver}>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-1">
                {
                    adjuntos?.map((file, index) => {
                        return (                        
                            <Adjuntos file={file} key={index} preview={preview} setPreview={setPreview} setAdjuntos={setAdjuntos} setFilesList={setFilesList} filesList={filesList}/>
                        )}
                    )
                }
                </div>
            </div>
        </ThemeProvider>
    )
}