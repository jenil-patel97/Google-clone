import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Logo from "../assets/Google-Search-Logo.png";
import { TbGridDots } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import { BiImage, BiNews } from "react-icons/bi";
import {
  AiOutlinePlaySquare,
  AiOutlineBook,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { useStateValue } from "../store/StateProvider";
import GoogleSearch from "../components/GoogleSearch";

const SearchPage = () => {
  const [{ term }] = useStateValue();
  const { data } = GoogleSearch(term);
  console.log(term);

  return (
    <div>
      <form className="flex top-0 z-[100] items-start p-7 border-b border-gray-300 -mt-5">
        <Link to="/">
          <img
            className="h-[30px] mr-12 w-[92px] mt-8"
            src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="logo"
          />
        </Link>

        <div>
          <Search hideBtn />

          <div className="flex items-center text-gray-500 mt-[25px] space-x-7">
            <div className="flex items-center">
              <img src={Logo} alt="logo" className="w-5" />
              <Link to="/all" className="text-gray-600 ml-2">
                All
              </Link>
            </div>
            <div className="flex items-center">
              <BiImage />
              <Link to="/all" className="text-gray-600 ml-2">
                Images
              </Link>
            </div>
            <div className="flex items-center">
              <AiOutlinePlaySquare />
              <Link to="/all" className="text-gray-600 ml-2">
                Videos
              </Link>
            </div>
            <div className="flex items-center">
              <BiNews />
              <Link to="/all" className="text-gray-600 ml-2">
                News
              </Link>
            </div>
            <div className="flex items-center">
              <AiOutlineBook />
              <Link to="/all" className="text-gray-600 ml-2">
                Book
              </Link>
            </div>
            <div className="flex items-center">
              <FiMoreVertical />
              <Link to="/all" className="text-gray-600 ml-1">
                More
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/tools" className="text-gray-600 ml-2">
                Tools
              </Link>
            </div>
          </div>
        </div>

        <div className="flex space-x-6 text-gray-700 mt-8 ml-[450px]">
          <AiOutlineSetting size={23} />
          <TbGridDots size={23} />
          <VscAccount size={26} />
        </div>
      </form>
      {/* Searchresults */}
      {term && (
        <div className="mt-8 max-w-[1240px] px-[180px]">
          <p className="text-gray-500 text-[14px]">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {data?.items.map((item) => (
            <div className="mt-4">
              <a href={item.link}>{item.link}</a>
              <a href={item.link}>
                <h2 className="hover:underline text-[#681da8] text-[20px] font-medium">
                  {item.title}
                </h2>
              </a>
              <p className="mt-1">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
