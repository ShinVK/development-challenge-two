import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

const drawerWidth = 240;

export default function DrawerCustomer() {
  const history = useHistory();
  const { setToken, setIsLogged, setId, setAccessUser } =
    React.useContext(Context);

  const onClicklogOut = () => {
    setIsLogged(false);
    setId('');
    setToken('');
    setAccessUser('');
    return history.push('/');
  };

  return (
    <Box sx={{ display: 'flex', zIndex: 1 }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Divider />
        <List sx={{ pt: 15 }}>
          <ListItem>
            <ListItemButton
              onClick={() => history.push('/personal/user/medical')}
            >
              <ListItemText primary='Mostrar meus dados médicos' />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push('/personal/profile')}>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => history.push(
                '/personal/update/profile'
              )}
            >
              <ListItemText primary='Atualizar dados pessoais' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => history.push('/user/update/password')}
            >
              <ListItemText primary='Atualizar senha' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={onClicklogOut}>
              <ListItemText primary='Logout' />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component='main'
        sx={{ flexGrow: 0, bgcolor: 'background.default', p: 3 }}
      ></Box>
    </Box>
  );
}
