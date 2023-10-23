import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import FooterDark from "../components/FooterDark";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const initialUser = { email: "", password: "", username: "" };

const Signup = () => {
  const submit = (e) => {
    e.preventDefault();
    signUp();
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  console.log(user);
  const signUp = async () => {
    try {
      const url = `${
        import.meta.env.VITE_APP_STRAPI_BASE_URL
      }/api/auth/local/register`;
      if (user?.username && user?.email && user?.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          setUser(initialUser);
          navigate("/signin");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header variant="secondary" />
      <div className="flex justify-center items-center my-[80px] font-[Montserrat]">
        <div className="max-w-[514px] min-h-[514px] flex flex-col gap-[25px]">
          <h2 className="h2 text-center text-dark font-[Montserrat]">
            Sign up for free
          </h2>
          <h5 className="h5 text-gray font-[Montserrat] text-center">
            Try everything free for 30 days, no payment details required
          </h5>
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
            onSubmit={handleSubmit(submit)}
          >
            <label className="h6 text-dark">Name *</label>
            <input
              {...register("fullname")}
              onChange={handleChange}
              type="text"
              name="username"
              value={user.username}
              placeholder="Full Name"
              className="link outline-light-gray text-gray w-[100%] h-[50px] pl-[21px] pr-[258px] border bg-[#F9F9F9] border-[#E6E6E6] rounded-[5px]"
            />{" "}
            {errors.firstname && (
              <span className="text-red">{errors.firstname.message}</span>
            )}
            <label className="h6 text-dark">Email address *</label>
            <input
              {...register("email", {
                required: "Emailinizi qeyd edin",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email düzgün qeyd olunmayıb",
                },
              })}
              onChange={handleChange}
              name="email"
              value={user.email}
              type="email"
              placeholder="example@gmail.com "
              className="link outline-light-gray  text-gray w-[100%] h-[50px] pl-[21px] pr-[258px] border bg-[#F9F9F9] border-[#E6E6E6] rounded-[5px]"
            />{" "}
            {errors.email && (
              <span className="alert-message">{errors.email.message}</span>
            )}
            <label className="h6 text-dark">Password *</label>
            <input
              {...register("password")}
              onChange={handleChange}
              name="password"
              value={user.password}
              type="password"
              placeholder="Password"
              className="link outline-light-gray text-gray w-[100%] h-[50px] pl-[21px] pr-[258px] border bg-[#F9F9F9] border-[#E6E6E6] rounded-[5px]"
            />
            <Button
              text="Get Started"
              back="#2DC071"
              textColor="white"
              w="434px"
              radius="5px"
              p="15px 25px"
              minH="54px"
            />
          </form>

          <small className="text-gray">
            By filling in the form above and clicking the “Get Started” button,
            you accept and agree to Terms of Service and Privacy Policy.
          </small>
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

export default Signup;
