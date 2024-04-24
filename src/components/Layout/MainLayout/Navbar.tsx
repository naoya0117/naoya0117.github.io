import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, MenuItem, useMediaQuery, useTheme, Drawer, Menu, Dialog, DialogTitle, DialogContent, duration } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { LoginForm } from '@/features/auth';

type NavItemProps = {
  href: string;
  name: string;
}

const NavItem = ({ href, name}:NavItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = location.pathname === href;
  const className = active ? 'text-gray-100' : 'text-gray-500 hover:text-gray-100';
  const handleNavigation = () => {
    if (active) {
      animateScroll.scrollToTop();
      return;
    }
    navigate(href);
  }
  return (
    <Button color="inherit" onClick={handleNavigation}>
      <span className={`${className} transition-all duration-500 ease-in-out`}>{name}</span>
    </Button>
  );
}

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const toggleDialog = () => setOpen(!open);

  const items = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact'}
  ]

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" style={{ marginRight: '16px' }} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <a href="/">Naoya's portfolio</a>
          </Typography>
          {!isMobile && items.map((item) => (
            <NavItem href={item.href} name={item.name} />
          ))}
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreVertIcon style={{ color: 'white' }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={toggleDialog}>Login</MenuItem>
          </Menu>
          <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              <LoginForm />
            </DialogContent>
          </Dialog>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={handleDrawerClose}>
        <div
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          {items.map((item) => (
            <MenuItem>
              <Link to={item.href}>{item.name}</Link>
            </MenuItem>
          ))}
        </div>
      </Drawer>
    </div>
  );
}