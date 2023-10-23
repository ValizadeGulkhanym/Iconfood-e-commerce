import React from "react";
import { NavLink } from "react-router-dom";
const HeaderDark = () => {
  return (
    <div className="sm:hidden lg:flex bg-dark h-[58px] flex items-center">
      <div className="w-[1290px] flex  justify-between mx-auto">
        <div className="flex gap-2 items-center hover:scale-125">
          <img src="../src/assets/phone.png" />
          <h6 className="h6 text-white  ">(225) 555-01-18</h6>
        </div>
        <div className="flex gap-2 items-center hover:scale-125">
          <img src="../src/assets/mail.png" />
          <h6 className="h6 text-white ">michelle.rivera@example.com</h6>
        </div>
        <h6 className="h6 text-white hover:scale-125 ">
          Follow Us and get a chance to win 80% off
        </h6>

        <div className="flex items-center gap-[10px]">
          <h6 className="h6 text-white hover:scale-125">Follow Us:</h6>
          <a href="https://www.instagram.com">
  <img className="hover:scale-125"  src="../src/assets/insta.png" alt="Instagram" />
</a>

   <a href="https://www.youtube.com"> <img className="hover:scale-125" src="../src/assets/youtube.png"  /></a> 
   <a href="https://www.facebook.com"> <img className="hover:scale-125"  src="../src/assets/face.png" /></a>
   <a href="https://www.twitter.com">      <img className="hover:scale-125"  src="../src/assets/twit.png" /></a>
        </div>
      </div>
    </div>
  );
};

export default HeaderDark;
