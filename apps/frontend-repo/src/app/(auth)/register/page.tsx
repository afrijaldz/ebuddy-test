'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { signup } from '@/actions/auth';

export default function Register() {
  const [state, action, pending] = React.useActionState(signup, undefined)


  return (
    <Container maxWidth="md">
      <Box sx={{
        height: '100%',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}>

        <Card variant="outlined" sx={{
          padding: '16px',
          width: '100%'
        }}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}
          >
            Register
          </Typography>

          <Box
            component="form"
            action={action}
            noValidate
            sx={{
              paddingTop: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                error={!!state?.errors.email}
                helperText={state?.errors.email}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={!!state?.errors.email ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="displayName">Name</FormLabel>
              <TextField
                error={!!state?.errors.displayName}
                helperText={state?.errors.displayName}
                id="displayName"
                type="text"
                name="displayName"
                placeholder="John Doe"
                autoComplete="name"
                required
                fullWidth
                variant="outlined"
                color={!!state?.errors.displayName ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={!!state?.errors.password}
                helperText={state?.errors.password}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                color={!!state?.errors.password ? 'error' : 'primary'}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={pending}
            >

              Register
            </Button>
          </Box>
          <Divider sx={{
            padding: '2rem 0'
          }}>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Link
                href="/login"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
