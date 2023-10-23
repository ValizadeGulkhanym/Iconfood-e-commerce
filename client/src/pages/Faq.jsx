import React from "react";
import Header from "../components/Header";
import FooterLIght from "../components/FooterLight";
import Button from "../components/Button";
import BasicAccordion from "../components/BasicAccordion";

const Faq = () => {
  
  return (
    <div className="sm:mx-[20px]">
      <Header variant="secondary" />
      <div className="my-[80px] flex flex-col justify-center items-center gap-[16px]">
        <h1 className="h1 text-dark">FAQ</h1>
        <div className="flex gap-[15px]">
          <p className="link text-gray">Home </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <p className="link text-gray">Blog</p>
        </div>
      </div>
      <div className="my-[80px] flex flex-col justify-center items-center gap-[16px]">
        <h2 className="h2 text-dark font-[Montserrat] text-center">Frequently Asked Questions</h2>
        <p className="paragraph text-gray max-w-[432px] text-center">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>


<BasicAccordion/>
  
  
      <div className="my-[80px] flex flex-col justify-center items-center gap-[16px]">
        <h2 className="h2 text-dark">Be the first to know</h2>
        <p className="paragraph text-gray max-w-[607px] text-center">
        Problems trying to resolve the conflict between the two major realms of Classical physics: 
        </p>
        <div>
            <input
              className="pl-[20px] my-[30px] md:w-[483px] h-[58px] border border-[#E6E6E6] rounded-s-md  outline-light-gray"
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
<p className="paragraph text-gray text-center w-[447px]">Problems trying to resolve the conflict between the two major realms of Classical physics: </p>

      </div>
      <FooterLIght/>
    </div>
  );
};

export default Faq;
