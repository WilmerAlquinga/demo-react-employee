import { Grade } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";

const Navbar: React.FC = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  }

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employees Activities App
            </Typography>
            <Button color="secondary" variant="contained" startIcon={<Grade />} onClick={handleClick}>
              Favorites
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
