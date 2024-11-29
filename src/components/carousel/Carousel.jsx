import  { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 80%; 
  overflow: hidden;
  margin: 20px auto;
  border: 2px solid #ddd;
  border-radius: 10px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}px);
`;

const ProductCard = styled.div`
  min-width: 200px; 
  margin: 0 10px;
  text-align: center;

  img {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    object-fit: cover;
    border-radius: 10px;
  }

  p {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: #f5f5f5;
  }

  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}
`;

const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideWidth = 220; // width + margin
  const maxIndex = products.length - 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <CarouselContainer>
      
      <CarouselWrapper translate={-currentIndex * slideWidth}>
      <Button left onClick={handlePrev}>◀</Button>
       {products.map((product) => (
          <ProductCard key={product.id} width={product.width} height={product.height}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </ProductCard>
        ))}
        <Button onClick={handleNext}>▶</Button>
      </CarouselWrapper>
      
    </CarouselContainer>
  );
};

export default Carousel;
