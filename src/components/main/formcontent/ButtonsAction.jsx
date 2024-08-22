/* eslint-disable react/prop-types */
import Slide from '@mui/material/Slide';
import { ButtonIcon } from '../../../utils/icons.jsx';

export default function Buttons({formulario}){
    const { FOR_Botones } = formulario;
    const grupos = FOR_Botones?.map(grupo => grupo)
    return(
        <div id="buttonsRequest" className='grid text-right leading-tight absolute right-2 bottom-0 max-w-[60%] overflow-x-auto justify-items-end'> 
            <div className='flex items-center gap-3 pb-2 pt-1 pr-[1px] pl-1'>
            {
                grupos?.map(grp => {
                    return (
                        <Slide key={grp[0].id} in={true} direction='left' timeout={500} mountOnEnter unmountOnExit >
                            <div className='flex'>
                            {
                                grp[0].botones.map(btns =>
                                    <button 
                                        key={btns.id} 
                                        className='h-9 w-auto dark:bg-[#444444] bg-white flex items-center pr-1 pl-2 hover:bg-[#eff6fc] dark:hover:bg-[#666666] z-10 hover:z-20 outline outline-1 outline-[#b8b5b2] dark:outline-[#575757] hover:outline-[#0078d4] hover:dark:outline-[#b1b1b1]' 
                                        title={btns.nombre}
                                        id={btns.id} 
                                        type={btns.type}
                                        >
                                            <ButtonIcon typeButton={btns.id} styles='w-5 h-5'strokeWidth='1.3' typeIcon={1}/>{
                                                btns.nombre &&
                                                <span className='text-xs font-normal leading-tight w-fit px-2'>{btns.nombre}</span>
                                            }
                                    </button>
                                )
                            }
                            </div>
                        </Slide>
                    )
                })
            }
            </div>                  
        </div>        
    )
}