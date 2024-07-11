/* eslint-disable react/prop-types */
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable({columns, rows, title}) {
  return (
    <div className='h-full min-w-fit w-fit flex self-center flex-col gap-2'>
      <h2 className='!text-lg font-light dark:!text-stone-100 !text-stone-950'>{title}</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        density="compact"
        //loading="true"
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize:5 },
          },
        }}
        pageSizeOptions={[5,10]}
        checkboxSelection
        slotProps={{
          pagination: {
            labelRowsPerPage: "Filas por página",
            className: 'dark:!text-stone-100 !text-stone-950 !font-light'
          },          
          row: {
            className: 'dark:!bg-[#444444] !bg-[#fbfcfe] dark:!text-stone-100 !text-stone-500 !text-sm !font-light hover:dark:!bg-transparent',
          },
          footer: {
            className: '!bg-transparent',
          },
          baseCheckbox: {
            className: '!text-stone-400',
          },
          toolbar: {
            className: 'dark:!text-stone-100 !text-stone-950',
          },
          cell: {
            className: 'dark:!border-[#575757] !border-white',
          },
          }
        }
      />
    </div>
  );
}