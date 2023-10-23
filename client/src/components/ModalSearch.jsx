import React, { useState } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../store/reducers/searchReducer";

const ModalSearch = ({ isModalOpen, setIsModalOpen }) => {
  const search = useSelector((state) => state.keyword);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleCancelBtn = () => {
    setInputValue("");
    dispatch(setSearch(""));
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    dispatch(setSearch(inputValue));
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        okText="Cancel"
        cancelText="Search"
        open={isModalOpen}
        onOk={handleCancelBtn}
        onCancel={handleSubmit}
      >
        <form className="text-dark">
          <input
            value={search}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="w-[90%] h-[40px] rounded pl-5 outline-none border border-light-gray"
            placeholder="Search..."
          />
        </form>
      </Modal>
    </>
  );
};

export default ModalSearch;
