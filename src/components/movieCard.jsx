
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, image, year, description, cast, genre, rating, link }) => {
  return (
    <div 
    className="space-x-16 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
    >
      <Link to={`/details/${title}`}>
        <div className="w-[375px] h-[195px] overflow-hidden rounded-md">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
        </div>
        <p className="text-black mt-2 font-semibold text-left">{title}</p>
        {year && <p className="text-black font-light text-left">{year}</p>}
      </Link>
    </div>
  );
};

export default MovieCard;
