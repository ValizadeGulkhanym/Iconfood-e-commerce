import { Rate } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ReviewReadOnly = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async (id) => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_APP_STRAPI_BASE_URL
          }/api/reviews?filters[productID][$eq]=${id}`
        );
        setReviews(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getReviews(id);
  }, [id]);

  const stars =
    reviews.reduce((acc, item) => {
      return acc + item.attributes.stars;
    }, 0) / reviews.length;

  return (
    <div className="flex justify-center gap-5  items-center"> 
      <Rate value={stars} defaultValue={stars} disabled />
      <h6 className="h6 text-gray">{reviews.length} Reviews</h6>
    </div>
  );
};

export default ReviewReadOnly;
