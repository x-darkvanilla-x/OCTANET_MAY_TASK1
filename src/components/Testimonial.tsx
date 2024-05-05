import {
  Stack,
  useMediaQuery,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Rating,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const testimonials = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3l-A9G59MktCJAMoUk1dXK4SvkP6wbBn_tawtczKRmTji4LhPh_lIoCsbVa_wQFwvYY&usqp=CAU",
    rating: 4.5,
    text: "Working with Livspace was a fantastic experience. From the initial consultation to the final installation, everything was seamless and professional",
    name: "John D",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZHshNWwR3pXp7Hh83xsLyecINbCAWaja8iizYC2-wRheNNOne_e-rsxiDgctrUPJt5V4&usqp=CAU",
    rating: 5,
    text: "Livspace helped me create a space that reflects my personality and style. I couldn't be happier with the results!",
    name: "Laura A",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrBKTUXdBQWmVQqGyduOhYJpEeUE-SPfy2SZcPFJzlw&s",
    rating: 5,
    text: "The team at Livspace is incredibly talented and dedicated. They listened to my ideas and turned them into reality, creating a home that feels uniquely mine.",
    name: "Sarah M",
  },
];

export const Testimonial = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {/* Testimonials */}
      <Stack
        gap={3}
        sx={{
          backgroundImage:
            "url('https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-living-room-interior-design-with-gold-chandelier.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Stack
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          sx={{
            width: "100%",
            padding: "50px 0px",
            overflow: "hidden",
            zIndex: "2",
            "& > *": { margin: "10px", width: "350px" },
          }}
          justifyContent={"center"}
        >
          {testimonials.map((card, index) => (
            <Card
              key={index}
              data-aos={isMobile ? "null" : "fade-left"}
              data-aos-delay={index * 200}
              data-aos-easing="ease-in-out"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20px 20px 0px 20px",
              }}
            >
              <CardMedia
                component="img"
                alt="Abstract Art"
                image={card.image}
                sx={{ aspectRatio: "1/1", width: "100px", borderRadius: "50%" }}
              />
              <CardContent>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  <Rating
                    name="customized-color"
                    value={card.rating}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    readOnly
                  />
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  textAlign={"left"}
                >
                  {card.text}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  textAlign={"right"}
                >
                  - {card.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0,0,0,0.3)",
            position: "absolute",
            zIndex: "1",
          }}
        ></Stack>
      </Stack>
    </>
  );
};
