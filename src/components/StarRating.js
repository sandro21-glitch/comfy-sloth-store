import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];
  const maxRating = 5;
  const roundedRating = Math.round(rating * 2) / 2;

  for (let i = 0; i < maxRating; i++) {
    if (i < roundedRating) {
      if (i + 1 <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500 w-6 h-6" />);
      } else {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-500 w-6 h-6" />
        );
      }
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500 w-6 h-6" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
