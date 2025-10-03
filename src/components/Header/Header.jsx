import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { TbShoppingCartHeart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import Navbar from "./Navbar";
import Search from "../Search/Search";
import Tooltip from "@mui/material/Tooltip";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="top-0 z-50 w-full py-3 bg-gray-100 border-b-2 border-gray-300 rounded-sm ">
       
        <div className="container items-center justify-between hidden py-2 mx-auto text-sm border-b md:flex">
          <p className="w-full ">
            Get up to 50% off — limited time only!
          </p>
          <ul className="flex items-center gap-4 whitespace-nowrap">
            <li>
              <Link
                to="/help-center"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/order-tracking"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Order Tracking
              </Link>
            </li>
          </ul>
          </div>
        
      {/* Top section: logo + navbar + actions */}
      <div className="container flex items-center justify-between pb-2 border-b-2 border-gray-200 md:border-none">
        {/* Left: Logo + Navbar */}
        <div className="flex items-center w-full md:w-auto md:justify-start">
          
          {/* Mobile logo */}
          <Link to="/" className="md:hidden">
            <img src="./logo.jpg" alt="logo" className="object-contain w-16" />
          </Link>
          
         {/* Desktop logo */}
          <Link to="/" className="hidden md:block">
            <img src="./logo.jpg" alt="logo" className="object-contain w-16" />
          </Link>
          
          {/* Navbar */}
          <div className="">
            <Navbar />
          </div>

         
        </div>

        {/* Right: Login/Register + Wishlist + Cart */}
        <div className="flex items-center justify-center gap-1 pr-2">
          <div className="flex items-center gap-1 text-gray-700">
            <Link to="/login" className="hover:text-gray-900">
              Login
            </Link>
            /
            <Link to="/register" className="hover:text-gray-900">
              Register
            </Link>
          </div>
    <Tooltip title="Wishlist" placement="bottom">
          <IconButton>
            <StyledBadge badgeContent={4} color="secondary">
              <FaRegHeart className="text-xl" />
            </StyledBadge>
          </IconButton>
          </Tooltip>

 <Tooltip title="Cart" placement="bottom">
          <IconButton>
            <StyledBadge badgeContent={4} color="secondary">
              <TbShoppingCartHeart className="text-xl" />
            </StyledBadge>
          </IconButton>
           </Tooltip>
        </div>
      </div>

      {/* Search Bar */}
      
        <Search />
        
      
    </header>
  );
};

export default Header;
