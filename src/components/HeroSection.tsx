import {
    Typography,
    useMediaQuery,
    Box,
  } from "@mui/material";

export const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>      
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: isMobile ? "500px" : "700px",
          backgroundImage:
            "url('https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Interior-Design-for-open-living-and-dining-by-Laura-A.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          color={"white"}
          variant={isMobile ? "h4" : "h3"}
          width={"70%"}
          style={{ textShadow: "0px 0px 50px rgba(0, 0, 0)" }}
          zIndex={99}
          data-aos={isMobile ? "null" : "fade"}
        >
          Turning dream homes into reality.
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: isMobile ? "500px" : "700px",
            backgroundColor: "rgb(0,0,0, 0.2)",
            position: "absolute",
          }}
        ></Box>
      </Box>
    </>
  )
}
