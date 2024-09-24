/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Slide from '@mui/material/Slide';
import dayjs from 'dayjs'; 

export default function ReportFilters({frmRecord, name, isRequired, label, errorMessage, className}) {        
    const nameDesde = name + 'Desde'
    const nameHasta = name + 'Hasta'
    const errorMessageDesde = errorMessage + 'desde'
    const errorMessageHasta = errorMessage + 'hasta'
    const hoy = dayjs(new Date())
    
    return (      
        <div className='flex gap-0 dark:border-[#353535] border border-t-0 border-l-0 border-r-0 pt-1'>
            <div className='grid'>
              <Controller
                control={frmRecord.control}
                name={nameDesde}
                rules={isRequired ? {required : errorMessageDesde} : {required : false}}
                //value={dayjs(new Date())}
                render={({ field: { onBlur, onChange, value } }) => (
                    <FormControl                  
                        size='sm'
                        className={className}>                                
                        <Slide in={true} timeout={500}>
                          <StaticDatePicker                                      
                              localeText={{ toolbarTitle: label + "Desde:" }}
                              slotProps={{
                                  actionBar: {
                                      actions: ['today'],
                                  },
                              }}                                      
                              onBlur={onBlur}                                      
                              /*onChange={(date) =>{
                                onChange(date?.$d.toLocaleDateString("es-CL"));
                              }}
                              value={value?.$d.toLocaleDateString("es-CL") || ''}*/
                              onChange={onChange}
                              value={value || hoy}
                          />
                        </Slide>
                        <FormHelperText className="!text-red-600">
                          {frmRecord.formState.errors[nameDesde]?.message}
                      </FormHelperText>   
                    </FormControl>
                )}
              />
            </div>
            <div className='grid'>
            <Controller
                control={frmRecord.control}
                name={nameHasta}
                rules={isRequired ? {required : errorMessageHasta} : {required : false}}                        
                render={({ field: { onBlur, onChange, value } }) => (
                    <FormControl                  
                        size='sm'
                        className={className}>                                
                        <Slide in={true} timeout={700}>
                          <StaticDatePicker                                      
                              localeText={{ toolbarTitle: label + "Hasta:" }}
                              slotProps={{
                                  actionBar: {
                                      actions: ['today'],
                                  },
                              }}                                      
                              onBlur={onBlur}                                      
                              /*onChange={(date) => {                                        
                                onChange(date?.$d.toLocaleDateString("es-CL"));
                              }}*/
                              onChange={onChange}
                              value={value || hoy}
                          />
                        </Slide>
                        <FormHelperText className="!text-red-600">
                          {frmRecord.formState.errors[nameHasta]?.message}
                      </FormHelperText>   
                    </FormControl>
                )}
              />
            </div>
        </div>                              
    )
}