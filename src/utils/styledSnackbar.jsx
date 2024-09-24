import { MaterialDesignContent } from 'notistack';
import { styled } from '@mui/material/styles';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(({theme}) => {
    return ({
    '&.notistack-MuiContent-success': {      
      backgroundColor: theme.palette.mode === 'dark' ? '#262626' : '#ffffff',
      border: '1px solid rgb(22 163 74)',
      color: 'inherit'
    },
    '&.notistack-MuiContent-error': {      
      backgroundColor: theme.palette.mode === 'dark' ? '#262626' : '#ffffff',
      border: '1px solid rgb(220 38 38)',
      color: 'inherit'
    },
    '&.notistack-MuiContent-warning': {      
      backgroundColor: theme.palette.mode === 'dark' ? '#262626' : '#ffffff',
      border: '1px solid #ff9800',
      color: 'inherit'
    },
    '&.notistack-MuiContent-error svg': {
        color: 'rgb(220 38 38)'
    },
    '&.notistack-MuiContent-success svg': {
        color: 'rgb(22 163 74)'
    },
    '&.notistack-MuiContent-warning svg': {
        color: '#ff9800'
    }
  })});

export default StyledMaterialDesignContent