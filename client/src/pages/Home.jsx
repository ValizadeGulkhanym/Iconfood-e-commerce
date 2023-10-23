import React from "react";
import Header from "../components/Header";
import HeaderDark from "../components/HeaderDark";
import FooterLight from "../components/FooterLight";
import Products from "../components/Products";
import Circle from "../components/Circle";
import Button from "../components/Button";
import Logos from "../components/Logos";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderDark />
      <Header variant="primary" />

      <div className="home-part1 my-[50px] min-h-[619px] rounded-[1rem] mx-auto container flex  items-center justify-between  w-[1292px]">
        <div className="w-[548px] min-h-[332px] flex  flex-col gap-[30px]  my-[50px] ml-[130px] ">
          <h5 className="h5 text-[#2A7CC7]">SUMMER 2023</h5>
          <h1 className="h1 text-dark text-center  text-left max-w-[525px] sm: text-center">
            Special Bread
          </h1>
          <p className="h4 text-[#737373] w-[339px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <button
            onClick={() => {
              navigate("/productlist");
            }}
            className="h3 rounded-[5px] text-[#fff] w-[231px] h-[66px] bg-acsent px-[40px] py-[15px]"
          >
            SHOP NOW
          </button>
        </div>

        <div className="">
          <img
            className="w-[660px]  h-[500px]  right-[2rem] top-[280px]  "
            src="./src/assets/technology 1.png"
            alt=""
          />
        </div>
      </div>

      <Logos mb="80px" />

      <div className="  max-w-[1185px] gap-5 mx-auto justify-center sm:flex flex-col md:flex-row ">
        <div className="kroasan bg-cover w-[100%] flex items-end justify-start">
          <div className="part3-card w-[420px] h-[238px] text-[26px] leading-[36px] bg-[#2d8bc0] opacity-70">
            <h6>Top Product Of the Week</h6>
            <button id="blue-fullfilled" className="btn-text btn-outline">
              EXPLORE ITEMS
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 ">
          <div className="macaroon bg-cover w-[100%] flex items-end justify-start">
            <div className="part3-card bg-[#2d8bc0] opacity-70 ">
              <h6>Top Product Of the Week</h6>
              <button id="blue-fullfilled" className="btn-text btn-outline">
                EXPLORE ITEMS
              </button>
            </div>
          </div>

          <div className="cookies bg-cover w-[100%] flex items-end justify-start">
            <div className="part3-card  bg-[#2d8bc0] opacity-70">
              <h6>Top Product Of the Week</h6>
              <button id="blue-fullfilled" className="btn-text btn-outline">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-[80px] mb-[56px]">
        <h4 className="h4 text-gray">Featured Products</h4>
        <h3 className="h3 text-dark">BESTSELLER PRODUCTS</h3>
        <p className="paragraph">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="w-[80%] mx-auto">
        <Products />
      </div>
      {/*<div className="flex items-center justify-center pt-[90px]">
        <button id="outline-btn" className=" border border-acsent text-acsent btn-text rounded   w-[261px] h-[52px]">
          LOAD MORE PRODUCTS
        </button>
      </div> */}
      <div className="sm:flex mx-auto md: flex-wrap justify-between w-[1050px] gap-5 container mt-[160px] mb-[160px] ">
        <div className="flex gap-[16px]">
   <img className="sm: hidden md:block" src=".\src\assets\unsplash_1.png" />
          <img src=".\src\assets\unsplash_2.png" />
        </div>
        <div className="w-[447px] flex flex-col justify-center ">
          <h5 className="h5 text-acsent">Featured Products</h5>
          <h2 className="h2 text-dark">We love what we do</h2>
          <p className="paragraph w-[351px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics. Problems trying to
            resolve the conflict between the two major realms of Classical
            physics: Newtonian mechanics{" "}
          </p>
        </div>
      </div>

      <div className="text-center m-[10px]">
        <h2 className="h4 text-gray">Featured Products</h2>
        <h3 className="h3 text-dark">THE BEST SERVICES</h3>
        <p className="paragraph">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>

      <div className="flex container flex-wrap w-[1050px] justify-between items-center mx-auto my-[80px]">
        <div className="hover:scale-75 w-[315px] min-h-[258px] flex flex-col justify-center items-center">
          <svg
            className="hover:scale-125"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path
              d="M6 24V58.587C6 58.587 19.863 58.071 36 66C52.137 58.071 66 58.587 66 58.587V24C66 24 49.638 24 36 31.413C22.362 24 6 24 6 24Z"
              fill="#B73225"
            />
            <path
              d="M36 24C40.9706 24 45 19.9706 45 15C45 10.0294 40.9706 6 36 6C31.0294 6 27 10.0294 27 15C27 19.9706 31.0294 24 36 24Z"
              fill="#B73225"
            />
          </svg>
          <h3 className="h3 text-dark">Easy Wins</h3>
          <p className="paragraph text-center">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>

        <div className=" hover:scale-75 w-[315px] min-h-[258] flex flex-col justify-center items-center">
          <svg
            className="hover:scale-125"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path d="M42.75 22.5H58.5V27H42.75V22.5Z" fill="#B73225" />
            <path d="M42.75 33.75H58.5V38.25H42.75V33.75Z" fill="#B73225" />
            <path d="M42.75 45H58.5V49.5H42.75V45Z" fill="#B73225" />
            <path d="M13.5 22.5H29.25V27H13.5V22.5Z" fill="#B73225" />
            <path d="M13.5 33.75H29.25V38.25H13.5V33.75Z" fill="#B73225" />
            <path d="M13.5 45H29.25V49.5H13.5V45Z" fill="#B73225" />
            <path
              d="M63 11.25H9C7.80689 11.2512 6.66299 11.7257 5.81934 12.5693C4.97568 13.413 4.50119 14.5569 4.5 15.75V56.25C4.50119 57.4431 4.97568 58.587 5.81934 59.4307C6.66299 60.2743 7.80689 60.7488 9 60.75H63C64.1931 60.7488 65.337 60.2743 66.1807 59.4307C67.0243 58.587 67.4988 57.4431 67.5 56.25V15.75C67.4988 14.5569 67.0243 13.413 66.1807 12.5693C65.337 11.7257 64.1931 11.2512 63 11.25ZM9 15.75H33.75V56.25H9V15.75ZM38.25 56.25V15.75H63V56.25H38.25Z"
              fill="#B73225"
            />
          </svg>
          <h3 className="h3 text-dark">Concrete</h3>
          <p className="paragraph text-center">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>

        <div className="hover:scale-75 w-[315px] min-h-[258] flex flex-col justify-center items-center">
          <svg
            className="hover:scale-125"
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
          >
            <path
              d="M65.7598 19.86C65.4554 19.127 64.8729 18.5444 64.1398 18.24C63.7791 18.0863 63.3918 18.0047 62.9998 18H47.9998C47.2042
               18 46.4411 18.3161 45.8785 18.8787C45.3159 19.4413 44.9998 20.2044 44.9998 21C44.9998 21.7956 45.3159 22.5587 45.8785 23.1213C46.4411
                23.6839 47.2042 24 47.9998 24H55.7698L38.9998 40.77L29.1298 30.87C28.8509 30.5888 28.5191 30.3656 28.1535 30.2133C27.788 30.061 27.3959 
                29.9826 26.9998 29.9826C26.6038 29.9826 26.2117 30.061 25.8461 30.2133C25.4805 30.3656 25.1487 30.5888 24.8698 30.87L6.86982 48.87C6.58863 49.1489 6.36545 49.4807 6.21314 49.8463C6.06084 50.2118 5.98242 50.604 5.98242 51C5.98242 51.396 6.06084 51.7882 6.21314 52.1537C6.36545 52.5193 6.58863 52.8511 6.86982 53.13C7.14871 53.4112 7.48051 53.6344 7.84609 53.7867C8.21166 53.939 8.60378 54.0174 8.99982 54.0174C9.39585 54.0174 9.78797 53.939 10.1535 53.7867C10.5191 53.6344 10.8509 53.4112 11.1298 53.13L26.9998 37.23L36.8698 47.13C37.1487 47.4112 37.4805 47.6344 37.8461 47.7867C38.2117 47.939 38.6038 48.0174 38.9998 48.0174C39.3959 48.0174 39.788 47.939 40.1535 47.7867C40.5191 47.6344 40.8509 47.4112 41.1298 47.13L59.9998 28.23V36C59.9998 36.7956 60.3159 37.5587 60.8785 38.1213C61.4411 38.6839 62.2042 39 62.9998 39C63.7955 39 64.5585 38.6839 65.1211 38.1213C65.6838 37.5587 65.9998 36.7956 65.9998 36V21C65.9951 20.608 65.9135 20.2207 65.7598 19.86Z"
              fill="#B73225"
            />
          </svg>
          <h3 className="h3 text-dark">Hack Growth</h3>
          <p className="paragraph text-center">
            Overcame any hurdle or any other problem.
          </p>
        </div>
      </div>

      <div className="text-center my-[100px] pt-[90px]">
        <h6 className="h6 text-acsent">Practice Advice</h6>
        <h2 className="h2 text-dark">Featured Posts</h2>
      </div>

      <div className="flex  mx-auto flex-wrap gap-5 container w-[1050px] justify-between mb-[74px]">
        <div className="flex ">
          <div className="left w-[209px] h-[406px] bg-[url('..\src\assets\palms.png')]">
            <div className="flex flex-col my-[25px] gap-[298px]">
              <div className="mx-[20px]">
                <Button
                  minW="52px"
                  minH="24px"
                  text="Sale"
                  back="#E74040"
                  textColor="white"
                  id="fullfiled-btn"
                />
              </div>
              <div className="flex gap-2.5 mx-auto">
                <button className="hover:scale-125 w-[40px] h-[40px]  flex justify-center items-center rounded-[50%] bg-white">
                  <img src="..\src\assets\icn favorite.png" />
                </button>
                <button className="hover:scale-125 w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-white">
                  <img src="..\src\assets\icn sebet.png" />
                </button>

                <button className="hover:scale-125 w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-white">
                  {" "}
                  <img src="..\src\assets\icn qlaz.png" />
                </button>
              </div>
            </div>
          </div>
          <div className="productsDiscr flex flex-col gap-2.5 font-[Montserrat'] w-[242px] p-[25px]">
            <div className="line1 w-[235px] flex justify-between">
              <p className="font-['Montserrat'] text-sm text-acsent font-bold">
                Croissant
              </p>
              <div className="rating w-[50px] h-[26px] border rounded-[20px] p-[5px] flex gap-[5px] items-center justify-center bg-dark text-white">
                <img src="..\src\assets\icon emojione-star.png" alt="" />
                <small>4.9</small>
              </div>
            </div>
            <h5 className="h5 text-dark">Bially Sandwitch</h5>
            <p className="paragraph w-[242px] font-['Montserrat']">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex gap-[10px]">
              <img src="../src/assets/download.png" />
              <h6 className="h6 text-gray">15 Sales</h6>
            </div>
            <div className="flex gap-[5px] ">
              <span className="h5 text-light-gray">$16.48</span>
              <span className="h5 text-[#004E7C]">$6.48</span>
            </div>
            <div className="flex gap-[6.08px]">
              <Circle background="#B73225" w="1rem" h="1rem" />
              <Circle background="#004E7C" w="1rem" h="1rem" />
              <Circle background="#E77C40" w="1rem" h="1rem" />
              <Circle background="#252B42" w="1rem" h="1rem" />
            </div>
            <div className="flex justify-between items-center w-[235px] my-2.5">
              <div className="flex items-center gap-[5px]">
                <img src="../src/assets/budilnik.png" />
                <small className="small text-gray">22h...</small>
              </div>
              <div className="flex items-center  gap-[5px]">
                <img src="..\src\assets\icon carbon-chart-area-smooth.png" />
                <small className=" small text-gray">64 Lessons</small>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src="../src/assets/progress.png" />
                <small className="small text-gray">Progress</small>
              </div>
            </div>
            <Button
              font="700"
              text="Learn More >"
              textColor="#B73225"
              border="1px solid #B73225"
              radius="37px"
              w="144px"
              h="44px"
              id="outline-btn"
            />
          </div>
        </div>

        <div className="flex ">
          <div className="left w-[209px] h-[406px] bg-[url('..\src\assets\bread.png')]">
            <div className="flex flex-col my-[25px] gap-[298px]">
              <div className="mx-[20px]">
                <Button
                  minW="52px"
                  minH="24px"
                  text="Sale"
                  back="#E74040"
                  textColor="white"
                  id="fullfiled-btn"
                />
              </div>
              <div className="flex gap-2.5 mx-auto">
                <button className="hover:scale-125 w-[40px] h-[40px]  flex justify-center items-center rounded-[50%] bg-white">
                  <img src="..\src\assets\icn favorite.png" />
                </button>
                <button className="hover:scale-125 w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-white">
                  <img src="..\src\assets\icn sebet.png" />
                </button>

                <button className="hover:scale-125 w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-white">
                  {" "}
                  <img src="..\src\assets\icn qlaz.png" />
                </button>
              </div>
            </div>
          </div>
          <div className="productsDiscr flex flex-col gap-2.5 font-[Montserrat'] w-[242px] p-[25px]">
            <div className="line1 w-[235px] flex justify-between">
              <p className="font-['Montserrat'] text-sm text-acsent font-bold">
                Croissant
              </p>
              <div className="rating w-[50px] h-[26px] border rounded-[20px] p-[5px] flex gap-[5px] items-center justify-center bg-dark text-white">
                <img src="..\src\assets\icon emojione-star.png" alt="" />
                <small>4.9</small>
              </div>
            </div>
            <h5 className="h5 text-dark">Bially Sandwitch</h5>
            <p className="paragraph w-[242px] font-['Montserrat']">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <div className="flex gap-[10px]">
              <img src="../src/assets/download.png" />
              <h6 className="h6 text-gray">15 Sales</h6>
            </div>
            <div className="flex gap-[5px] ">
              <span className="h5 text-light-gray">$16.48</span>
              <span className="h5 text-[#004E7C]">$6.48</span>
            </div>
            <div className="flex gap-[6.08px]">
              <Circle background="#B73225" w="1rem" h="1rem" />
              <Circle background="#004E7C" w="1rem" h="1rem" />
              <Circle background="#E77C40" w="1rem" h="1rem" />
              <Circle background="#252B42" w="1rem" h="1rem" />
            </div>
            <div className="flex justify-between items-center w-[235px] my-2.5">
              <div className="flex items-center gap-[5px]">
                <img src="../src/assets/budilnik.png" />
                <small className="small text-gray">22h...</small>
              </div>
              <div className="flex items-center  gap-[5px]">
                <img src="..\src\assets\icon carbon-chart-area-smooth.png" />
                <small className=" small text-gray">64 Lessons</small>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src="../src/assets/progress.png" />
                <small className="small text-gray">Progress</small>
              </div>
            </div>
            <Button
              font="700"
              text="Learn More >"
              textColor="#B73225"
              border="1px solid #B73225"
              radius="37px"
              w="144px"
              h="44px"
              id="outline-btn"
            />
          </div>
        </div>
      </div>
      <FooterLight back="#FAFAFA" />
    </div>
  );
};

export default Home;
