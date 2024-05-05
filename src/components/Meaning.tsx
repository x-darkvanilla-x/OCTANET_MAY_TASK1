import {
    useMediaQuery,
    Box,
    Typography,
  } from "@mui/material";
  

export const Meaning = () => {
  const isMobile = useMediaQuery("(max-width:600px)");


  return (
    <>
     {/* About us */}
     <Box
        sx={{
          backgroundColor: "red",
          width: "100%",
          height: isMobile ? "auto" : "650px",
          backgroundImage:
            "url('https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Blue-paneled-wall-in-a-luxury-living-room-interior-design.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "80px 0px",
          overflow: "hidden",
          position: "relative",
        }}
        data-aos={isMobile ? "null" : "fade"}
      >
        <Typography
          color={"white"}
          variant={isMobile ? "h6" : "h3"}
          width={"70%"}
          style={{
            textShadow: "0px 0px 40px rgba(0, 0, 0, 0.5)",
            textAlign: isMobile ? "left" : "center",
            zIndex: "2",
          }}
        >
          Our real business is not selling <br /> property, but helping our
          clients make <br /> the decision that best fits them.
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0,0,0,0.3)",
            position: "absolute",
            zIndex: "1",
          }}
        ></Box>
      </Box>
    </>
  )
}
