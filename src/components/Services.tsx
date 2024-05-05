import {
  Stack,
  Button,
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
} from "@mui/material";

const cards = [
  {
    image:
      "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2022/11/Luxury-interior-design-home-designing-1-2048x1365.jpeg",
    title: "Buying Homes",
    description: "Are you house-hunting? We can help you find a home.",
  },
  {
    image:
      "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-interior-design-with-a-black-and-white-theme.jpg",
    title: "Selling Homes",
    description: "Are you thinking of selling your home? Let us help you.",
  },
  {
    image:
      "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Interior-Design-Kitchen.jpg",
    title: "Relocation Services",
    description: "Got a new job and relocating to a new place? We can help.",
  },
];

export const Services = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {/* Services */}
      <Stack gap={3} sx={{ margin: "50px 0px" }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center" }}
          data-aos={isMobile ? "null" : "fade"}
        >
          Our Services
        </Typography>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          sx={{
            "& > *": { margin: "10px", width: "350px" },
          }}
          justifyContent={"center"}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              data-aos={isMobile ? "null" : "fade-left"}
              data-aos-delay={index * 200}
              data-aos-easing="ease-in-out"
            >
              <CardMedia
                component="img"
                alt="Abstract Art"
                image={card.image}
                height="300px"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Share</Button>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Stack>
    </>
  );
};
