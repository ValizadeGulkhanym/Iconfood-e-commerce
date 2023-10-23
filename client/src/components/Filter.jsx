import React from "react";
import Circle from "../components/Circle";
import Button from "../components/Button";
import Form from "../components/Form";
import Categories from "./Categories";

const Filter = ({ catId, setCatId }) => {
  return (
    <div className="filter">
      <h5 className="h5 p-[10px] text-dark bg-[#FAFAFA]">Filter</h5>

      <Categories catId={catId} setCatId={setCatId} />
      <hr className=" w-[186px] border border-[#dad9d9]" />

      <h5 className="h5 text-dark mb-[25px] mt-[50px] pl-[25px]">Color</h5>
      <div className=" flex flex-col gap-[18px] pl-[25px] mb-[50px]">
        <div className="flex items-center gap-[8px]">
          <Circle background="#B73225" w="30px" h="30px" />
          <h5 className="h5 text-gray ">Sourdough</h5>
        </div>
        <div className="flex items-center  gap-[8px]">
          <Circle background="#004E7C" w="30px" h="30px" />
          <h5 className="h5 text-gray">Baguette</h5>
        </div>
        <div className="flex items-center  gap-[8px]">
          <Circle background="#E77C40" w="30px" h="30px" />
          <h5 className="h5 text-gray ">Sourdough</h5>
        </div>
        <div className="flex items-center  gap-[8px]">
          <Circle background="#252B42" w="30px" h="30px" />
          <h5 className="h5 text-gray ">Sourdough</h5>
        </div>
      </div>
      <hr className=" w-[186px] border border-[#dad9d9] mb-[50px] " />
      <div className="pl-[25px]  w-[192px] mb-[50px]">
        <h5 className="h5 text-dark mb-[25px] mt-[50px]">Popular Tags</h5>
        <div className="text-acsent  btn-text w-[192px] flex flex-wrap gap-[15px]">
          <Button
            border="#B73225 1px solid"
            text="Agatha(9) "
            icon=" x"
            radius="5px"
            p="10px 15px"
            gap="5px"
          />
          <Button
            border="#B73225 1px solid"
            text="Tag "
            icon=" x"
            radius="5px"
            p="10px 15px"
            gap="5px"
          />
          <Button
            border="#B73225 1px solid"
            text="Tag "
            icon=" x"
            radius="5px"
            p="10px 15px"
            gap="5px"
          />
        </div>
      </div>
      <hr className=" w-[186px] border border-[#dad9d9] mb-[50px] " />
      <div className="pl-[25px]  w-[192px] mb-[50px]">
        <h5 className="h5 text-dark mb-[25px] mt-[50px]">Filter By Price</h5>
        <div className="flex flex-wrap gap-4 justify-center ">
          <input
            className="w-[165px] range-input "
            type="range"
            id="customRange"
          />
          <div className="flex gap-[16px]">
            <div className="w-[65px] h-[50px] p-[11px 34px 11px 21px] border rounded border-light-gray bg-[#F9F9F9] flex items-center justify-center ">
              0
            </div>
            <div className="w-[83px] h-[50px] p-[11px 34px 11px 21px] border rounded border-light-gray bg-[#F9F9F9] flex items-center justify-center ">
              1000
            </div>
          </div>
          <Button
            back="#B73225"
            text="Filter"
            textColor="white"
            w="100%"
            minW="154px"
            h="40px"
            radius="5px"
            p="10px 20px"
            border="#B73225 1px solid"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
