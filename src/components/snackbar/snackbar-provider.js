import PropTypes from 'prop-types';
import { useRef } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { SnackbarProvider as NotistackProvider, closeSnackbar } from 'notistack';
// @mui
import IconButton from '@mui/material/IconButton';
//
import Iconify from '../iconify';
//
import { StyledIcon, StyledNotistack } from './styles';

// ----------------------------------------------------------------------

export default function SnackbarProvider({ children }) {

  const notistackRef = useRef(null);

  return (
    <NotistackProvider
      ref={notistackRef}
      maxSnack={5}
      preventDuplicate
      autoHideDuration={3000}

      variant="success" // Set default variant
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      iconVariant={{
        info: (
          <StyledIcon color="info">
            <Iconify icon="eva:info-fill" width={24} />
          </StyledIcon>
        ),
        success: (
          <StyledIcon color="success">
            <Iconify icon="eva:checkmark-circle-2-fill" width={24} />
          </StyledIcon>
        ),
        warning: (
          <StyledIcon color="warning">
            <Iconify icon="eva:alert-triangle-fill" width={24} />
          </StyledIcon>
        ),
        error: (
          <StyledIcon color="error">
            <Iconify icon="solar:danger-bold" width={24} />
          </StyledIcon>
        ),
      }}
      Components={{
        default: StyledNotistack,
        info: StyledNotistack,
        success: StyledNotistack,
        warning: StyledNotistack,
        error: StyledNotistack,
      }}
      // with close as default
      action={(snackbarId) => (
        <IconButton size="small" onClick={() => closeSnackbar(snackbarId)} sx={{ p: 0.5 }}>
          <Iconify width={16} icon="mingcute:close-line" />
        </IconButton>
      )}
    >
      {children}
    </NotistackProvider>
  );
}

SnackbarProvider.propTypes = {
  children: PropTypes.node,
};
