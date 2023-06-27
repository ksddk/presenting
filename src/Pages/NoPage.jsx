import Box from '@mui/material/Box';

const NoPage = () => {
  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        fontSize: 25,
        textAlign: 'center',
        height: '90%'
      }}>
      <h1>This page does not exist</h1>
    </Box>
  );
};

export default NoPage;
