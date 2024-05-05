import { Stack, Button, useMediaQuery, Box, Typography } from "@mui/material";

const listingData = [
  {
    title: "8,000 sq. ft. mixed-use property in Santa Solana",
    description:
      "Entice prospective buyers with a clearly written description that lists your property's most attractive feature.",
    image:
      "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Interior-Design-for-open-living-and-dining-by-Laura-A.jpg",
  },
  {
    title: "Classic suburban home 3BR with parking and backyard patio",
    description:
      "Entice prospective buyers with a clearly written description that lists your property's most attractive feature.",
    image:
      "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Room-Interior.jpg",
  },
  {
    title: "2BR apartment in uptown Belden Park",
    description:
      "Entice prospective buyers with a clearly written description that lists your property's most attractive feature.",
    image:
      "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/luxury-living-room-interor-design-with-dramatic-floor-to-ceiling-windows.jpg",
  },
];

export const Listings = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {/* Current Listings */}
      <Stack gap={3} sx={{ margin: "50px 0px" }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center" }}
          data-aos={isMobile ? "null" : "fade"}
        >
          Our Current Listings
        </Typography>
        <Stack>
          {listingData.map((listing, index) => (
            <Stack
              key={index}
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              gap={5}
              justifyContent={"center"}
            >
              <Box
                sx={{
                  width: "300px",
                  height: "300px",
                  backgroundImage: `url('${listing.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                data-aos={isMobile ? "null" : "fade"}
              ></Box>
              <Stack
                gap={3}
                sx={{ margin: "20px", marginBottom: "50px" }}
                direction={"column"}
                display={"flex"}
                justifyContent={"center"}
                data-aos={isMobile ? "null" : "fade-right"}
                data-aos-easing="ease-in-out"
              >
                <Typography variant="h5">{listing.title}</Typography>
                <Typography variant="body1">{listing.description}</Typography>
                <Button
                  variant="outlined"
                  component="span"
                  sx={{ width: "fit-content" }}
                >
                  Inquire Now
                </Button>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};
