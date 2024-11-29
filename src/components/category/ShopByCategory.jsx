
import './ShopByCategory.css';

// Import images
import c1 from '../../assets/images/images/c1.webp';
import c2 from '../../assets/images/images/c2.webp';
import c3 from '../../assets/images/images/c3.webp';
import c4 from '../../assets/images/images/c4.webp';
import c5 from '../../assets/images/images/c5.webp';
import c6 from '../../assets/images/images/c6.webp';
import c7 from '../../assets/images/images/c7.webp';
import c8 from '../../assets/images/images/c8.webp';
import c9 from '../../assets/images/images/c9.webp';
import c10 from '../../assets/images/images/c10.webp';
import c11 from '../../assets/images/images/c11.webp';
import c12 from '../../assets/images/images/c12.webp';
import c13 from '../../assets/images/images/c13.webp';
import c14 from '../../assets/images/images/c14.webp';
import c15 from '../../assets/images/images/c15.webp';
import c16 from '../../assets/images/images/c16.webp';
import c17 from '../../assets/images/images/c17.webp';
import c18 from '../../assets/images/images/c18.webp';
import c19 from '../../assets/images/images/c19.webp';
import c20 from '../../assets/images/images/c20.webp';
import c21 from '../../assets/images/images/c21.webp';
import c22 from '../../assets/images/images/c22.webp';
import c23 from '../../assets/images/images/c23.webp';
import c24 from '../../assets/images/images/c24.webp';
import { useNavigate } from "react-router-dom";
const images = [
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, 
  c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24
];

const ShopByCategory = () => {
    
   
    
  return (
    
    <section className="shop-by-category">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {images.map((image, index) => (
          <div className="category-item" key={index} >
            <img src={image} alt={`Category ${index + 1}`} />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
