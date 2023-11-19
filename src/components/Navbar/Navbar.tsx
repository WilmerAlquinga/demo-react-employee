import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employees Activities App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
