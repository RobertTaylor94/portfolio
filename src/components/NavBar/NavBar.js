import React from "react";
import "./navtabs.css";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Divider,
  Drawer,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;

  //handle state for opening of drawer on mobile devices
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    //toggle drawer open and close
    setMobileOpen((prevState) => !prevState);
  };

  //creates the menu drawer for use on smaller screens
  //on click of hamburger icon the drawer opens with a list of links around the site
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RJT
      </Typography>
      <Divider />
      <List>
        <ListItem key="home" disablePadding>
          {/* each list item button using 'Link' from react router for page navigation */}
          <ListItemButton component={Link} to="/" sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="contact" disablePadding>
          <ListItemButton
            component={Link}
            to="/contact"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem key="gallery" disablePadding>
          <ListItemButton
            component={Link}
            to="/gallery"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Gallery" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    //return appbar fixed across the top of all devices
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open-drawer"
            edge="start"
            onClick={handleDrawerToggle}
            //shows hamburger icon on mobile devices
            sx={{ mr: 2, display: { sm: "none " } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            RJT
          </Typography>
          <Typography
            variant='h6'
            component='div'
            // Adds a header to the appbar centered only on mobile screens
            sx={{ display: { xs: 'flex', sm: 'none' }, flexGrow: 1, textDecoration: 'none', position: 'relative', right: '20px', justifyContent: 'center' }}
            >
            RJT
          </Typography>
          {/* Displays buttons on sm screens and up and uses Link component for use with react router */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button component={Link} to="/" key="home" sx={{ color: "#fff" }}>
              Home
            </Button>
            <Button
              component={Link}
              to="/contact"
              key="contact"
              sx={{ color: "#fff" }}
            >
              Contact
            </Button>
            <Button
              component={Link}
              to="/gallery"
              key="gallery"
              sx={{ color: "#fff" }}
            >
              Gallery
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;