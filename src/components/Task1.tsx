import {
  Stack,
  Button,
  useMediaQuery,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Rating,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Carousel from "react-material-ui-carousel";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useState } from "react";

const items = [
  {
    img: "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Interior-Design-for-open-living-and-dining-by-Laura-A.jpg",
  },
  {
    img: "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Room-Interior.jpg",
  },
  {
    img: "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Interior-Design-for-open-living-and-dining-by-Laura-A.jpg",
  },
  {
    img: "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Room-Interior.jpg",
  },
];

const accordionData = [
  {
    question: "Can I customize my order?",
    answer:
      "Yes, you can customize your order to suit your preferences. Our designers will work with you to create a personalized space that reflects your style.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The time taken to complete a project depends on the size and complexity of the project. Our team will provide you with a timeline based on your requirements.",
  },
  {
    question: "What if I'm not satisfied with the final outcome?",
    answer:
      "We strive to ensure that every customer is satisfied with their project. If you are not happy with the final outcome, please contact us, and we will work to address your concerns.",
  },
  {
    question: "Can I see a design before committing to a project?",
    answer:
      "Yes, our designers will create a design proposal for your space before you commit to a project. This allows you to see how your space will look and make any changes before work begins.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer:
      "Yes, we offer a warranty on our products. Please refer to the specific product page or contact us for more information on warranty coverage.",
  },
  {
    question: "Can I cancel or reschedule my installation?",
    answer:
      "Yes, you can cancel or reschedule your installation. Please contact us at least 48 hours before your scheduled installation date to make changes.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer financing options to help you fund your project. Please contact us for more information on our financing options.",
  },
];

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

const cards = [
  {
    "image": "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2022/11/Luxury-interior-design-home-designing-1-2048x1365.jpeg",
    "title": "Buying Homes",
    "description": "Are you house-hunting? We can help you find a home."
  },
  {
    "image": "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-interior-design-with-a-black-and-white-theme.jpg",
    "title": "Selling Homes",
    "description": "Are you thinking of selling your home? Let us help you."
  },
  {
    "image": "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Interior-Design-Kitchen.jpg",
    "title": "Relocation Services",
    "description": "Got a new job and relocating to a new place? We can help."
  }
]


export const Task1 = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange =
    (panel: number) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedIndex(isExpanded ? panel : null);
    };

  return (
    <div>
      {/* Nav Bar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black" }}
        data-aos="fade"
      >
        <Toolbar>
          <IconButton color="inherit"></IconButton>
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

      {/* Carousel Images */}
      <Carousel
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosNewIcon />}
        sx={{ margin: "50px 0px", transitionTimingFunction: "ease-in-out" }}
        autoPlay={true}
        animation="slide"
        interval={2000}
      >
        {items.map((item, index) => (
          <Paper
            key={index}
            sx={{
              width: "100%",
              aspectRatio: isMobile ? "3/4" : "4/2",
              overflow: "hidden",
            }}
          >
            <img
              src={item.img}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        ))}
      </Carousel>

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
          <Stack
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
                backgroundImage:
                  "url('https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Interior-Design-for-open-living-and-dining-by-Laura-A.jpg')",
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
              <Typography variant="h5">
                8,000 sq. ft. mixed-use property in Santa Solana
              </Typography>
              <Typography variant="body1">
                Entice prospective buyers with a clearly written description
                that lists your property's most attractive feature.
              </Typography>
              <Button
                variant="outlined"
                component="span"
                sx={{ width: "fit-content" }}
              >
                Inquire Now
              </Button>
            </Stack>
          </Stack>

          <Stack
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
                backgroundImage:
                  "url('https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/Luxury-Room-Interior.jpg')",
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
              <Typography variant="h5">
                Classic suburban home 3BR with parking and backyard patio
              </Typography>
              <Typography variant="body1">
                Entice prospective buyers with a clearly written description
                that lists your property's most attractive feature.
              </Typography>
              <Button
                variant="outlined"
                component="span"
                sx={{ width: "fit-content" }}
              >
                Inquire Now
              </Button>
            </Stack>
          </Stack>

          <Stack
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
                backgroundImage:
                  "url('https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-acd415b/www.decorilla.com/online-decorating/wp-content/uploads/2020/08/luxury-living-room-interor-design-with-dramatic-floor-to-ceiling-windows.jpg')",
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
              <Typography variant="h5">
                2BR apartment in uptown Belden Park
              </Typography>
              <Typography variant="body1">
                Entice prospective buyers with a clearly written description
                that lists your property's most attractive feature.
              </Typography>
              <Button
                variant="outlined"
                component="span"
                sx={{ width: "fit-content" }}
              >
                Inquire Now
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

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

      {/* FAQ */}
      <Stack gap={3} sx={{ margin: "80px 0px" }} data-aos={isMobile ? "null" : "fade"}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center" }}
        >
          Frequently Asked Questions
        </Typography>
        <Stack justifyContent={"center"} alignItems={"center"}>
          {accordionData.map((accordion, index) => (
            <Accordion
              key={index}
              expanded={expandedIndex === index}
              onChange={handleChange(index)}
              sx={{ width: "90%" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6" color={"primary"}>
                  {accordion.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{accordion.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>

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
    </div>
  );
};
