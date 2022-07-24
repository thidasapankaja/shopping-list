import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/18769028_40547184.png";
import img2 from "../../assets/13158083_38098584.png";
import img3 from "../../assets/17616711_36735285.png";
import img4 from "../../assets/18769028_40547184.png";

const carouselList = [
  {
    name: 'AIR FORCE 1 LOW `07 "White on White"',
    image: img1,
  },
  {
    name: 'Dunk Low "Georgetown"',
    image: img2,
  },
  {
    name: 'AIR MAX 1 "Travis Scott - Baroque Brown"',
    image: img3,
  },
  {
    name: 'LOUIS VUITTON AIR FORCE 1 LOW "Virgil Abloh - White/White"',
    image: img4,
  },
];

const TopCarosel = () => (
  <Carousel showArrows autoPlay infiniteLoop showIndicators={false}>
    {carouselList?.map((item, key) => (
      <div key={key} style={{ backgroundColor: "#a6ceff" }}>
        <img src={item.image} alt={item.name} />
        <h2 style={{ paddingBottom: "20px" }}>{item.name}</h2>
      </div>
    ))}
  </Carousel>
);

export default TopCarosel;
