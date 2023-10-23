import React from 'react'

const Circle = ({background,border,w,h}) => {
    const circleStyle ={
        backgroundColor: background,
        width: w,
        height: h,
        border: border,
    }
  return (
    <div style={circleStyle} className='hover:scale-125 rounded-[50%]'></div>
  )
}

export default Circle