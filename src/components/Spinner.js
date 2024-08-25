import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner() {
  return (
    <div className='flex justify-center items-center' style={{ minHeight: '80vh' }}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress sx={{ color: 'var(--primary)' }} />
      </Box>
    </div>
  );
}