import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReviewReadOnly from "./ReviewReadOnly";
import { useDispatch } from "react-redux";
import { addToBasket } from "../store/reducers/basketReducer";
const Product = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const toggleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
  };

  return (
    <>
      <div key={item.id}>
        <div className="w-[248px] h-[455px]  shadow p-5 rounded">
          <div>
            <img
              className="w-[235px] h-[270px] object-cover"
              src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                item?.attributes?.img.data?.attributes?.url
              }`}
            />
            <div className="relative bottom-[60px] flex justify-center item-center gap-2.5">
              <button
                onClick={toggleClick}
                className="add-to-fav-btn w-[35px] h-[35px] bg-[#fff] rounded-[50%]  flex justify-center items-center   "
              >
                {!isFavorite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.5971.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-[red]"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => dispatch(addToBasket(item))}
                className="w-[35px] h-[35px] bg-[#fff] rounded-[50%] flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  className=" text-gray"
                >
                  <g clipPath="url(#clip0_3007_12968)">
                    <path
                      d="M0.5 1.63333C0.5 1.46536 0.566728 1.30427 0.685505 1.1855C0.804281 1.06673 0.965377 1 1.13335 1H3.03341C3.17469 1.00004 3.3119 1.04731 3.42322 1.1343C3.53454 1.22129 3.61357 1.34299 3.64776 1.48007L4.16078 3.53333H18.8672C18.9602 3.53342 19.0521 3.55398 19.1362 3.59356C19.2204 3.63315 19.2948 3.69077 19.3541 3.76235C19.4135 3.83393 19.4564 3.9177 19.4797 4.00772C19.5031 4.09774 19.5063 4.19179 19.4892 4.2832L17.5891 14.4165C17.562 14.5617 17.4849 14.6927 17.3714 14.7871C17.2578 14.8815 17.1148 14.9332 16.9672 14.9333H5.56682C5.41917 14.9332 5.2762 14.8815 5.16263 14.7871C5.04906 14.6927 4.97204 14.5617 4.94487 14.4165L3.04608 4.3022L2.5394 2.26667H1.13335C0.965377 2.26667 0.804281 2.19994 0.685505 2.08117C0.566728 1.96239 0.5 1.8013 0.5 1.63333ZM4.42932 4.8L6.09251 13.6667H16.4415L18.1047 4.8H4.42932ZM6.83353 14.9333C6.16163 14.9333 5.51724 15.2002 5.04214 15.6753C4.56703 16.1504 4.30012 16.7948 4.30012 17.4667C4.30012 18.1385 4.56703 18.7829 5.04214 19.258C5.51724 19.7331 6.16163 20 6.83353 20C7.50543 20 8.14981 19.7331 8.62492 19.258C9.10003 18.7829 9.36694 18.1385 9.36694 17.4667C9.36694 16.7948 9.10003 16.1504 8.62492 15.6753C8.14981 15.2002 7.50543 14.9333 6.83353 14.9333ZM15.7005 14.9333C15.0286 14.9333 14.3842 15.2002 13.9091 15.6753C13.434 16.1504 13.1671 16.7948 13.1671 17.4667C13.1671 18.1385 13.434 18.7829 13.9091 19.258C14.3842 19.7331 15.0286 20 15.7005 20C16.3724 20 17.0168 19.7331 17.4919 19.258C17.967 18.7829 18.2339 18.1385 18.2339 17.4667C18.2339 16.7948 17.967 16.1504 17.4919 15.6753C17.0168 15.2002 16.3724 14.9333 15.7005 14.9333ZM6.83353 16.2C7.16948 16.2 7.49167 16.3335 7.72922 16.571C7.96678 16.8085 8.10023 17.1307 8.10023 17.4667C8.10023 17.8026 7.96678 18.1248 7.72922 18.3623C7.49167 18.5999 7.16948 18.7333 6.83353 18.7333C6.49758 18.7333 6.17539 18.5999 5.93783 18.3623C5.70028 18.1248 5.56682 17.8026 5.56682 17.4667C5.56682 17.1307 5.70028 16.8085 5.93783 16.571C6.17539 16.3335 6.49758 16.2 6.83353 16.2ZM15.7005 16.2C16.0364 16.2 16.3586 16.3335 16.5962 16.571C16.8337 16.8085 16.9672 17.1307 16.9672 17.4667C16.9672 17.8026 16.8337 18.1248 16.5962 18.3623C16.3586 18.5999 16.0364 18.7333 15.7005 18.7333C15.3645 18.7333 15.0423 18.5999 14.8048 18.3623C14.5672 18.1248 14.4338 17.8026 14.4338 17.4667C14.4338 17.1307 14.5672 16.8085 14.8048 16.571C15.0423 16.3335 15.3645 16.2 15.7005 16.2Z"
                      fill="#252B42"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3007_12968">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="w-[35px] h-[35px] bg-[#fff] rounded-[50%] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M13 10C13 10.663 12.7366 11.2989 12.2678 11.7678C11.7989 12.2366 11.163 12.5 10.5 12.5C9.83696 12.5 9.20107 12.2366 8.73223 11.7678C8.26339 11.2989 8 10.663 8 10C8 9.33696 8.26339 8.70107 8.73223 8.23223C9.20107 7.76339 9.83696 7.5 10.5 7.5C11.163 7.5 11.7989 7.76339 12.2678 8.23223C12.7366 8.70107 13 9.33696 13 10Z"
                    fill="black"
                  />
                  <path
                    d="M2.5 10C2.5 10 5.5 4.5 10.5 4.5C15.5 4.5 18.5 10 18.5 10C18.5 10 15.5 15.5 10.5 15.5C5.5 15.5 2.5 10 2.5 10ZM10.5 13.5C11.4283 13.5 12.3185 13.1313 12.9749 12.4749C13.6313 11.8185 14 10.9283 14 10C14 9.07174 13.6313 8.1815 12.9749 7.52513C12.3185 6.86875 11.4283 6.5 10.5 6.5C9.57174 6.5 8.6815 6.86875 8.02513 7.52513C7.36875 8.1815 7 9.07174 7 10C7 10.9283 7.36875 11.8185 8.02513 12.4749C8.6815 13.1313 9.57174 13.5 10.5 13.5Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/productdetails/${item.id}`}
            >
              <h5 className="h5 text-dark">{item?.attributes?.title}</h5>
            </NavLink>

            <div>
              <span className="h5 text-light-gray mr-[5px]">
                {item?.attributes?.price}$
              </span>{" "}
              <span className="h5 text-[#004E7C]">
                {item?.attributes?.price2}$
              </span>
            </div>

            <ReviewReadOnly id={item.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
