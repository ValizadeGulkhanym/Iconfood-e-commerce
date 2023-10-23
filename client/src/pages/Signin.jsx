import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import HeaderDark from "../components/HeaderDark";
import FooterDark from "../components/FooterDark";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { storeUser } from "../helper";

const initialUser = { password: "", identifier: "" };

const Signin = () => {
  const [user, setUser] = useState(initialUser);
  const [usernameState, setUserNameState] = useState(false);
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  console.log(user);
  const handleLogin = async () => {
    try {
      const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/auth/local`;

      if (user?.identifier && user?.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBlur = (e) => {
    const value = e.target.value;

    if (value.length < 3) {
      setUserNameState(false);
    }
    if (!value.includes("@")) {
      setUserNameState(false);
    }
 
  };

  return (
    <div>
      <HeaderDark />
      <Header variant="secondary" />
      <div className="flex justify-center items-center my-[80px] font-[Montserrat]">
        <div className="max-w-[514px] min-h-[514px] flex flex-col gap-[25px]">
          <h2 className="h2 text-center text-dark ">Welcome Back</h2>
          <button className="flex justify-center items-center gap-[15px] bg-[#2A7CC7] text-white w-[100%] rounded-[5px] p-[15px 25px] min-h-[54px]  ">
            <img src="..\src\assets\icon facebook-filled.svg" alt="" />
            Facebook
          </button>

          <div className="flex items-center justify-center gap-5">
            <hr className=" w-[186px] border border-[#dad9d9]  " />
            <p className="paragraph text-gray">OR</p>
            <hr className=" w-[186px] border border-[#dad9d9] " />
          </div>
          <form
            className="max-w-[514px] min-h-[514px] flex flex-col gap-[25px]"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <label htmlFor="" className="h6 text-dark">
              Email address *
            </label>
            <input
              onBlur={handleBlur}
              onChange={handleChange}
              name="identifier"
              value={user.identifier}
              type="email"
              placeholder="example@gmail.com "
              className="link outline-light-gray text-gray w-[100%] h-[50px] pl-[21px] pr-[258px] border bg-[#F9F9F9] border-[#E6E6E6] rounded-[5px]"
            />
            <label htmlFor="" className="h6 text-dark">
              Password *
            </label>
            <input
              onChange={handleChange}
              name="password"
              value={user.password}
              type="password"
              placeholder="Enter your password ..."
              className="link outline-light-gray text-gray w-[100%] h-[50px] pl-[21px] pr-[258px] border bg-[#F9F9F9] border-[#E6E6E6] rounded-[5px]"
            />
            <Button
              disabled={usernameState}
              text="Get Started"
              back="#2DC071"
              textColor="white"
              w="434px"
              radius="5px"
              p="15px 25px"
              minH="54px"
            />
          </form>

          <div className="flex gap-2.5 items-center justify-center">
            <h5 className="h6 text-dark">Already have an account?</h5>
            <NavLink to="/signup" className="link text-acsent font-bold">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>

      <FooterDark />
    </div>
  );
};

export default Signin;
