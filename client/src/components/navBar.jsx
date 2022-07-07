import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { UserContext } from "../userContext";
import { useNavigate } from "react-router";
import  React, { useEffect, useState,useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const {user} = useContext(UserContext);
  
  return (
    <div>
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="accueilPage">home</Link>
            </Typography>
            <Button color="inherit">
              {!user.auth?<Link to="connectingPage">connexion</Link>:<Link to="connectingPage">{user.email}</Link>}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </div>
  );
};

export default NavBar;
