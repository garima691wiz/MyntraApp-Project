import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        borderTop: "1px solid #ddd",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        {/* Online Shopping Section */}
        <Box sx={{ flex: "1 1 calc(25% - 20px)", minWidth: "200px" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            ONLINE SHOPPING
          </Typography>
          {[
            "Men",
            "Women",
            "Kids",
            "Home & Living",
            "Beauty",
            "Gift Cards",
            "Myntra Insider",
          ].map((item, index) => (
            <Typography key={index} variant="body2" sx={{ marginBottom: "8px" }}>
              <Link href="#" underline="none" color="textSecondary">
                {item}
              </Link>
            </Typography>
          ))}
        </Box>

        {/* Customer Policies Section */}
        <Box sx={{ flex: "1 1 calc(25% - 20px)", minWidth: "200px" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            CUSTOMER POLICIES
          </Typography>
          {[
            "Contact Us",
            "FAQ",
            "T&C",
            "Terms Of Use",
            "Track Orders",
            "Shipping",
            "Cancellation",
            "Returns",
            "Privacy Policy",
            "Grievance Officer",
          ].map((item, index) => (
            <Typography key={index} variant="body2" sx={{ marginBottom: "8px" }}>
              <Link href="#" underline="none" color="textSecondary">
                {item}
              </Link>
            </Typography>
          ))}
        </Box>

        {/* Mobile App Section */}
        <Box sx={{ flex: "1 1 calc(25% - 20px)", minWidth: "200px" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            EXPERIENCE MYNTRA APP ON MOBILE
          </Typography>
          <Box sx={{ marginBottom: "16px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Download_on_the_App_Store_Badge_US-UK_blk_092917.svg"
              alt="App Store"
              style={{ height: "40px" }}
            />
          </Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            KEEP IN TOUCH
          </Typography>
          <Box>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <YouTubeIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Guarantee Section */}
        <Box sx={{ flex: "1 1 calc(25% - 20px)", minWidth: "200px" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            100% ORIGINAL guarantee for all products at myntra.com
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "8px" }}>
            <strong>Return within 14 days</strong> of receiving your order
          </Typography>
        </Box>
      </Box>

      {/* Popular Searches */}
      <Box sx={{ marginTop: "40px" }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          POPULAR SEARCHES
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "16px" }}>
          Sherwani | Track Pants | Blazers | Sweaters For Men | Men Wedding
          Dresses | Kurta Pajama | Raincoats | Shorts | Trousers | Waistcoat |
          Inner Wear | Nightwear | Jeans | Shirts | Jogger Jeans | Men Suits |
          T Shirts | Sweatshirts | Jackets For Men | Tracksuits | Ripped Jeans |
          Ethnic Wear | Hoodies | Raksha Bandhan Gifts | Watches | Shoes | Belts |
          Swimwear | Dhotis | Boxers | Vests | Thermals | Socks | Shrugs |
          Bracelets | Rings | Sunglasses | Wallets | Bags
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "16px" }}>
          In case of any concern, <strong>Contact Us</strong>. © 2024 www.myntra.com. All rights reserved. A Flipkart company.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
