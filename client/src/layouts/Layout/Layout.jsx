import './Layout.css'
import * as React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'

import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import LoginIcon from '@mui/icons-material/Login'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}))

function Layout(props) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <AppBar position='fixed' open={open}>
          <Nav
            currentUser={props.currentUser}
            handleLogout={props.handleLogout}
            handleDrawerOpen={handleDrawerOpen}
          />
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              background: '#2a374af3'
            },
          }}
          variant='persistent'
          anchor='right'
          open={open}
          onClick={handleDrawerClose}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronLeftIcon style={{ fontSize: 30, color: '#7BFDF8' }}/>
              ) : (
                <ChevronRightIcon style={{ fontSize: 30, color: '#7BFDF8' }}/>
              )}
            </IconButton>
          </DrawerHeader>
          {props.currentUser && (
            <div className='drawer-greeting'>
              <AccountCircleIcon style={{ fontSize: 30 }}/><p>Hello, {props.currentUser.username}</p>
            </div>
          )}
          <Divider style={{background: '#7BFDF8'}}/>
          <List>
            {props.currentUser ? (
              <div className='user-links-drawer'>
                <NavLink to='/server/search'><SearchIcon style={{ fontSize: 30 }}/> &nbsp; Search</NavLink>
                <button onClick={props.handleLogout}><LogoutIcon style={{ fontSize: 30 }}/> &nbsp; Logout</button>
              </div>
            ) : (
              <div className='non-user-links-drawer'>
                <NavLink to='/server/search'><SearchIcon style={{ fontSize: 30 }}/> &nbsp; Search</NavLink>
                <NavLink to='/join'><PersonAddIcon style={{ fontSize: 30 }}/> &nbsp; Join</NavLink>
                <NavLink to='/login'><LoginIcon style={{ fontSize: 30 }}/> &nbsp; Login</NavLink>
              </div>
            )}
          </List>
        </Drawer>
      </Box>
      <div className='children'>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout