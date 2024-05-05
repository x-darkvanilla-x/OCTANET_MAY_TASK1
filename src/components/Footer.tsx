import { Stack, useMediaQuery, Typography } from "@mui/material";

export const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {/* Footer */}
      <Stack
        display={"flex"}
        flexDirection={isMobile ? "column" : "row"}
        padding={isMobile ? "10px 20px" : "0px"}
        flexWrap={"wrap"}
        gap={5}
        justifyContent={"space-around"}
        sx={{ margin: "50px 0px" }}
      >
        <Stack gap={1}>
          <Typography variant="h5">LivSpace</Typography>
          <Typography variant="body1">example@gmail.com</Typography>
        </Stack>
        <Stack gap={3}>
          <Stack gap={1}>
            <Typography variant="h5">Office Address</Typography>
            <Typography variant="body2">
              123 Anywhere St., Any City, State, Country 12345
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant="h5">Phone Number</Typography>
            <Typography variant="body2">(123) 456 7890</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
