import React, { useState } from "react";
import Button from "../components/Button";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BadgeBasket from "./BadgeBasket";
import BadgeFavorite from "./BadgeFavorite";
import { userData } from "../helper";
import ModalSearch from "../components/ModalSearch";

const Header = ({ variant, maxW }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const headerStyle = {
    maxWidth: maxW,
  };
  const navigate = useNavigate();
  const { jwt } = userData();
 

  return (
    <div
      style={headerStyle}
      className="flex mx-auto py-9 items-center h-[58px] w-[1290px] container"
    >
      <h3 className="h3 text-dark grow">Iconfood</h3>

      <ul className="flex gap-[20px] grow link text-dark sm:hidden md:flex ">
        <li className="hover:scale-125">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="hover:scale-125">
          <NavLink
            to="/productlist"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Shop
          </NavLink>
        </li>
        <li className="hover:scale-125 ">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="hover:scale-125">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li className="hover:scale-125">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>

        <li className="hover:scale-125">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/faq"
          >
            FAQ
          </NavLink>
        </li>
        <li className="hover:scale-125">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/team"
          >
            Team
          </NavLink>
        </li>
      </ul>
      {variant === "primary" && (
        <div className="grow-1 flex gap-[30px] justify-end text-acsent">
          <div className=" sm:hidden lg:flex font-bold font-[Montserrat] leading-[24px] tracking-[0.2px] font-[14px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            {!jwt ? (
              <ul className="flex justify-center items-center">
                <li>
                  {" "}
                  <Link className="hover:scale-75" to="/signin">
                    Login
                  </Link>{" "}
                </li>
                <li>
                  <Link className="hover:scale-75" to="/signup">
                    / Register
                  </Link>
                </li>
              </ul>
            ) : (
              <button
                onClick={() => {
                  localStorage.setItem("user", "");
                  navigate("/signin");
                }}
              >
                Logout
              </button>
            )}
          </div>
          <div>
            <button onClick={() => setIsModalOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hover:scale-125"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <ModalSearch
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>

          <button
            className=" hover:scale-125"
            onClick={() => navigate("/basket")}
          >
            <BadgeBasket />
          </button>
          <button
            className=" hover:scale-125"
            onClick={() => navigate("/favorite")}
          >
            <BadgeFavorite />
          </button>
        </div>
      )}
      {variant === "secondary" && !jwt ? (
        <div className="flex gap-[45px] items-center">
          <NavLink
            className="btn-text text-acsent hover:scale-125"
            to="/signin"
          >
            Login{" "}
          </NavLink>
          <Button
            w="216px"
            h="45px"
            back="#B73225"
            textColor="white"
            p="0px 25px"
            radius="5px"
            text="Become a member ->"
            id="fullfiled-btn"
          />
        </div>
      ) :    null 
      }
    </div>
  );
};

export default Header;
