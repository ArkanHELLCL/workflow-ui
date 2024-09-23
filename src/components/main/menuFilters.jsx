/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFilters } from "../../hooks/useFilters.jsx";
import { useRequest } from "../../hooks/useRequest.jsx";
import { flujos } from "../../mocks/flujos.json";
import { flujosv0 } from "../../mocks/flujos.json";
import { flujosv1 } from "../../mocks/flujos.json";
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
import { useMemo, useState } from "react";

export default function MenuFilters() {
    const { filters, setFilters } = useFilters()
    const { setRequest } = useRequest()    
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
    const handleSetFlujos = (flujo) => {
        setFilters(prevState => ({
            ...prevState, 
            flujo: flujo,
        }))
        setRequest(null)
        if(flujo === 0 && filters.filter===4)
            setFilters(prevState => ({
                ...prevState, 
                filter: 1,
        }))        
    }
    const handleSetFiltros = (filtro) => {
        setFilters(prevState => ({
            ...prevState, 
            filter: filtro,
        }))
    }
    const handleSetOrder = (orderDes) => {
        setFilters(prevState => ({
            ...prevState, 
            orderDes: orderDes,
        }))
    }    
    function desOrder(orderDes){
        if(filters.filter===1 && orderDes){
            return 'Más reciente en la parte superior'
        }
        if(filters.filter===1 && !orderDes){
            return 'Más reciente en la parte inferior'
        }

        if(filters.filter===2 && orderDes){
            return 'Número mayor en la parte superior'
        }
        if(filters.filter===2 && !orderDes){
            return 'Número mayor en la parte inferior'
        }

        if(filters.filter===3 && orderDes){
            return 'Más atrasado en la parte superior'
        }
        if(filters.filter===3 && !orderDes){
            return 'Más atrasado en la parte inferior'
        }

        if(filters.filter===4 && orderDes){
            return 'Paso más alto en la parte superior'
        }
        if(filters.filter===4 && !orderDes){
            return 'Paso más alto en la parte inferior'
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
                    id="mnufil-button"
                    aria-controls={open ? "mnufil" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    title="Filtros para lista de requerimientos">{
                        filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNC' ?
                            flujosv0.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name
                        :
                            filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                                flujosv1.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name 
                            :
                                    flujos.filter((item) => item.id === filters.flujo)[0].orderby.filter((item) => item.id === filters.filter)[0].name
                    }
                    <KeyboardArrowDownIcon className="!w-4 !h-4 !mt-1"/>
                </Button>
                <Menu
                    id="mnufil"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'mnufil-button',
                    }}>{
                    filters.itemIdSelected.slice(0,2).toUpperCase() !== 'BN' ?
                        <div>
                            <p className="px-6 py-2 text-xs font-semibold truncate">Filtrar</p>{                        
                                flujos.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={item.id} onClick={() => handleSetFlujos(item.id)}>
                                        <ListItemIcon className={``}>{filters.flujo===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{item.description}                    
                                    </MenuItem> 
                                )
                            }
                            <Divider/>
                        </div>
                    : filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                        <div>
                            <p className="px-6 py-2 text-xs font-semibold truncate">Filtrar</p>{                        
                                flujosv1.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !pb-0`} key={item.id} onClick={() => handleSetFlujos(item.id)}>
                                        <ListItemIcon className={``}>{filters.flujo===item.id ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{item.description}                    
                                    </MenuItem> 
                                )
                            }
                            <Divider/>
                        </div>
                    : null
                }
                <p className="px-6 py-2 text-xs font-semibold truncate">Organizas por</p>{
                        filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNC' ?
                            flujosv0.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                    <ListItemIcon>
                                        {filters.filter===item.id ? <Check className="!w-4 !h-4 text-green-500" /> : null}
                                    </ListItemIcon>
                                    {item.description}                    
                                </MenuItem> 
                            )
                        :
                            filters.itemIdSelected.slice(0,3).toUpperCase() === 'BNW' ?
                                flujosv1.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                        <ListItemIcon>
                                            {filters.filter===item.id ? <Check className="!w-4 !h-4 text-green-500" /> : null}
                                        </ListItemIcon>
                                        {item.description}                    
                                    </MenuItem> 
                                )
                            :
                                flujos.filter((item) => item.id === filters.flujo)[0].orderby.map((item) =>
                                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={item.id} onClick={() => handleSetFiltros(item.id)}>
                                        <ListItemIcon>
                                            {filters.filter===item.id ? <Check className="!w-4 !h-4 text-green-500" /> : null}
                                        </ListItemIcon>
                                        {item.description}
                                    </MenuItem> 
                                )
                    }
                    <Divider/>
                    <p className="px-6 py-2 text-xs font-semibold truncate">Ordenar</p>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={'o1'} onClick={() => handleSetOrder(true)}>
                        <ListItemIcon className={``}>{filters.orderDes ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(true)}                   
                    </MenuItem>
                    <MenuItem  className={`hover:!bg-[#c5c5c5] dark:hover:!bg-[#505050] !pr-10 !text-xs !leading-0 !font-normal dark:!text-stone-100 !text-stone-500 !gap-0 !py-0 mnuFlow`} key={'o2'} onClick={() => handleSetOrder(false)}>
                        <ListItemIcon className={``}>{!filters.orderDes ? <Check className="!w-4 !h-4" /> : null}</ListItemIcon>{desOrder(false)}                   
                    </MenuItem>
                </Menu>
                <Button variant="text"                     
                    onClick={() => handleSetOrder(!filters.orderDes)} 
                    className="dark:hover:!bg-[#444444] hover:!bg-[#f0f0f0] dark:!text-stone-100 !text-stone-500 !min-h-full !w-7 !p-0 !m-0 flex justify-center">
                        {filters.orderDes ? <StraightIcon className="!w-auto !h-5 dark:!text-stone-100 !text-stone-500 transition-all"/> : <StraightIcon className="!rotate-180 !w-auto !h-5 dark:!text-stone-100 !text-stone-500 transitio-all"/>}
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