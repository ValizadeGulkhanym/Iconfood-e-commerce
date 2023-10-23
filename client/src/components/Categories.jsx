import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Categories = ({setCatId}) => {
    const [categories, setCategories]= useState([]);
   
    useEffect(() => {
        const getCategories = async () => {
          try {
            const { data } = await axios.get(
              `${
                import.meta.env.VITE_APP_STRAPI_BASE_URL
              }/api/categories`
            );
            setCategories(data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
        getCategories();
      }, []);
    
  return (
    <>
       <h5 className="h5 text-dark mb-[25px] mt-[50px] pl-[25px]">Categories</h5>
          <div className=" flex flex-col gap-[18px] pl-[25px] mb-[50px]">
          {categories?.data?.map((item) => (
            <div key={item.id} className="flex items-center gap-[8px]">
              <input onChange={()=>{
                console.log(item.id);
                setCatId(item.id)
              }}
                className=" w-[25px] h-[25px] "
                type="checkbox"
                id="coding"
              />
              <label className="h6 text-gray font-[Montserrat]">
                {item?.attributes.title}
              </label>
            </div>
  ))}
          </div>
    
    </>
  )
}

export default Categories