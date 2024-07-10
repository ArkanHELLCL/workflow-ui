/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Controller } from 'react-hook-form';
import FormControl from '@mui/joy/FormControl';
import Autocomplete from '@mui/joy/Autocomplete';
import CircularProgress from '@mui/joy/CircularProgress';
import FormHelperText from '@mui/joy/FormHelperText';
import { InnerInput } from '../../formcontent/inputscomponents/StyledComponent.jsx';
import Box from "@mui/material/Paper";
import  Sleep  from "../../../../utils/Sleep.jsx";

export default function InputList ({frmRecord, name, dataOptions, className, isRequired, placeholder, label, errorMessage}) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;      
  
    useEffect(() => {
      let active = true;
  
      if (!loading) {
        return undefined;
      }
  
      (async () => {
        await Sleep(1e2); // For demo purposes.
  
        if (active) {        
          setOptions([...dataOptions.records]);
        }
      })();
  
      return () => {
        active = false;
      };
    }, [loading]);
  
    useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);
  
    return (
      <Controller
          control={frmRecord.control}
          name={name}
          rules={isRequired ? {required : errorMessage} : {required : false}}
          defaultValue={dataOptions.records.find((option) => option.id == dataOptions.selected.id)}        
          render={({ field }) => (
              <FormControl                
                  id={name}
                  size='sm'
                  className={className}>
                  <Autocomplete
                      {...field}
                      placeholder={placeholder}
                      error={!!frmRecord.formState.errors[name]}  
                      variant="outlined"
                      slots={{ input: InnerInput }}
                      onChange={(event, newValue) => {
                          frmRecord.setValue(name,newValue);
                      }}
                      onBlur={field.onBlur}                    
                      slotProps={{ 
                              input: { placeholder: placeholder, label: label, className: 'dark:!text-stone-100 !text-stone-950 !text-base !font-light placeholder:dark:!text-stone-600 placeholder:!text-stone-300'}, 
                              root : { className : "dark:!bg-transparent dark:!border-[#575757]"},
                              popupIndicator: { className: "dark:hover:!bg-[#444444]" },
                              clearIndicator: { className: "dark:hover:!bg-[#444444]" },
                              option: { className: "dark:!bg-[#575757] dark:hover:!bg-[#444444] hover:bg-[#cde6f7] dark:!text-stone-100 dark:hover:!text-stone-100 !text-base !font-light !pl-2" },
                              listbox: { className: "dark:!bg-[#575757] dark:!border-[#575757] dark:!text-stone-100 !text-white"},
                              inputRoot: { className: "dark:!bg-transparent dark:!border-[#575757] dark:!text-stone-100 dark:!shadow-none" },
                              loadingIndicator: { className: "dark:!bg-transparent dark:!border-[#575757] dark:!text-stone-100 !text-white" },
                      }}
                      sx={{
                          '--Input-minHeight': '56px',
                          '--Input-radius': '6px',
                      }}
                      open={open}
                      onOpen={() => {
                          setOpen(true);
                      }}
                      onClose={() => {
                          setOpen(false);
                      }}
                      isOptionEqualToValue={(option, value) => option.value === value.value}
                      getOptionLabel={(option) => option.label || ''}
                      options={options}
                      loading={loading}
                      endDecorator={
                          loading ? (
                              <CircularProgress size="sm" sx={{ bgcolor: 'transparent' }} />
                          ) : null
                      }
                      renderOption={(props, option) => 
                        <Box component="li" {...props} key={option.id}>                        
                            {option.label}
                        </Box>                      
                      }
                  />
                  <FormHelperText className="!text-red-600">
                      {frmRecord.formState.errors[name]?.message}
                  </FormHelperText>                       
              </FormControl>
          )}
      />
    );
  }