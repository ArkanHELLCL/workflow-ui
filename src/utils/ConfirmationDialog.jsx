/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Divider, IconButton } from '@mui/material';
import { ButtonIcon } from './icons.jsx';
import { useSnackbar } from 'notistack';

export default function ConfirmationDialog({openDialog, setOpenDialog}) {
  const { enqueueSnackbar } = useSnackbar();
  const handleClose = () => {
    setOpenDialog({
      ...openDialog,
      open:false
    })
  };  
  
  const handleOptionClicked = (option) => {      
    setOpenDialog({
      ...openDialog,
      open:false,
      option: option
    })    //hacer submit del formulario    
    if(!option){
      enqueueSnackbar('Operacion cancelada!', { variant : "warning" , anchorOrigin : { horizontal: "right", vertical: "bottom"}} ) 
    }
  }

  return (
    <>
      <Dialog
        open={openDialog.open}
        onClose={() => handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{          
          className: 'dark:!bg-[#292929] dark:!border-[#3f3e3e] !rounded-none !border !border-[#80bcea] !shadow-[#80bcea] !shadow-inner !shadow dark:!shadow-none'
        }}>
        
        <DialogTitle id="alert-dialog-title" className='flex align-middle gap-2 dark:!text-[#e8e9e9] !pr-14 !text-xl !font-thin'>
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
        <Divider orientation="horizontal"/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className='dark:!text-[#e8e9e9] !text-base !font-thin'>
          {openDialog?.mensaje}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleOptionClicked(false)} className='!text-red-500 !rounded-none hover:!outline hover:!outline-[1px] dark:hover:!outline-[#575757] hover:!outline-[#0078d4] hover:dark:!outline-[#b1b1b1] hover:!bg-[#eff6fc] dark:hover:!bg-[#666666] !text-sm'>No</Button>
          <Button onClick={() => handleOptionClicked(true)} className='!text-green-600 !rounded-none hover:!outline hover:!outline-[1px] dark:hover:!outline-[#575757] hover:!outline-[#0078d4] hover:dark:!outline-[#b1b1b1] hover:!bg-[#eff6fc] dark:hover:!bg-[#666666] !text-sm' autoFocus formAction={openDialog.action} form={openDialog.frmname} type={openDialog.type}>Si</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}