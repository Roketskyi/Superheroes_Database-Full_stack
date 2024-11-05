import React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const ErrorSnackbar = ({ error, onClose }) => (
    <Snackbar
        open={Boolean(error)}
        autoHideDuration={6000}
        onClose={onClose}
    >
        <Alert onClose={onClose} severity="error">
            {error}
        </Alert>
    </Snackbar>
);

export default ErrorSnackbar;