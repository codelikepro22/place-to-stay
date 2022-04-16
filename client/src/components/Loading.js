import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useValue } from '../context/ContextProvider';

const Loading = () => {
  const {
    state: { loading },
  } = useValue();
  return (
    <Backdrop open={loading} sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
      <CircularProgress sx={{ color: 'white' }} />
    </Backdrop>
  );
};

export default Loading;
