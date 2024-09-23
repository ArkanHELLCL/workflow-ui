/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../../../hooks/useFilters.jsx";
import { useRecords } from "../../../../hooks/useRecords.jsx";
import ListasDesplegable from "../../../../mocks/listadesplegables.json";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Check from '@mui/icons-material/Check'
import StraightIcon from '@mui/icons-material/Straight';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid/locales';
import { useEffect, useMemo, useState } from "react";

export default function MenuFiltersListaDes() {
    const { filters, setFilters } = useFilters()
    const { setRecord } = useRecords()
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
            MuiButton: {
                defaultProps: {
                  palette: "palette"
                },
                styleOverrides: {
                  root: {
                    padding: "0px",
                    minWidth: "0px",
                    borderRadius: "0px",
                  }
                }
              }
          }
        },
      esES),
      [prefersDarkMode],
    );
    
    const handleSetFDepto = (id) => {         
        setFilters(prevState => ({
            ...prevState, 
            listadesplegable: id,
        }))        
        setRecord(null)
    }
    const handleSetFiltros = (filtro) => {         
        setFilters(prevState => ({
            ...prevState, 
            filterMant: filtro,
        }))
    }
    const handleSetOrder = (orderDes) => {         
        setFilters(prevState => ({
            ...prevState, 
            orderDesMant: orderDes,
        }))        
    }

    useEffect(() => {
        const el = document.getElementsByClassName('reqselected')[0]
        el?.classList.remove('reqselected')
        setRecord(null)
    },[filters.listadesplegable])    

    function desOrder(orderDes){   
        //Fecha de creación     
        if(filters.filterMant===1 && orderDes){
            return 'Más reciente en la parte superior'
        }
        if(filters.filterMant===1 && !orderDes){
            return 'Más reciente en la parte inferior'
        }

        //Por id de registro
        if(filters.filterMant===2 && orderDes){
            return 'Id. mayor en la parte superior'
        }
        if(filters.filterMant===2 && !orderDes){
            return 'Id. mayor en la parte inferior'
        }

        //Por nombre de usuario
        if(filters.filterMant===3 && orderDes){
            return 'Comunas ordenados descendente'
        }
        if(filters.filterMant===3 && !orderDes){
            return 'Comunas ordenados ascendente'
        }
        return 'Sin orden'
    }    
    
    const MenuFilter = () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        return (      
            <>
                <Button className={`dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] !bg-transparent !rounded-none dark:!text-stone-100 !text-stone-500 !font-thin !border-none !text-sm !min-h-full !px-2`}
                    id="mnulis-button"
                    aria-controls={open ? "mnuman" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    title="Filtros para lista de registros">{
                        ListasDesplegable.orderby.filter((item) => item.id === filters.filterMant)[0].name
                    }
                    <KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1"/>
                </Button>
                <Menu 
                    id="mnulis"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'mnulis-button',
                    }}>                    
                    <p className="px-6 py-2 text-xs font-semibold truncate">Filtrar</p>
                    <div className="max-h-48 overflow-y-auto" id="lstDepContainer">{
                        ListasDesplegable.records.map((item) =>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFDepto(item.id)} id={'lstDepId-' + item.id}>
                                <ListItemIcon>{filters.listadesplegable===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{item.label}                    
                            </MenuItem> 
                        )
                    }
                    </div>
                    <Divider/>
                    <p className="px-6 py-2 text-xs font-semibold truncate">Organizas por</p>{
                        ListasDesplegable?.orderby.map((item) =>
                            <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                <ListItemIcon>{filters.filterMant===item.id ? <Check className="!w-4 !h-4 text-green-500" /> : null}</ListItemIcon>{item.description}                    
                            </MenuItem> 
                        )
                    }
                    <Divider/>
                    <p className="px-6 py-2 text-xs font-semibold truncate">Ordenar</p>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={'o1'} onClick={() => handleSetOrder(true)}>
                        <ListItemIcon className={``}>{filters.orderDesMant ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(true)}                   
                    </MenuItem>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={'o2'} onClick={() => handleSetOrder(false)}>
                        <ListItemIcon className={``}>{!filters.orderDesMant ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(false)}                   
                    </MenuItem> 
                </Menu>
                <Button variant="text"                     
                    onClick={() => handleSetOrder(!filters.orderDesMant)}
                    className="dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] dark:!text-stone-100 !text-stone-500 !min-h-full !w-7 !p-0 !m-0 flex justify-center">
                        {filters.orderDesMant ? <StraightIcon className="!w-auto !h-5 dark:!text-stone-100 !text-stone-500 transition-all"/> : <StraightIcon className="!rotate-180 !w-auto !h-5 dark:!text-stone-100 !text-stone-500 transitio-all"/>}
                </Button>
            </>
        )
    }
    
    return (
        <ThemeProvider theme={theme}>
            <MenuFilter />
        </ThemeProvider>
    )
}