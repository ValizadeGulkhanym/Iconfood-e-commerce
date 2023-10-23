import React from "react";
import Button from "./Button";
import {Link} from 'react-router-dom'

const Footer = ({back}) => {
  const footerStyle={
    backgroundColor: back,
  }
  return (
    <div  className="">
      <div style={footerStyle}>
        <div className="flex items-center justify-between mx-auto h-[138px] max-w-[1050px]  ">
          <h3 className="h3 text-dark">Iconfood</h3>
          <div className="flex gap-[20px]">
          <Link to='https://www.facebook.com/'>  <img className='hover:scale-125' src="..\src\assets\facebook-filled.png" /></Link> 
         <Link to='https://www.instagram.com/'>     <img  className='hover:scale-125' src="..\src\assets\instagram-outlined.png" /></Link> 
         <Link to='https://twitter.com/'>      <img  className='hover:scale-125' src="..\src\assets\twitter-outlined.png" /></Link> 
          </div>
        </div>
      </div>
      <hr className="max-w-[1050px] mx-auto border-[#f2e8e8]" />

      <div className="footer-main    sm:flex flex-col  md:flex-row justify-between  max-w-[1050px] py-[50px] mx-auto ">
        <div className="flex-grow-2 flex gap-[63px] sm:flex-col md:flex-row">
          <div className="col1">
            <h5 className="h5 text-dark font-[Montserrat] mb-[20px]">
              Company Info
            </h5>
            <ul className="link text-gray flex flex-col gap-[10px]">
              <li>About Us</li>
              <li>Carrier</li>
              <li>WE are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col2">
            <h5 className="h5 text-dark font-[Montserrat] mb-[20px]">Legal</h5>
            <ul className="link text-gray flex flex-col gap-[10px]">
              <li>About Us</li>
              <li>Carrier</li>
              <li>WE are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col3">
            <h5 className="h5 text-dark font-[Montserrat] mb-[20px]">
              Features
            </h5>
            <ul className="link text-gray flex flex-col gap-[10px]">
              <li>About Us</li>
              <li>Carrier</li>
              <li>WE are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col4  sm:mb-[20px] md:mb-[0px]">
            <h5 className="h5 text-dark font-[Montserrat] mb-[20px]">
              Resources
            </h5>
            <ul className="link text-gray flex flex-col gap-[10px]">
              <li>About Us</li>
              <li>Carrier</li>
              <li>WE are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="flex-grow-1">
          <h5 className="h5 text-dark font-[Montserrat]">Get In Touch</h5>
          <div>
            <input
              className="pl-[20px] mt-[20px] w-[204px] h-[58px] outline-light-gray border border-[#E6E6E6] rounded-s-md "
              type="text"
              placeholder="Your Email"
            />
            <Button
              text="Subscribe"
              back="#B73225"
              textColor="white"
              w="117px"
              h="58px"
              size="14px"
              p="15px 22px"
              radius="0px 5px 5px 0px"
              family="Montserrat"
              font="400" display='inline-block'
            />
          </div>
          <small className="text-gray">Lore imp sum dolor Amit</small>
        </div>
      </div>

      <div className="bg-[#FAFAFA] ">
        <div className="h6 text-center text-gray font-[Montserrat] max-w-[1050px] h-[74px] mx-auto flex items-center sm:justify-center md:justify-start">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
