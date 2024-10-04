/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
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
import { useUserData } from '../../../../hooks/useUserData.jsx';
import { useEffect, useState } from 'react';
import { useRecords } from '../../../../hooks/useRecords.jsx';
import { StyledDataGrid } from '../../formcontent/inputscomponents/StyledDataGrid.jsx';

function EditToolbar(props) {
  const { setRows, setRowModesModel, user } = props;

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
  const { userdata : user } = useUserData();
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const { record } = useRecords();

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
    //console.log('Save row with id:', id,rows.length) ;
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
    //console.log('rows', rows);
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
                toolbar: { setRows, setRowModesModel, user },
            }}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize:5 },
                },
            }}
        />
        </Box>
    </div>    
  )
}