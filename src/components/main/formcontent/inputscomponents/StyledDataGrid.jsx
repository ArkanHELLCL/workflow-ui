import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      borderRight: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
        borderRight:0,
        fontWeight: 300,
        fontSize: '0.9rem',
        lineHeight: '2rem'
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 0,
    },
    
    '& .MuiDataGrid-row:hover': {
        backgroundColor: `${
          theme.palette.mode === 'light' ? '#e6f2fa' : '#383838'
        }`,
      },
      '& .MuiDataGrid-columnHeader':{
        border:0,
        backgroundColor: `${
          theme.palette.mode === 'light' ? '#faf9f8' : '#1d1d1d'
        }`,      
      },
      '& .MuiDataGrid-columnHeaderTitle':{
        fontWeight: 350,
        fontSize: '1rem',
        lineHeight: '1.5rem',
        color: `${
          theme.palette.mode === 'light' ? '#0c0a09' : '#f5f5f4'
        }`,
      }
}));

export  const StyledGridOverlay = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    '& .no-rows-primary': {
      fill: '#3D4751',
      ...theme.applyStyles('light', {
        fill: '#AEB8C2',
      }),
    },
    '& .no-rows-secondary': {
      fill: '#1D2126',
      ...theme.applyStyles('light', {
        fill: '#E8EAED',
      }),
    },
  }));
    