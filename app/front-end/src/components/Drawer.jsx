import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeftAdmin() {
  const history = useHistory();
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
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List sx={{ pt: 15}}>
          <ListItem>
            <ListItemButton
              onClick={() => history.push('/admin/table/users')}
            >
              <ListItemText primary='Mostrar usuários' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => history.push('/admin/update/user')}
            >
              <ListItemText primary='Atualizar acesso' />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
                onClick={() => history.push('/admin/delete/user')}
              >
              <ListItemText primary='Deletar Usuário' />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
        
            <ListItem disablePadding>
              <ListItemButton
                onClick={ () => history.push('/admin/profile')}
              >
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Atualizar cadastro' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary='Logout' />
              </ListItemButton>
            </ListItem>
   
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 0, bgcolor: 'background.default', p: 3 }}
      >
    
      </Box>
    </Box>
  );
}
