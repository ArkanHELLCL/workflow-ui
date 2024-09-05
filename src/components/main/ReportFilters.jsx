import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { StaticDatePicker } from '@mui/x-date-pickers-pro';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { esES } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/es';
import { useFilters } from '../../hooks/useFilters';
import { useMemo } from 'react';

export default function ReportFilters() {
    const { filters } = useFilters()
    const prefersDarkMode = filters.darkMode
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                mode: prefersDarkMode ? 'dark' : 'light',
            },
        },
        esES),
        [prefersDarkMode],
    );
    
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs} 
                localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
                adapterLocale="es"
                >
                <div className='flex'>
                
                    <DateCalendar                        
                        sx={
                            {background : 'transparent'}
                        }
                        />
                        
                </div>
            </LocalizationProvider>
        </ThemeProvider>
    )
}