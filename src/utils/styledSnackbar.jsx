import { MaterialDesignContent } from 'notistack';
import { styled } from '@mui/joy/styles';
import { useFilters } from '../hooks/useFilters.jsx';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => {
    const { filters } = useFilters();
    const bgDark = filters?.darkMode ? '#444444' : 'white';

    return ({
    '&.notistack-MuiContent-success': {      
      backgroundColor: bgDark,
      border: '1px solid rgb(22 163 74)',
      color: 'inherit'
    },
    '&.notistack-MuiContent-error': {      
      backgroundColor: bgDark,
      border: '1px solid rgb(220 38 38)',
      color: 'inherit'
    },
    '&.notistack-MuiContent-warning': {      
      backgroundColor: bgDark,
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