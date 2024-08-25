import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ length, changeOnPagination}) {

  return (
    <div className='flex justify-center my-10'>
      <Stack spacing={2}>
        <Pagination count={length} sx={{
          '& .Mui-selected': {
            bgcolor: 'var(--primary) !important',
          },
        }}
          onChange={(_, pageNumber) => changeOnPagination(pageNumber)}
        />
      </Stack>
    </div>
  );
}