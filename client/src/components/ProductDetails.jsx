import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import NewReview from "./NewReview";
import HeaderDark from "./HeaderDark";
import Header from "./Header";
import FooterDark from "./FooterDark";
import Button from "./Button";
import Circle from "./Circle";
import Reviews from "./Reviews";
import ReviewReadOnly from "./ReviewReadOnly";
//carousel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Products from "./Products";
const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const id = useParams().id;
  const product = useFetch(
    `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/products/${id}?populate=*`
  );
  const productAttributes = product?.data?.data?.attributes;
  console.log(productAttributes);
  console.log(product);
  const navigate = useNavigate();
  return (
    <div>
      <HeaderDark />
      <Header variant="primary" />

      <div className="bg-[#FAFAFA] py-[48px]">
        <div className=" mx-auto  max-w-[1050px] min-h-[598px] flex gap-[80px] md:flex-row justify-between sm:flex-col  ">
          <div className=" flex flex-col justify-between items-center max-w-[506px]  min-h-[546px]">
            <Swiper
              style={{
                "--swiper-navigation-color": "#cfc8c8",
                "--swiper-pagination-color": "#cfc8c8",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 w-[506px] h-[450px] shadow bg-[#faf7f7]"
            >
              <SwiperSlide className="flex justify-center items-center">
                <img
                  className="w-[400px] h-[350px] object-contain"
                  src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                    product?.data?.data?.attributes?.thumbnail?.data?.[0]
                      ?.attributes?.url
                  }`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[400px] h-[350px] object-contain"
                  src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                    product?.data?.data?.attributes?.thumbnail?.data?.[1]
                      ?.attributes?.url
                  }`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[400px] h-[350px]  object-fit"
                  src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                    product?.data?.data?.attributes?.thumbnail?.data?.[2]
                      ?.attributes?.url
                  }`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[400px] h-[350px]  object-contain"
                  src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                    product?.data?.data?.attributes?.thumbnail?.data?.[3]
                      ?.attributes?.url
                  }`}
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper w-[506px] h-[75px] "
            >
              <SwiperSlide>
                <img
                  className="w-[100px] h-[75px]  shadow  bg-[#faf7f7]"
                  src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                    product?.data?.data?.attributes?.thumbnail?.data?.[0]
                      ?.attributes?.url
                  }`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[100px] h-[75px] shadow  bg-[#faf7f7]"
                  src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                    product?.data?.data?.attributes?.thumbnail?.data?.[1]
                      ?.attributes?.url
                  }`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[100px] h-[75px] shadow  bg-[#faf7f7]"
                  src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                    product?.data?.data?.attributes?.thumbnail?.data?.[2]
                      ?.attributes?.url
                  }`}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[100px] h-[75px] shadow  bg-[#faf7f7]"
                  src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                    product?.data?.data?.attributes?.thumbnail.data?.[3]
                      ?.attributes?.url
                  }`}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="max-w-[506px] min-h-[546px]">
            <h2 className="h2 text-dark mb-[14px]">
              {productAttributes?.title}
            </h2>
            <div className="inline-block">
              <ReviewReadOnly />
            </div>
            <h3 className="h3 text-dark  mb-[5px]">
              {productAttributes?.price}$
            </h3>
            <div className="flex gap-[5px]  mb-[36px]">
              {" "}
              <h6 className="h6 text-gray">Availability :</h6>
              <h6 className="h6 text-acsent">{productAttributes?.stock}</h6>
            </div>
            <p className="paragraph  mb-[21px] ">
              {productAttributes?.description}
            </p>
            <hr className="border border-[#dad9d9] mb-[29px]" />
            <div className="flex gap-[6.08px] mb-[41px]">
              <Circle background="#B73225" w="30px" h="30px" />
              <Circle background="#004E7C" w="30px" h="30px" />
              <Circle background="#E77C40" w="30px" h="30px" />
              <Circle background="#252B42" w="30px" h="30px" />
            </div>
            <div className="flex gap-[10px]">
              <Button
                font="700"
                text="Select Options"
                textColor="white"
                border="1px solid #B73225"
                radius="5px"
                back=" #B73225"
                w="137px"
                p="10px 20px"
                h="40px"
                id="fullfiled-btn"
              />

              <button className="w-[40px] h-[40px] hover:scale-125  flex justify-center items-center border border-light-gray rounded-[50%] bg-white">
                <img src="..\src\assets\icn favorite.png" />
              </button>
              <button className="w-[40px] h-[40px] hover:scale-125 flex justify-center items-center border border-light-gray rounded-[50%] bg-white">
                <img src="..\src\assets\icn sebet.png" />
              </button>

              <button className="w-[40px] h-[40px] hover:scale-125 flex justify-center items-center border border-light-gray rounded-[50%] bg-white">
                {" "}
                <img src="..\src\assets\icn qlaz.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-[100px] ">
        <Reviews />
        <NewReview />
      </div>

      <div className="max-w-[1050px] min-h-[72px] mx-auto flex items-center justify-center gap-[80px]">
        <h6 className="link text-gray">Description</h6>
        <h6 className="link text-gray">Additional Information</h6>
        <h6
          onClick={() => {
            navigate("/reviews");
          }}
          className="link text-gray"
        >
          Reviews
        </h6>
      </div>
      <hr className="border border-[#dad9d9] max-w-[1050px] mx-auto" />
      <div className="sm:flex-col md:flex-row max-w-[1050px] flex  mx-auto gap-[30px] my-[50px]">
        <div className="w-[60%] mx-auto flex justify-center flex-col gap-[30px] ">
          <h3 className="h3 text-dark">The quick fox jumps over </h3>
          <p className="paragraph text-gray">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="paragraph text-gray">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="paragraph text-gray">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div className="hover:scale-125">
          <img src="../src/assets/vafle.png" alt="img" />
        </div>
      </div>
      <div className="Bestseller bg-[#FAFAFA]">
        <div className="flex w-[1050px] mx-auto">
          <h3 className="h3 text-dark my-[50px] ">BESTSELLER PRODUCTS</h3>
        </div>
        <hr className="border border-[#dad9d9] max-w-[1050px] mx-auto" />
        <div>
          <Products />
        </div>
      </div>
      <FooterDark />
    </div>
  );
};

export default ProductDetails;
