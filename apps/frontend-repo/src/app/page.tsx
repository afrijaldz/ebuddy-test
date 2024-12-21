'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import {
  getUsers,
  selectUsers
} from "@/lib/features/user/userSlice";

import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function Home() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  console.log(users)

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          User Data
        </Typography>
        

        <Button variant='contained' onClick={() => dispatch(getUsers())}>
          Fetch Users data
        </Button>
      </Box>
    </Container>
  );
}
