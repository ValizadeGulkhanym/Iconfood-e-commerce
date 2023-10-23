import React from "react";
import Reviews from "./Reviews";
const Card = ({ title, price1, price2, img }) => {
  console.log(img);
  return (
    <div className="w-[183px] h-[238px]">
      <img src={img} />
      <div className="flex flex-col justify-center items-center w-[183px] h-[162px]">
        <h5 className="h5 text-dark">{title}</h5>
        <h6 className="link text-gray">Ciabatta</h6>
        <div>
          <span className="h5 text-light-gray">{price1}</span>{" "}
          <span className="h5 text-[#004E7C]">{price2}</span>
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default Card;
