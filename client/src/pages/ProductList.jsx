import React, { useState } from "react";
import Header from "../components/Header";
import HeaderDark from "../components/HeaderDark";
import FooterLight from "../components/FooterLight";
import Logos from "../components/Logos";
import { Link, NavLink, useParams } from "react-router-dom";
import Filter from "../components/Filter";
import Products from "../components/Products";

const ProductList = () => {
  const [catId, setCatId] = useState("");
  return (
    <div>
      <HeaderDark />
      <Header variant="primary" />
      <div className="bg-[#FAFAFA] py-[24px]">
        <div className="w-[1290px] flex gap-[30px] mx-auto">
          <div className="bg-[#f4de9d] w-[660px] h-[300px] flex justify-between items-center p-[50px]">
            <div>
              <h6 className="h6 text-[#E77C40]">Ends Today</h6>
              <h2 className="h2 text-dark mb-[23px]">Brioche</h2>
              <Link className="text-dark" to="/productlist">
                Explore Item
              </Link>
            </div>
            <img src="../src/assets/product-cover-6.svg" alt="" />
          </div>
          <div className="bg-faded-blue flex  w-[660px] h-[300px] justify-between items-center p-[50px]">
            <div>
              <h6 className="h6 text-[#E77C40] font-[Montserrat]">
                Your Space
              </h6>
              <h2 className="h2 text-dark mb-[23px]">Sourdough</h2>
              <Link className="text-dark" to="/productlist">
                Explore Item
              </Link>
            </div>
            <img src="../src/assets/pink.svg" />
          </div>
        </div>
      </div>

      <div className="w-[1290px] h-[88px] mx-auto flex items-center justify-between">
        <h3 className="h3 text-dark">Shop</h3>
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
      <div className="w-[1290px] mx-auto flex justify-between">
        <Filter catId={catId} setCatId={setCatId} />
        <div className="w-[920px]  ">
          <div className="flex justify-between items-center">
            <h6 className="h6 text-gray">Showing all 12 results</h6>
            <div className="flex items-center gap-[15px]">
              <h6 className="h6 text-gray">Views:</h6>
              <img src="../src/assets/icon.png" alt="" />
              <img src="../src/assets/btn-sm-24.png" alt="" />
            </div>
            <select
              className="border link text-gray border-light-gray bg-[#F9F9F9]"
              name="popularity"
              id="popularity"
            >
              <option value="">Popularity</option>
            </select>
          </div>
          <div>
            <Products catId={catId} setCatId={setCatId} />
          </div>
        </div>
      </div>

      <Logos back="#FAFAFA" />
      <FooterLight />
    </div>
  );
};

export default ProductList;
