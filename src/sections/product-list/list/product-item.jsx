import { Avatar, Paper, Stack, Typography, Button } from '@mui/material'
import React from 'react'

export default function ProductItem({item}) {
  return (
    <Paper variant='elevation' elevation={3} sx={{p:2}}>

      <Stack spacing={2} height="100%">
        <Avatar alt={item.name} src={item.image} variant='rounded' sx={{
          width: 1,
          height: 150
        }} />
        <Typography variant="subtitle1">{item.createdAt}</Typography>
        <Typography variant="subtitle1">{`${item.price} ₺`}</Typography>
        <Typography variant="subtitle1">{item.name}</Typography>
        <Button variant="contained" color="primary">
          Add To Card
        </Button>
      </Stack>

    </Paper>
  )
}
