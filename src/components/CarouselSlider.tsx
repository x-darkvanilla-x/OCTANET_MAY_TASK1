import { Paper, useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const items = [
  {
    img: "https://www.decorilla.com/online-decorating/wp-content/uploads/2019/06/modern-interior-design-grey-living-room2-scaled.jpeg",
  },
  {
    img: "https://thermory.com/wp-content/uploads/2022/03/Thermory-Benchmark-thermo-ash-D4-D4-SG2-cladding-ceiling.-Developer-Interfaca_-1600x1068.jpg",
  },
  {
    img: "https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg",
  },
  {
    img: "https://www.milindpai.com/wp-content/uploads/2023/03/maxresdefault.jpg",
  },
];

export const CarouselSlider = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
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
              aspectRatio: isMobile ? "8/4" : "4/2",
              overflow: "hidden",
            }}
          >
            <img
              src={item.img}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt={`slide-${index}`}
            />
          </Paper>
        ))}
      </Carousel>
    </>
  );
};
