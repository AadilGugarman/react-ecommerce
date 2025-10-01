import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { TbShoppingCartHeart, TbTruckDelivery } from "react-icons/tb";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import Tooltip from "@mui/material/Tooltip";

import Navbar from "./Navbar";
import "./Header.css";

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
    <header className="w-full header">
    
      <div className="hidden text-sm text-gray-600 bg-gray-100 lg:flex">
        <div className="container flex flex-col items-center justify-between gap-2 px-6 py-2 mx-auto md:flex-row">
          <p className="hidden w-full text-center md:text-left md:w-auto md:flex">
            Get up to 50% off — limited time only!
          </p>

          {/* Icons Inline */}
          <div className="flex items-center justify-center w-full gap-4 text-center md:w-auto">
            <span className="flex items-center gap-1 font-medium text-blue-600 te">
              <TbTruckDelivery className="text-xl " />
              Free Delivery
            </span>
            <span className="flex items-center gap-1 font-medium text-green-600">
              <MdPayment className="text-xl" />
              Secure Payment
            </span>
            <span className="flex items-center gap-1 font-medium text-red-600">
              <GiReturnArrow className="text-xl" />
              Easy Returns
            </span>
          </div>

          <ul className="flex flex-col items-center w-full gap-2 text-center md:flex-row md:gap-4 md:text-left md:w-auto">
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
      </div>

      {/* Main Header */}
      <div className="border-y border-zinc-100">
        <div className="container flex flex-col items-center gap-3 px-6 py-3 mx-auto md:flex-row">
          {/* Logo */}
          <div className="flex justify-center w-full mb-2 md:justify-start md:w-1/4 md:mb-0">
            <Link to="/">
              <img src="./logo.jpg" alt="logo" className="w-24 md:w-28" />
            </Link>
          </div>

          {/* Search */}
          <div className="w-full mb-2 md:w-1/2 md:mb-0">
            <Search />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center w-full gap-2 md:justify-end md:gap-4 md:w-1/4">
            <div className="mb-2 text-center md:text-left md:mb-0">
              <Link
                to="/login"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Login
              </Link>
              <span className="mx-1">/</span>
              <Link
                to="/register"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Register
              </Link>
            </div>

            <div className="flex gap-2 md:gap-3">
              <Tooltip title="Compare" placement="bottom">
                <IconButton aria-label="compare">
                  <StyledBadge badgeContent={4} color="secondary">
                    <LuGitCompareArrows />
                  </StyledBadge>
                </IconButton>
              </Tooltip>

              <Tooltip title="Wishlist" placement="bottom">
                <IconButton aria-label="wishlist">
                  <StyledBadge badgeContent={4} color="secondary">
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
              </Tooltip>

              <Tooltip title="Cart" placement="bottom">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <TbShoppingCartHeart />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
