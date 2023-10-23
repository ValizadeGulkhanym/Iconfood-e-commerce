import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import FooterDark from "../components/FooterDark";
const Page404 = () => {
  const navigate= useNavigate();
  return (
    <div>
      <Header variant="secondary" />
      <div className="max-w-[112px] min-h-[40px] flex flex-col mx-auto  py-[84px] items-center">
        <h1 className="h1 text-dark">404</h1>
        <div className="flex gap-[15px] ">
          <NavLink className="link text-dark" to="/">
            Home
          </NavLink>
          <img
            className="w-[9px] h-[16px]"
            src="../src/assets/icn arrow-right.png"
          />
          <NavLink className="h6 text-gray" to="/productlist">
            Shop
          </NavLink>
        </div>
      </div>

      <div className="bg-[#FAFAFA] pt-[45px] pb-[125px]  w-full font-[Montserrat] flex flex-col gap-[48px] items-center ">
        <div className="robot ralative mx-auto">
          <img src="../src/assets/robot.png" alt="img" />
          <div className="absolute right-[550px] top-[390px]">
            <img className="hover:scale-125" src="../src/assets/speech.png" alt="img" />
          </div>
        </div>

        <h2 className="h2 text-dark hover:scale-125 ">Oops...</h2>
        <h4 className="h4 text-gray">
          We can’t seem to find the page you’re looking for.
        </h4>

        <Button onClick={() =>navigate('/')}
          text="< Back to Home"
          back="#2DC071"
          w="181px"
          h="52px"
          p="15px 25px"
          textColor="white"
          id="green-btn"
          radius="5px"
        />
        <h3 className="h3 text-dark ">Are you looking for...</h3>

        <li className="hover:scale-125 list-none  link text-dark flex items-center justify-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-acsent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="hover:scale-125 list-none  link text-dark flex items-center justify-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-acsent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li className="hover:scale-125 list-none  link text-dark flex items-center justify-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-acsent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </div>

      <FooterDark />
    </div>
  );
};

export default Page404;
