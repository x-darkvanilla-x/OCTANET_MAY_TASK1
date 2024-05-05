import {
    Typography,
    useMediaQuery,
    Box,
  } from "@mui/material";

export const About = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {/* About Section */}
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: isMobile ? "auto" : "650px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px 0px",
        }}
        gap={3}
      >
        <Typography
          variant="h5"
          width={"70%"}
          data-aos={isMobile ? "null" : "fade-up"}
          sx={{ textAlign: "center" }}
        >
          About Us
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h4"}
          width={"70%"}
          data-aos={isMobile ? "null" : "fade-up"}
          sx={{ textAlign: isMobile ? "left" : "center" }}
        >
          Winslough Homes has been selling and buying homes for more than 20
          years. We are proud to be one of the top realty companies in our city.
        </Typography>
      </Box>
    </>
  );
};
