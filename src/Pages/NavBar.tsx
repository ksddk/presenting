import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';

const pages = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Shopping List',
    link: '/list'
  },
  {
    name: 'Contact me',
    link: '/contact'
  }
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: '#DE3163' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none'
            }}>
            Kseniya Dedik
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, link }) => (
              <Link
                key={name}
                href={link}
                sx={{
                  my: 5,
                  color: 'white',
                  display: 'block',
                  fontWeight: 'bold',
                  margin: '5px',
                  textDecoration: 'none'
                }}>
                {name}
              </Link>
            ))}
          </Box>
          <Avatar alt="Ks" src="./ks_photo_cropped.jpg" sx={{ transform: 'scale(1.5)' }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
