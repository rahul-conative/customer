import React, { useState } from "react";
import Button from "../Button/Button";
import ImageSkeleton from "../ui/Image";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  header as categoryData,
  navbarIcons as navData,
  icons,
} from "../../constant/image.constant";
import SearchBar from "../ui/SearchBar";


export const TopHeader = () => {
  const navLinks = [
    { name: "Deals", path: "#" },
    { name: "Brand Outlet", path: "#" },
    { name: "Gift Card", path: "#" },
    { name: "Help & Contact", path: "#" },
  ];

  const watchlistData = [
    "Saved Products",
    "Recently Viewed",
    "Favourite Brands",
  ];

  const mySamData = ["My Profile", "My Orders", "Settings", "Logout"];

  const [showWatchlist, setShowWatchlist] = useState(false);
  const [showMySam, setShowMySam] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" text-[#FFFFFF] w-full  bg-[#1B1D60]  h-[39px] hidden lg:flex items-center justify-center text-[14px] leading-[24px] font-medium text-center font-['Montserrat']">
      <div className="w-container flex items-center h-full">
        <div className="flex-1 flex items-center gap-14">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6 h-full">
          <a href="#" className="">
            Become a Seller
          </a>
          <div
            className="relative flex items-center gap-1 h-full"
            onMouseEnter={() => setShowWatchlist(true)}
            onMouseLeave={() => setShowWatchlist(false)}
          >
            <button
              onClick={() => setShowWatchlist(!showWatchlist)}
              className="flex items-center gap-1"
            >
              <span>Watchlist</span>
              <ChevronDown size={18} />
            </button>

            {showWatchlist && (
              <div className="absolute top-full right-0 flex flex-col min-w-[220px] bg-white shadow-xl rounded-xl py-3 z-50 border border-gray-200">
                {watchlistData.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative flex items-center gap-1 h-full"
            onMouseEnter={() => setShowMySam(true)}
            onMouseLeave={() => setShowMySam(false)}
          >
            <button
              onClick={() => setShowMySam(!showMySam)}
              className="flex items-center gap-1"
            >
              <span>My Sam</span>
              <ChevronDown size={18} />
            </button>

            {showMySam && (
              <div className="absolute top-full right-0 flex flex-col min-w-[220px] bg-white shadow-xl rounded-xl py-3 z-50 border border-gray-200">
                {mySamData.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button
            variant="custom"
            rounded={true}
            className="font-bold border min-h-[20px] px-3"
            bgColor="#FFFFFF"
            borderColor="#CE9F2D"
            textColor="#CE9F2D"
            label="Register"
            onClick={() => navigate("/register")}
          />
        </div>
      </div>
    </div>
  );
};

export const Navbar = ({ icons: propIcons }) => {
  const displayIcons = propIcons || navData;
  const navigate = useNavigate();


  return (
    <header className="w-full">
      <div className="w-container flex flex-wrap items-center justify-between gap-3 py-2 sm:gap-4 lg:flex-nowrap lg:gap-6 lg:py-3">
        {/* 1. LOGO */}
        <div className="flex shrink-0 items-center">
          <Link to="/">
            <img
              src={icons.logo}
              alt="logo"
              className="h-auto w-[84px] object-contain sm:w-[104px] lg:h-[78px] lg:w-[141px]"
            />
          </Link>
        </div>

        {/* 2. SEARCH BAR */}
        <div className="order-3 mt-1 w-full flex-1 lg:order-none lg:mt-0 lg:w-auto">
          <SearchBar />
        </div>


        {/* 3. ICONS & ACTIONS */}
        <div className="order-2 flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-5">
          <div className="hidden items-center gap-2 lg:flex lg:gap-4">
            {displayIcons.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  to={item.path || "#"}
                  className="flex flex-col items-center cursor-pointer hover:opacity-80 px-1 lg:px-4 group"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`object-contain ${item.name === "IN"
                        ? "w-[40px] h-[29px] lg:w-[60px] lg:h-[42px]"
                        : "w-[24px] h-[24px] lg:w-[28px] lg:h-[28px]"
                      }`}
                  />
                </Link>

                {index < displayIcons.length - 1 && (
                  <div className="h-6 lg:h-8 w-[1.5px] bg-gray-200"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <Button
            variant="gradient"
            rounded={true}
            label="Create Account"
            size="md"
            className="h-[40px] lg:h-[48px] px-6 font-medium whitespace-nowrap"
            onClick={() => navigate("/register")}
          />
        </div>
      </div>
    </header>
  );
};

export const CategoryBar = ({ headerData }) => {
  const categories =
    headerData ||
    Object.entries(categoryData).map(([name, img]) => ({ name, img }));
  return (
    <header className="w-full">
      <div className="w-container hide-scrollbar flex justify-start gap-7 overflow-x-auto px-3 py-3 sm:gap-8 lg:justify-center lg:gap-12 ">
        {categories?.map((item, index) => (
          <Link
            key={index}
            to={`/categories/${item.name.toLowerCase()}`}
            className="flex flex-col items-center min-w-[70px] lg:min-w-[80px] group"
          >
            <div className="mx-auto flex items-center justify-center p-1 rounded-full group-hover:bg-white transition-all">
              <ImageSkeleton src={item?.img} alt={item?.name} />
            </div>
            <span className="text-[12px] lg:text-[14px] mt-1 text-center leading-tight whitespace-nowrap font-montserrat">
              {item?.name}
            </span>
          </Link>
        ))}
      </div>
    </header>
  );
};

export const Header = ({ navbarIcons, categoryData }) => {
  return (
    <div className="flex flex-col w-full">
      <TopHeader />
      <Navbar icons={navbarIcons} />
      <div
        className="w-full border-t border-gray-300"
        style={{
          maxWidth: "1648px",
          margin: "0 auto",
          opacity: 1,
          borderWidth: "1px",
        }}
      ></div>
      <CategoryBar headerData={categoryData} />
    </div>
  );
};

export default Header;
