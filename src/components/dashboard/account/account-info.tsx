'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { UserContext } from '@/contexts/user-context';


const userold = {
  name: 'Sofia Rivers',
  avatar: '/assets/avatar.png',
  jobTitle: 'Senior Developer',
  country: 'USA',
  city: 'Los Angeles',
  timezone: 'GTM-7',
} as const;

export function AccountInfo(): React.JSX.Element {
  // Consumir el contexto del usuario
  const { user } = React.useContext(UserContext) || { user: null };
  // Obtener el nombre del usuario, si existe
  const nombreUsuarioActivo = user ? `${user.fullName}` : null;
  return (
    <Card>
      <CardContent>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            <Avatar src={userold.avatar} sx={{ height: '80px', width: '80px' }} />
          </div>
          <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Typography variant="h5">{nombreUsuarioActivo}</Typography>
            <Typography color="text.secondary" variant="body2">
              {userold.city} {userold.country}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {userold.timezone}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth variant="text">
          Cargar imagen
        </Button>
      </CardActions>
    </Card>
  );
}
