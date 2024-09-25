import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const CssTextField = styled((props) => 
    <TextField {...props} />)(({ error, theme }) => ({
        svg : {
            color: error ? '#f44336': theme.palette.mode === 'dark' ? '#575757' : '#afafaf',
        },
        '& label.Mui-focused': {
          color: '#0b6bcb',
          fontWeight: 400,
          fontSize: '1rem'
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            color: theme.palette.mode === 'dark' ? '#f5f5f4' : '#6e6e6e',
            fontSize: '1rem',
            '& fieldset': {
              borderColor: theme.palette.mode === 'dark' ? '#575757' : '#E0E3E7',
            },
            '&:hover fieldset': {
              borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0b6bcb',
            },
            
        },
        '& label': {
            color: theme.palette.mode === 'dark' ? '#575757' : '#afafaf',
            fontSize: '1rem'
        },
        '& ::placeholder': {
            color: theme.palette.mode === 'dark' ? '#575757' : '#afafaf'
        },
        '& .MuiInputBase-input.Mui-disabled': {
          WebkitTextFillColor: theme.palette.mode === 'dark' ? '#f5f5f4' : '#6e6e6e'
        }
    }
));
    