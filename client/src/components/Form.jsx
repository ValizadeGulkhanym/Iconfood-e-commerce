import React, { useState } from "react";


const Form = () => {
 
  const [inputValue, setInputValue] = useState("");
 
  const [search, setSearch] = useState([]);
console.log(search);
  const handleSubmit = () => {
    setSearch(inputValue);
    
  };

  return (
    <>
    
        <form onSubmit={handleSubmit} className="text-dark">
          <input
       
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="w-[90%] h-[40px] rounded pl-5 outline-none border border-light-gray"
            placeholder="Search..."
          />
        </form>
    
    </>
  );
};

export default Form;
