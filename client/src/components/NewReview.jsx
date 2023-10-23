import React, { useState } from "react";
import { Rate } from "antd";
import { useParams } from "react-router-dom";
import { userData } from "../helper";
import { useDispatch } from "react-redux";
import { privateInstance } from "../api/index";
import { addReview } from "../store/reducers/reviewsReducer";
const NewReview = () => {
  const id = useParams().id;
  const [stars, setStars] = useState(0);
  const [text, setText] = useState("");
  const { user } = userData();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      stars,
      productID: id,
      username: user.username,
      text,
    };
    console.log(data);
    newReview(data);
    setText("");
    setStars(0);
  };
  const newReview = async (data) => {
    try {
      const res = await privateInstance.post("/api/reviews", { data });
      dispatch(addReview(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" font-[Spectral] w-[490px] flex  flex-col justify-center items-center gap-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-5 w-[490px]"
      >
        <h3 className="h5 text-dark ">Leave your comments:</h3>
        <Rate value={stars} onChange={setStars} />
        <div className="flex gap-2 ">
          <input
            className="border border-light-gray  outline-light-gray w-[450px] h-[40px] pl-[20px] rounded"
            value={text}
            type="text"
            placeholder="Review..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <button className="bg-acsent  text-white w-[140px] h-[40px] rounded flex justify-center items-center ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewReview;
