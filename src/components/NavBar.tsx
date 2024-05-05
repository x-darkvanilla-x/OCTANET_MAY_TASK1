import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {/* Nav Bar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
        data-aos="fade"
      >
        <Toolbar>
          <IconButton color="inherit" sx={{ fontSize: "inherit" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/5047/5047345.png"
              alt="Icon"
              style={{ height: "2em", width: "auto" }}
            />
          </IconButton>
          <Typography variant="h6" flexGrow={1}>
            LivSpace
          </Typography>
          {isMobile ? (
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction={"row"} gap={3}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Gallery</Button>
              <Button color="inherit">Services</Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
