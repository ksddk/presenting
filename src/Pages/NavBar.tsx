import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';
import Title from './Title.svg';
// import styles from './NavBar.module.css'

const pages = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Shopping List',
    link: '/list'
  }
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          border: 'solid green',
          backgroundColor: ' #d8c6c9',
          width: '1440px',
          height: '96px'
        }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              border: 'solid blue',
              width: '79.515px',
              height: '32px'

              // mr: 2,
              // display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              // fontWeight: 700,
              // letterSpacing: '.1rem',
              // color: 'inherit',
              // textDecoration: 'none'
            }}>
            <img src={Title} alt="Kseniya Dedik" />
          </Typography>

          <Box
            sx={{
              border: 'solid red',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', backgroundColor: ' #d8c6c9' },
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px 0px',
              gap: '8px'
            }}>
            {pages.map(({ name, link }) => (
              <Link
                key={name}
                href={link}
                // className={styles.link}
                sx={{
                  my: 5,
                  border: 'solid blue',
                  color: '#333333',
                  display: 'block',
                  fontWeight: 'bold',
                  margin: '5px',
                  textDecoration: 'none'
                }}>
                {name}
              </Link>
            ))}
          </Box>
          {/* <Avatar alt="Ks" src="./ks_photo_cropped.jpg" sx={{ transform: 'scale(1.5)' }} /> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
