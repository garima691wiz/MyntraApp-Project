

import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import ShopByCategory from "../../components/category/ShopByCategory";
import Carousel from "../../components/carousel/Carousel"; // Adjust the path if necessary
import a1 from '../../assets/images/a1.webp'
import a2 from '../../assets/images/a2.webp'
import a3 from '../../assets/images/a3.webp'
import a4 from '../../assets/images/a4.webp'
import a5 from '../../assets/images/a5.webp'
import a6 from '../../assets/images/a6.webp'
import a7 from '../../assets/images/a7.webp'
import a8 from '../../assets/images/a8.webp'
import a9 from '../../assets/images/a9.webp'
import a10 from '../../assets/images/a10.webp'
import a11 from '../../assets/images/a11.webp'
import a12 from '../../assets/images/a12.webp'
import a13 from '../../assets/images/a13.webp'
import a14 from '../../assets/images/a14.webp'
import a15 from '../../assets/images/a15.webp'
import a16 from '../../assets/images/a16.webp'
import ProductCard from "../../components/Product/ProductCard";

const products = [
  {
    id: 1,
   
    image: a10,
    width: 200, // Define image width in pixels
    height: 300, // Define image height in pixels
  },
  {
    id: 2,
    
    image:a11,
    width: 200,
    height: 300,
  },
  {
    id: 3,
     
    image: a12,
    width: 200,
    height: 300,
  },
  {
    id: 4,
     
    image: a1,
    width: 200,
    height: 300,
  },
  {
    id: 5,
    
    image: a2,
    width: 200,
    height: 300,
  },
  {
    id: 6,
    
    image: a3,
    width: 200,
    height: 300,
  },
  {
    id: 7,
    
    image:a4,
    width: 200,
    height: 300,
  },
  {
    id: 8,
     
    image: a5,
    width: 200,
    height: 300,
  },
  {
    id: 9,
     
    image: a6,
    width: 200,
    height: 300,
  },
  {
    id: 10,
     
    image: a7,
    width: 200,
    height: 300,
  },
  {
    id: 11,
 
    image: a8,
    width: 200,
    height: 300,
  },
  {
    id: 12,
    
    image: a9,
    width: 200,
    height: 300,
  },
  {
    id: 13,
     
    image: a10,
    width: 200,
    height: 300,
  },
  {
    id: 14,
    
    image: a11,
    width: 200,
    height: 300,
  },
  {
    id: 15,
    
    image: a12,
    width: 200,
    height: 300,
  },

  {
    id: 16,
    
    image: a13,
    width: 200,
    height: 300,
  },
  {
    id: 17,
     
    image: a14,
    width: 200,
    height: 300,
  }, {
    id: 18,
     
    image: a15,
    width: 200,
    height: 300,
  },
  {
    id: 19,
     
    image: a16,
    width: 200,
    height: 300,
  }
];


const HomePage = () => {
  return (
    <div>
     
      <Banner />
      
      {/* Integrate Carousel here */}
      <div className="carousel-section" style={{ margin: "20px 0" }}>
        <Carousel products={products} />
      </div>

     <ShopByCategory/>
     <div className="w-full bg-gray-100 -mt-16 lgl:-mt-24 xl:-mt-36 py-10">
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
