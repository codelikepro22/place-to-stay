import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useValue } from '../context/ContextProvider';

const Notification = () => {
  const {
    state: { alert },
    dispatch,
  } = useValue();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    dispatch({ type: 'UPDATE_ALERT', payload: { ...alert, open: false } });
  };
  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={alert.severity}
        sx={{ width: '100%' }}
        variant="filled"
        elevation={6}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
