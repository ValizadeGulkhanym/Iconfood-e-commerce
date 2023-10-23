import React from "react";
import Header from "../components/Header";
import FooterLight from "../components/FooterLight";
import { Link, NavLink } from "react-router-dom";
import Button from "../components/Button";

const Team = () => {
  return (
    <div>
      <Header variant="secondary" />
      <div className="flex flex-col items-center justify-center my-[80px]">
        <h5 className="h5 text-gray">WHAT WE DO</h5>
        <h2 className="h2 text-dark">Innovation tailored for you</h2>
        <div className="w-[112px] h-[40px] flex justify-between items-center">
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

      <div className="grid grid-cols-2">
        <div>
          <img src="../src/assets/cheesecake.png" alt="" />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-2.5">
          <img src="../src/assets/office.png" alt="" />
          <img src="../src/assets/2.png" alt="" />
          <img src="../src/assets/cake.png" alt="" />
          <img src="../src/assets/rols.png" alt="" />
        </div>
      </div>

      <h2 className="h2 text-dark font-[Montserrat] text-center my-[112px]">
        Meet Our Team
      </h2>
      <div className="team-cards w-[1050px] mb-[117px] flex justify-between mx-auto">
        <div className="w-[316px] flex flex-col">
          <img
            className="hover:scale-125"
            width="316"
            src="./src/assets/user-1.jpg"
            alt="img"
          />
          <div className="my-[30px] flex gap-2.5 flex-col items-center justify-center">
            <h5 className="h5 text-dark">Username</h5>
            <h6 className="h6 text-gray">Profession</h6>
            <div className="flex gap-[20px]">
              <img
                className="hover:scale-125"
                src="..\src\assets\facebook-filled.png"
              />
              <img
                className="hover:scale-125"
                src="..\src\assets\instagram-outlined.png"
              />
              <img
                className="hover:scale-125"
                src="..\src\assets\twitter-outlined.png"
              />
            </div>
          </div>
        </div>

        <div className="w-[316px] flex flex-col ">
          <img
            className="hover:scale-125"
            width="316"
            src="./src/assets/user-2.jpg"
            alt="img"
          />
          <div className="my-[30px] flex gap-2.5 flex-col items-center justify-center">
            <h5 className="h5 text-dark">Username</h5>
            <h6 className="h6 text-gray">Profession</h6>
            <div className="flex gap-[20px]">
              <img
                className="hover:scale-125"
                src="..\src\assets\facebook-filled.png"
              />
              <img
                className="hover:scale-125"
                src="..\src\assets\instagram-outlined.png"
              />
              <img
                className="hover:scale-125"
                src="..\src\assets\twitter-outlined.png"
              />
            </div>
          </div>
        </div>

        <div className="w-[316px] flex flex-col ">
          <img
            className="hover:scale-125"
            width="316"
            src="./src/assets/user-3.jpg"
            alt="img"
          />
          <div className="my-[30px] flex gap-2.5 flex-col items-center justify-center">
            <h5 className="h5 text-dark">Username</h5>
            <h6 className="h6 text-gray">Profession</h6>
            <div className="flex gap-[20px]">
              <img
                className="hover:scale-125"
                src="..\src\assets\facebook-filled.png"
              />
              <img
                className="hover:scale-125"
                src="..\src\assets\instagram-outlined.png"
              />
              <img
                className="hover:scale-125"
                src="..\src\assets\twitter-outlined.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col y-[80px] items-center justify-center mx-auto  gap-[30px]">
        <h2 className="h2 text-dark">Start your 14 days free trial</h2>
        <p className="paragraph text-gray text-center w-[416px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <Button
          font="700"
          text="Try it free now"
          textColor="#fff"
          border="1px solid #B73225"
          back="#B73225"
          radius="5px"
          p="15px 40px"
          w="191px"
          id="fullfiled-btn"
          h="52px"
        />
        <div className="flex gap-[2.1rem]">
          <Link to="https://www.twitter.com">
            <img
              className="hover:scale-125"
              src="../src/assets/dark_twitter.png"
              alt="img"
            />
          </Link>
          <Link to="https://www.facebook.com">
            <img
              className="hover:scale-125"
              src="../src/assets/dark_facebook.png"
              alt="img"
            />
          </Link>
          <Link to="https://www.instagram.com/accounts/login/">
            <img
              className="hover:scale-125"
              src="../src/assets/dark_instagram.png"
              alt="img"
            />
          </Link>
          <Link to="https://www.linkedin.com">
            <img
              className="hover:scale-125"
              src="../src/assets/dark-linkedin.png"
              alt="img"
            />
          </Link>
        </div>
      </div>
      <FooterLight />
    </div>
  );
};

export default Team;
