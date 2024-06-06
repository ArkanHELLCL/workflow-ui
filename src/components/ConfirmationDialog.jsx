/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { useColorScheme } from '@mui/joy/styles';

import { useSnackbar } from 'notistack';


import { ButtonIcon } from './icons.jsx';
import { Divider, IconButton } from '@mui/material';

const { mode, setMode } = useColorScheme();

export default function ConfirmationDialog({openDialog, setOpenDialog}) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    setOpenDialog({
      ...openDialog,
      open:false
    })
  };

  const handleOptionClicked = (id) => {
    id === 1 ? enqueueSnackbar('Operación realizada correctamente!', { variant : "success" } ) : enqueueSnackbar('Operacion cancelada!', { variant : "warning" })
    setOpenDialog({
      ...openDialog,
      open:false
    })    //hacer submit del formulario    
  }

  return (
    <>
      <Dialog
        open={openDialog.open}
        onClose={() => handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: "#444444",
            //boxShadow: "none"
          },
        }}>
        
        <DialogTitle id="alert-dialog-title" className='flex align-middle gap-2'>
          <ButtonIcon typeButton={openDialog.id} styles='w-8 h-8'strokeWidth='1.3' typeIcon={1}/> {openDialog?.titulo}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider orientation="horizontal" />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {openDialog?.mensaje}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleOptionClicked(2)}>No</Button>
          <Button onClick={() => handleOptionClicked(1)} autoFocus>Si</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}