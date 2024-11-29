import { useState, useEffect } from "react";
import "./Banner.css";
import b3 from "../../assets/banner/banner1.webp";
import b2 from "../../assets/banner/banner2.webp";
import b1 from "../../assets/banner/black-fridayy.webp";
import b4 from "../../assets/banner/banner4.jpg";
import b5 from "../../assets/banner/banner5.jpg";
import b6 from "../../assets/banner/banner6.webp";
import b7 from "../../assets/banner/banner.7.webp";
import b8 from "../../assets/banner/banner8.webp";
import b9 from "../../assets/banner/banner9.webp";

const images = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically move the slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={prevSlide}>
        ❮
      </button>
      <div className="carousel-images">
        <img src={images[currentIndex]} alt={`Banner ${currentIndex + 1}`} />
      </div>
      <button className="carousel-btn next" onClick={nextSlide}>
        ❯
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
