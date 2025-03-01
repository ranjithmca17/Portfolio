import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"; 
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.png";


const CardSlider = () => {
  // Array of card data
  const cards = [
    { id: 1, title: "Card 1", image: img1 },
    { id: 2, title: "Card 2", image: img2 },
    { id: 3, title: "Card 3", image:img3 },
    { id: 4, title: "Card 4", image: img4 },
    { id: 5, title: "Card 5", image:img5 },
    { id: 6, title: "Card 6", image: img6 },
    { id: 7, title: "Card 7", image: "https://via.placeholder.com/300" },
    { id: 8, title: "Card 8", image: "https://via.placeholder.com/300" },
    { id: 9, title: "Card 9", image: "https://via.placeholder.com/300" },
    { id: 10, title: "Card 10", image: "https://via.placeholder.com/300" }
  ];

  // Slick slider settings
  const settings = {
    dots: true,               // Show navigation dots
    infinite: true,           // Infinite looping
    speed: 500,               // Transition speed
    slidesToShow: 3,          // Show 3 cards at a time
    slidesToScroll: 1,        // Slide one by one
    autoplay: true,           // Auto-slide
    autoplaySpeed: 2000,      // 2 seconds per slide
    pauseOnHover: true,       // Pause on hover
    arrows: true,             // Show previous/next arrows
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
