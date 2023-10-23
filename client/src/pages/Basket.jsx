import React, { useEffect } from "react";
import Header from "../components/Header";
import FooterDark from "../components/FooterDark";
import HeaderDark from "../components/HeaderDark";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  decreaseCart,
  deleteAll,
  deleteProduct,
} from "../store/reducers/basketReducer";
const Basket = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { basketTotalAmount } = useSelector((state) => state.cart);
  const { basketTotalQuantity } = useSelector((state) => state.cart);
  
  console.log(cart);
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleDeleteProduct = (item) => {
    dispatch(deleteProduct(item));
  };
  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  const handleIncreaseCart = (item) => {
    dispatch(addToBasket(item));
  };

  return (
    <>
      <HeaderDark />
      <Header variant="primary" />
      <div className="w-full  mt-[70px] flex flex-col gap-[48px] items-center">
        <h3 className="h3 text-dark">MY SHOPPING CART</h3>

        <div>
          <div
            className="cart-items w-[1050px] min-h-[180px] rounded
           container shadow bg-[#FAFAFA] "
          >
            {cart.items?.map((item) => (
              <div
                className="cart-item py-[40px] px-[50px]  flex  justify-between"
                key={item.id}
              >
                <div className="cart-product flex items-center  gap-5 ">
                  <img
                    className="w-[150px] h-[150px]"
                    src={`${import.meta.env.VITE_APP_STRAPI_BASE_URL}${
                      item?.attributes?.img.data?.attributes?.url
                    }`}
                  />
                  <div className="w-[100px]">
                    <h3 className="h5 text-dark">{item?.attributes?.title}</h3>
                  </div>
                </div>

                <div className="cart-product-price text-[#2DC071] flex justify-center items-center ">
                  ${item?.attributes?.price}
                </div>
                <div className="quantity flex justify-center items-center">
                  <button
                    className="border border-gray w-[30px] h-[35px] "
                    onClick={() => handleDecreaseCart(item)}
                  >
                    -
                  </button>
                  <div className="flex justify-center items-center border border-gray w-[30px] h-[35px]">
                    {item?.quantity}
                  </div>
                  <button
                    onClick={() => handleIncreaseCart(item)}
                    className="border border-gray w-[30px] h-[35px]"
                  >
                    +
                  </button>
                </div>
                <div className="cart-product-total-price flex justify-center items-center text-[#e63a0a]">
                  ${item?.attributes?.price * item?.quantity}
                </div>
                <button
                  className="text-gray flex justify-center items-center  "
                  onClick={() => {
                    handleDeleteProduct(item);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary sm: flex flex-col items-center gap-2 my-[4rem] md:flex-row justify-between ">
            <button
              className="sm: w-[300px] h-[43px] border border-[2px solid #2DC071] btn-text rounded hover:scale-105 duration-150 text-[#2DC071] md:w-[90px] h-[40px] "
              onClick={() => {
                handleDeleteAll();
              }}
            >
              Clear Cart
            </button>
            <div className="flex flex-col gap-3">
              <div className="subtotal flex justify-between items-center">
                <span className="h3 text-dark">Total</span>
                <span className="text-[#e63a0a] h4">${basketTotalAmount}</span>
              </div>
              <div className="flex  justify-between items-center">
                <h6 className="h4 text-dark">Count:</h6>
                <div className="count h4 text-dark ">{basketTotalQuantity}</div>
              </div>
              <p className="paragraph text-gray">
                Taxes and shipping calculated at chekout
              </p>
              <button className="bg-[#2DC071] rounded text-white btn-text  w-[300px] h-[43px] ">
                Confirm Cart
              </button>
              <button
                className="border border-[2px solid #2DC071] btn-text rounded text-[#2DC071]    w-[300px] h-[43px] "
                onClick={() => {
                  navigate("/");
                }}
              >
                Go Shopping
              </button>
            </div>
          </div>
        </div>
        {/*  )}*/}
      </div>
      <FooterDark />
    </>
  );
};

export default Basket;
