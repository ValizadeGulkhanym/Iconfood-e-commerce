import React from "react";
import Header from "../components/Header";
import Logos from "../components/Logos";
import FooterLight from "../components/FooterLight";
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Header variant="secondary" maxW="1050px" />
      <div className=" my-[50px] min-h-[557px] max-w-[1050px] mx-auto grid grid-cols-2 gap-[80px] ">
        <div className="w-[598px] h-[332px] ml-auto my-auto flex  flex-wrap gap-[30px] ">
          <h5 className="h5 text-dark">ABOUT COMPANY</h5>
          <h1 className="h1 text-dark">ABOUT US</h1>
          <p className="h4 text-[#737373] w-[376px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <button
            id="fullfiled-btn"
            className="btn-text rounded-[5px] text-[#fff] min-w-[195px] h-[52px] bg-acsent px-[40px] py-[15px]"
          >
            Get Quote Now
          </button>
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

      <div className="max-w-[1018px] flex justify-between items-center my-[90px] mx-auto">
        <div>
          <p className="paragraph #E74040">Problems trying</p>
          <h3 className="h3 dark w-[394px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <p className="paragraph gray max-w-[545px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="flex justify-between items-center w-[1050px] mx-auto mb-[80px]">
        <div className="flex flex-col justify-center items-center hover:scale-125">
          <h1 className="h1 text-dark">15K</h1>
          <h5 className="h5 text-gray">Happy Customers</h5>
        </div>
        <div className="flex flex-col justify-center items-center hover:scale-125">
          <h1 className="h1 text-dark">150K</h1>
          <h5 className="h5 text-gray">Monthly Visitors</h5>
        </div>
        <div className="flex flex-col justify-center items-center hover:scale-125">
          <h1 className="h1 text-dark">15</h1>
          <h5 className="h5 text-gray">Countries Worldwide</h5>
        </div>
        <div className="flex flex-col justify-center items-center hover:scale-125">
          <h1 className="h1 text-dark">100+</h1>
          <h5 className="h5 text-gray">Top Partners</h5>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[112px] mb-[224px]">
        <iframe
          width="989"
          height="540"
          src="https://www.youtube.com/embed/ad-iCkAnGaw"
          title="Morning Routine Croissants ❤️🥐"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="my-[112px]  gap-[30px] flex flex-col items-center justify-center">
        <h2 className="h2 text-dark">Meet Our Team</h2>
        <p className="paragraph text-gray w-[469px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="w-[1050px] mb-[117px] flex justify-between mx-auto">
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

      <div className="bg-[#FAFAFA] py-[75px] gap-[30px] flex flex-col items-center justify-center">
        <h2 className="h2 text-dark">Big Companies Are Here</h2>
        <p className="paragraph text-gray text-center w-[547px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <Logos back="#FAFAFA" pb="70px" />
      <div className=" mb-[70px] min-h-[640px]  w-full  flex ">
        <div className="pr-[50px] flex grow justify-center items-center  min-h-[636px]  text-white  gap-[30px] bg-[#33a1e0] ">
          <div className="min-w-[438px] h-[248px]  flex flex-col gap-[24px] ">
            <h5 className="h5 ">WORK WITH US</h5>
            <h2 className="h2 ">Now Let’s grow Yours</h2>
            <p className="h4  w-[376px]">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
            <button onClick={() => navigate("/team")}
              id="blue-fullfilled"
              className=" btn-text flex justify-center items-center border border-white rounded-[5px] text-[#fff] w-[130px] h-[52px]  px-[40px] py-[15px]"
            >
              Start
            </button>
          </div>
        </div>
        <img className=" w-[590px]" src="../src/assets/cookies.png" alt="img" />
      </div>

      <FooterLight />
    </div>
  );
};

export default About;
