import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/Group 39963.png"; // Replace with your logo
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        width: "100%",
        height: "92px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px",
          width: "93.89%",
          height: "66px",
          margin: "auto",
          maxWidth: "1352px",
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "152.99px",
              height: "43px",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box
              sx={{
                display: "inline-block",
                position: "relative",
              }}
            >
              <Button
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "27px",
                  color: "#00CCC0",
                  "&:hover": { backgroundColor: "transparent" },
                  textTransform: "none",
                  textDecoration: "underline",
                  textDecorationColor: "#00CCC0",
                  textDecorationThickness: "5px",
                  textUnderlineOffset: "6px"
                }}              >
                Home
              </Button>            </Box>
            <Button
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#000000",
                "&:hover": { backgroundColor: "transparent" },
                textTransform: "none",
              }}            >
              Product
            </Button>
            <Button
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#000000",
                "&:hover": { backgroundColor: "transparent" },
                textTransform: "none",
              }}            >
              CarbonGPT
            </Button>
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#000000",
                "&:hover": { backgroundColor: "transparent" },
                textTransform: "none",
              }}
            >
              Resources
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => setAnchorEl(null)}>Blog</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>Case Studies</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>Documentation</MenuItem>
            </Menu>
            <Button
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#000000",
                "&:hover": { backgroundColor: "transparent" },
                textTransform: "none",
              }}
            >
              Pricing
            </Button>
          </Box>
        )}

     {/* Buttons (Book a demo + Login) */}
     {!isMobile && (
      <Box sx={{ display: "flex", alignItems: "center", gap: "30px", width: "279px", height: "32.5px" }}>
       <Box
        sx={{
         display: "inline-block",
         position: "relative",
        }}
       >
        <Typography>
         <Link href="#" underline="always"
          sx={{
           fontFamily: "Poppins",
           fontSize: "16px",
           fontWeight: 600,
           lineHeight: "24px",
           color: "#00CCC0",
           textDecoration: "underline",
           textDecorationStyle: "solid",
           textDecorationSkipInk: "none",
           textTransform: "none",
           "&:hover": { backgroundColor: "#F5F5F5" },
          }}
         >
          Login
         </Link>
        </Typography>
       </Box>
       <Button
        variant="contained"
        sx={{
         backgroundColor: "#00CCC0",
         borderRadius: "10px",
         width: "182px",
         height: "48px",
         fontFamily: "Poppins",
         fontSize: "15px",
         fontWeight: 500,
         lineHeight: "22.5px",
         color: "#FFFFFF",
         textTransform: "none",
         paddingLeft: "30px",
         paddingRight: "30px",
         "&:hover": { backgroundColor: "#00B3A6" },
        }}
       >
        Book a demo
       </Button>
      </Box>)}

        {isMobile && (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}
              sx={{ color: "#000000" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ display: { md: "none" } }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Typography>Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Typography>Product</Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Typography>CarbonGPT</Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Typography>Resources</Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Typography>Pricing</Typography>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant="outlined"
                  sx={{
                    width: "100%",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#000000",
                    border: "1px solid #999999",
                    textTransform: "none",
                  }}
                >
                  Login
                </Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "#00CCC0",
                    fontFamily: "Poppins",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    textTransform: "none",
                  }}
                >
                  Book a demo
                </Button>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;