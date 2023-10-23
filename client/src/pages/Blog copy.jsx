import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { NavLink, useSearchParams } from "react-router-dom";
import FooterDark from "../components/FooterDark";
import { Pagination } from "antd";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [blogs, setBlogs] = useState([]);

  const handlePaginationChange = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
    setPage(page);
  };

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_APP_STRAPI_BASE_URL
          }/api/blogs?pagination[page]=${page}&pagination[pageSize]=6&populate=*`
        );
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getBlogs();
  }, [page]);

  return (
    <div>
      <Header variant="secondary" />

      <div className="flex flex-col items-center justify-center my-[80px]">
        <h5 className="h5 text-dark">LEARN WITH US</h5>
        <h1 className="h2 text-dark">THE HEALTHY DESSERT BLOG</h1>
        <div className="w-[112px] h-[40px] flex justify-between items-center">
          <NavLink className="link text-dark" to="/">
            Home
          </NavLink>
          <img
            className="w-[9px] h-[16px]"
            src="../src/assets/icn arrow-right.png"
          />
          <NavLink className="h6 text-gray" to="/productlist">
            Blog
          </NavLink>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 max-w-[1220px] mx-auto my-[112px]">
        {blogs?.data?.map((item) => (
          <BlogCard item={item} key={item.id} />
        ))}
      </div>

      <div className="flex justify-center items-center mb-[60px]">
        <Pagination
          current={page}
          onChange={handlePaginationChange}
          total={blogs?.meta?.pagination?.total}
        />
      </div>

      <div className="w-full bg-[#2A7CC7]   ">
        <div className=" max-w-[1050px] mx-auto  min-h-[257px] text-white flex items-center justify-between">
          <div className="flex flex-col gap-[1rem]">
            <h2 className="h2">Subscribe For Latest Newsletter</h2>
            <p className="paragraph w-[434px]">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
          </div>

          <Button
            font="700"
            text="Try it free now"
            textColor="#fff"
            border="1px solid #B73225"
            back="#B73225"
            radius="5px"
            p="15px 40px"
            w="191px"
            id="fullfiled-btn"
            h="52px"
          />
        </div>
      </div>
      <FooterDark />
    </div>
  );
};

export default Blog;
