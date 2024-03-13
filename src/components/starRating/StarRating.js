import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const StarRating = ({noOfStars = 5}) => {
    const [rating, setrating] = useState(0);
    const [hover, sethover] = useState(0)
    const handleClick = (e) =>{
        setrating(e);
    }
    const handleMouseHover = (e) =>{
        sethover(e);
    }
    const handleMouseLeave = () =>{
      sethover(rating);
    }
    // let totalStars = [...Array(noOfStars)].map((_, index) => {
    //     return index + 1;
    // });
    // console.log(totalStars);
  return (
    <div className='flex'>
        {
            [...Array(noOfStars)].map((_, index) => {
                index += 1;
                return <FaStar
                key={index}
                className={index <= (hover || rating) ? "text-orange-500 text-3xl" : "text-3xl"}
                onClick={() =>handleClick(index)}
                onMouseOver={() =>handleMouseHover(index)}
                onMouseLeave={() =>handleMouseLeave()}
                />
                
            })
        }
    </div>
  )
}

export default StarRating
