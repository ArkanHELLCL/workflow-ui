import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers-pro';
import { esES } from '@mui/x-date-pickers-pro/locales';
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>        
                <div className='flex'>            
                    <StaticDatePicker />            
                    <StaticDatePicker />            
                </div>
            </LocalizationProvider>
        </ThemeProvider>
    )
}