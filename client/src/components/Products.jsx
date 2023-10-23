import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Pagination } from "antd";
import Product from "./Product";
import { useSearchParams } from "react-router-dom";

const Products = ({ catId }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const title = useSelector((state) => state.search.keyword);
  const [products, setProducts] = useState(searchParams.get("products") || []);
  const [page, setPage] = useState(searchParams.get("page") || 1);

  const handlePaginationChange = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
    setPage(page);
  };

  console.log(catId);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_APP_STRAPI_BASE_URL
          }/api/products?pagination[page]=${page}&pagination[pageSize]=9&populate=*${
            title ? `&_q=${title}` : ""
          }&${catId ? `filters[categories][id][$eq]=${catId}` : ""}`
        );
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, [page, title, catId]);

  console.log(products);

  return (
    <>
      <div className="flex w-[calc(100% - 48px)*3] gap-[48px]  mx-auto flex-wrap justify-center   mt-[64px] mb-[120px]">
        {products?.data?.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
      <div className="flex  justify-center items-center pb-[70px]">
        <Pagination
          current={page}
          onChange={handlePaginationChange}
          total={products?.meta?.pagination?.total}
        />
      </div>
    </>
  );
};

export default Products;
