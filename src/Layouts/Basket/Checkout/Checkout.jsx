import React from 'react'
import { useRenderBasket } from '../../../context/basket-context';
import { Paper, Stack, Typography } from '@mui/material';
import { fTrCurrency } from '../../../utils/fTrCurrency';

export default function Checkout() {
    const { totalBasketPrice} = useRenderBasket();

  return (
    <Stack>
        <Typography variant="h1">Checkout</Typography>
        <Paper variant='elevation' elevation={3}>
            <Stack direction="row">
                <Typography variant="subtitle1">Total Price:</Typography>
                <Typography variant="subtitle1">{fTrCurrency(totalBasketPrice)}</Typography>
            </Stack>
        </Paper>
    </Stack>
  )
}
