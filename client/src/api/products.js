import { instance } from "./index";

export const 
getProducts = async () => {
  const res = await instance.get("/products?populate=*");
  return res.data;
};
