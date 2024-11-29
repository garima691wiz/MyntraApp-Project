import  { useState } from "react";
import myntraLogo from "../../assets/Myntra-Logo.png"; // Use the Myntra logo image
import SearchIcon from "@mui/icons-material/Search";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/MyntraSlice";
import { IoPersonOutline } from "react-icons/io5";

const Navbar1 = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const products = useSelector((state) => state.MyntraReducer.products);
  const userInfo = useSelector((state) => state.MyntraReducer.userInfo);

  const handleSearch = () => {
    dispatch(setSearchTerm(searchInput));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={myntraLogo}
            alt="Myntra Logo"
            className="h-20 w-auto transform hover:scale-105 transition duration-300"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
     
           <li>Men</li> 
           <li> Women</li> 
           <li>Kids</li> 
           <li>Home & Living</li> 
           <li>Beauty</li> 
           
          
            
          
            
          
            
         
        </ul>

        {/* Search Bar */}
        <div className="relative flex items-center max-w-[400px] w-full">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
            placeholder="Search for products, brands, and more..."
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 bg-pink-600 p-2 rounded-full text-white hover:bg-pink-700 transition"
          >
            <SearchIcon />
          </button>
        </div>

        {/* User Info and Cart */}
        <div className="flex items-center gap-6 text-gray-800">
          {/* User Profile */}
          <Link
            to="/signin"
            className="flex items-center gap-1 hover:text-pink-600 transition"
          >
            <div><IoPersonOutline size={30} style={{ color: "black" }} />Profile</div>
            <span className="text-sm font-medium">
              {userInfo?.data?.user?.name || ""}
              
            </span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center hover:text-pink-600 transition"
          >
              <div>  <CiHeart size={30} style={{ color: "black" }} />WishList</div>
            <span className="absolute -top-1 -right-3 text-xs bg-pink-600 text-white rounded-full px-2 py-0.5 font-bold">
              {products.length > 0 ? products.length : 0|| "WishList"}
            </span>
          </Link>
        <div>
          <IoBagOutline size={30} style={{ color: "black" }} />
          Bag
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar1;
