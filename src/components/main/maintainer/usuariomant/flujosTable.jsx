/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';
import { useFilters } from '../../../../hooks/useFilters.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  useGridApiContext,
  useGridSelector,
  gridPageCountSelector,
  gridPageSelector  
} from '@mui/x-data-grid';
import {
  randomId,
} from '@mui/x-data-grid-generator';
import { flujos, asignados } from '../../../../mocks/flujosTable.json';
import { user } from '../../../../mocks/usuario.json';
import { useEffect, useMemo, useState } from 'react';
import { useRecords } from '../../../../hooks/useRecords.jsx';
import { esES } from '@mui/x-data-grid/locales';

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, USR_Id: user.USR_Id, isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'FLU_Id' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Agregar Registro
      </Button>
    </GridToolbarContainer>
  );
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
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

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={pageCount}
        renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
}

export default function FlujosTable({title, pageSize}) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const { record } = useRecords();

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

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    //console.log('Save row with id:', id,rows) ;
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  useEffect(() => {
    setRows(asignados.filter(item => parseInt(item.USR_Id) === parseInt(record.record.Id)))
    console.log('rows', rows);
  }, [record]);

  const columns = [
    {
      field: 'FLU_Id',
      headerName: 'Flujo',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: flujos,
    },
    {
      field: 'acciones',
      type: 'actions',
      headerName: 'Acciones',
      flex: 1,
      cellClassName: 'acciones',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              key={`save-${id}`}
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
              key={`cancel-${id}`}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            key={`edit-${id}`}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            key={`delete-${id}`}
          />,
        ];
      },
    },
  ];

  return (
    <ThemeProvider theme={theme}>
        <div className='h-full w-full flex self-center flex-col gap-2'>
            <h2 className='!text-lg font-light dark:!text-stone-100 !text-stone-950'>{title}</h2>
            <Box
            sx={{                
                width: '100%',
                height: '100%',
                '& .actions': {
                color: 'text.secondary',
                },
                '& .textPrimary': {
                color: 'text.primary',
                },
            }}
            >
            <StyledDataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                density="compact"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                pageSizeOptions={[pageSize]}
                autoheight
                slots={{
                    toolbar: EditToolbar,
                    pagination: CustomPagination,
                }}
                slotProps={{
                    toolbar: { setRows, setRowModesModel },
                }}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize:5 },
                    },
                }}
            />
            </Box>
        </div>
    </ThemeProvider>
  )
}