import React from "react";
import Header from "../components/Header";
import FooterLight from "../components/FooterLight";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="sm: mx-[30px]">
      <Header variant="secondary" maxW="1050px" />
      <div className=" mb-[112px] mt-[2rem] min-h-[557px] max-w-[1050px] mx-auto gap-[80px] md:grid grid-cols-2  ">
        <div className="max-w-[598px] min-h-[540px]  flex  flex-col gap-[30px] justify-end sm:items-center   md:items-start">
          <h5 className="h5 text-dark">CONTACT US</h5>
          <h1 className="h1 text-dark sm:text-center md:text-left">Get in touch today!</h1>
          <p className="h4 text-[#737373] w-[376px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col ">
            <h3 className="h3 text-dark">Phone : +451 215 215 </h3>
            <h3 className="h3 text-dark">Fax : +451 215 215 </h3>
          </div>
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

        <div className="relative hover:scale-75">
          <div className="absolute right-[500px] bg-[#ffe4e0] border border-none rounded-[50%] w-[60px]  h-[60px]"></div>
          <div className="absolute left-[0px] bottom-[100px]  bg-[#9b56ef] rounded-[50%] w-[10px]  h-[10px]"></div>
          <div className=" bg-[#ffe4e0] border border-none rounded-[50%] w-[470px]  h-[450px]">
            <img
              className="relative bottom-[30px]  w-[470px] "
              src="./src/assets/pink.svg"
              alt="img"
            />
          </div>
          <div className="absolute right-[0px] top-[100px]  bg-[#9b56ef] rounded-[50%] w-[10px]  h-[10px]"></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-[112px]">
        <h6 className="h6 text-dark">VISIT OUR OFFICE</h6>
        <h2 className="h2 text-dark text-center  max-w-[546px]">
          We help small businesses with big ideas
        </h2>
      </div>
      <div className="md:flex-row justify-between max-w-[985px] sm:flex flex-col my-[60px]  mx-auto">
        <div className="flex flex-col justify-center items-center gap-[15px] hover:scale-125">
          <img
            className="hover:scale-125"
            src="../src/assets/mobile-xl.png"
            alt=""
          />
          <h6 className="h6 text-dark">georgia.young@example.com</h6>
          <h6 className="h6 text-dark">georgia.young@ple.com</h6>
          <h5 className="h5 text-dark">Get Support</h5>
          <Button
            id="outline-btn"
            font="700"
            text="Submit Request"
            textColor="#B73225"
            border="1px solid #B73225"
            radius="37px"
            p="15px 36px"
            w="193px"
            h="54px"
          />
        </div>
        <div className="sm:mx-auto w-[328px] h-[403px] my-[80px] flex flex-col bg-dark justify-center items-center gap-[15px] hover:scale-75">
          <img
            className="hover:scale-125"
            src="../src/assets/location.png"
            alt=""
          />
          <h6 className="h6 text-white">georgia.young@example.com</h6>
          <h6 className="h6 text-white">georgia.young@ple.com</h6>
          <h5 className="h5 text-white">Get Support</h5>
          <Button
            id="outline-btn"
            font="700"
            text="Submit Request"
            textColor="#B73225"
            border="1px solid #B73225"
            radius="37px"
            p="15px 36px"
            w="193px"
            h="54px"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-[15px] hover:scale-125">
          <img
            className="hover:scale-125"
            src="../src/assets/red mail.png"
            alt="img"
          />
          <h6 className="h6 text-dark">georgia.young@example.com</h6>
          <h6 className="h6 text-dark">georgia.young@ple.com</h6>
          <h5 className="h5 text-dark">Get Support</h5>
          <Button
            id="outline-btn"
            font="700"
            text="Submit Request"
            textColor="#B73225"
            border="1px solid #B73225"
            radius="37px"
            p="15px 36px"
            w="193px"
            h="54px"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto mb-[108px] gap-[30px]">
        <img
          className="hover:scale-125"
          src="../src/assets/Arrow.png"
          alt="img"
        />
        <h5 className="h5 text-dark">WE CAN'T WAIT TO MEET YOU</h5>
        <h1 className="h1 text-dark">Let's Talk</h1>
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
      </div>
      <FooterLight />
    </div>
  );
};

export default Contact;
