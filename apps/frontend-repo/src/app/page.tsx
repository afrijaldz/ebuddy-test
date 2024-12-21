'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, FormControl, FormLabel, TextField } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Modal from '@mui/material/Modal';

import {
  getUsers,
  selectUsers
} from "@/lib/features/user/userSlice";

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { updateUser } from '@/actions/user';
import { User } from '@ebuddy-test/types';

export default function Home() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const [open, setOpen] = React.useState<boolean>(false)
  const [selectedUser, setSelectedUser] = React.useState<User>()
  const [stateUpdateUser, actionUpdateUser, pendingUpdateUser] = React.useActionState(updateUser, undefined)

  const handleOpenModalEdit = (user: User) => {
    setOpen(true)
    setSelectedUser(user)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
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

          {users.length > 0 ? <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    key={user.uid}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">{user.address}</TableCell>
                    <TableCell align="right">{user.phone}</TableCell>
                    <TableCell align='right'>
                      <Button variant='contained' onClick={() => handleOpenModalEdit(user)}>Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> : <Button sx={{
            marginTop: '2rem'
          }} variant='contained' onClick={() => dispatch(getUsers())}>
            Fetch Users data
          </Button>}
        </Box>
      </Container>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Update User Data
          </Typography>

        <Box
          component="form"
          action={actionUpdateUser}
          sx={{
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: 2,
            bgcolor: 'backgroud.paper'
          }}
        >
          <FormControl sx={{ display: 'none'}}>
            <TextField
              id="uid"
              type="hidden"
              sx={{display: 'none'}}
              name="uid"
              required
              fullWidth
              defaultValue={selectedUser?.uid}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              error={!!stateUpdateUser?.errors.name}
              helperText={stateUpdateUser?.errors.name}
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              autoFocus
              required
              fullWidth
              variant="outlined"
              defaultValue={selectedUser?.name}
              color={!!stateUpdateUser?.errors.name ? 'error' : 'primary'}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={pendingUpdateUser}
          >
            Update
          </Button>
        </Box>
        </Box>
      </Modal >
    </>

  );
}
