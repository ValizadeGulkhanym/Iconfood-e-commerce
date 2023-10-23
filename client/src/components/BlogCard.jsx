import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
const BlogCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <div key={item.id} className="card font-[Montserrat] ">
        <div className="relative">
          <img
            className="blogimg w-[308px] h-[300px] object-cover "
            src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
              item?.attributes?.img.data?.attributes?.url
            }`}
          />

          <button className="absolute rounded-[3px] left-[20px] bottom-[260px] bg-acsent text-white h6   w-[68px] h-[24px]">
            {item?.attributes?.type}
          </button>
        </div>
        <div className=" flex flex-col gap-2.5 font-[Montserrat'] w-[348px] p-[25px]">
          <div className="flex gap-[15px]">
            <Link to="https://www.google.com/">
              {" "}
              <small className="text-[#8EC2F2]">Google</small>
            </Link>
            <small className="text-gray">{item?.attributes?.type}</small>
          </div>
          <h4 className=" text-dark text-xl w-[247px] font-normal">
            {item?.attributes?.title}
          </h4>
          <p className="paragraph text-gray w-[242px] font-['Montserrat']">
            {item?.attributes?.description}
          </p>

          <div className="flex justify-between items-center gap-3 w-[252px] my-2.5">
            <div className="flex items-center gap-[5px]">
              <img src="../src/assets/budilnik.png" />
              <small className="small text-gray">September 2023</small>
            </div>

            <div className="flex items-center gap-[5px]">
              <img src="../src/assets/progress.png" />
              <small className="small text-gray">10 Comments</small>
            </div>
          </div>
          <div>
            <Button
              font="700"
              text="Learn More >"
              textColor="gray"
              w="144px"
              p="20px"
              h="44px"
              id="fullfiled-btn"
              radius="18px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
