import React from "react";

const Button = ({size,family,onClick, gap, p,id, icon, minH,minW,h,w,text,font, display, back, textColor, border, radius }) => {
  const btnStyle = {
    backgroundColor: back,
    color: textColor,
    border: border,
    borderRadius: radius,
    minHeight:minH,
    minWidth: minW,
    height: h,
    weight: w,
    fontWeight: font,
    fontSize: size,
    fontFamily: family,
    padding: p,
     display,
    gap, 
  };

  return (
    <button onClick={onClick} style={btnStyle} id={id} className="flex justify-center items-center">
      {text}
    <i>{icon}</i>
    </button>
  );
};

export default Button;
