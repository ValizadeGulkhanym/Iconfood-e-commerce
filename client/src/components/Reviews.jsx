import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import { useParams } from "react-router-dom";
import { getReviews } from "../store/actions/reviews";
import { useSelector, useDispatch } from "react-redux";
import { privateInstance } from "../api";
import { userData } from "../helper";
import { deleteReview } from "../store/reducers/reviewsReducer";

const Reviews = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const [stars, setStars] = useState(0);
  const reviews = useSelector((state) => state.reviews);
  const reviewsAttributes = reviews?.data;
  const { jwt, user } = userData();

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  const handleDelete = async (id) => {
    try {
      await privateInstance.delete(`/api/reviews/${id}`);
      dispatch(deleteReview(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mr-[200px] ">
        <h3 className="h5 text-dark">Comments:</h3>

        {reviewsAttributes?.map((item) => (
          <div key={item.id} className="review flex flex-col gap-2">
            <h6 className="h6 text-gray">{new Date().toString()}</h6>
            <Rate
              value={item?.attributes?.stars}
              onChange={setStars}
              defaultValue={item?.attributes?.stars}
              disabled
            />
            <p className="paragraph text-dark">{item?.attributes?.text}</p>
            <div className="flex justify-between items-center">
              {" "}
              <strong className="text-dark">
                {item?.attributes?.username}
              </strong>
              {item?.attributes?.username === user?.username && (
                <button
                  className="w-[4rem] h-[2rem] flex justify-center items-center bg-acsent text-white rounded"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
            <hr className="border-light-gray mb-[20px]" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
