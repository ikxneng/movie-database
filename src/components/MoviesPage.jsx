import React, { useState } from "react";
import {Link} from 'react-router-dom';

const comedyMovies = [
    {
        image: "/assets/werethemillers.jpg",
        title: "We're the Millers", 
        year: "2013",
    },
    {
        image: "/assets/metime.jpg",
        title: "Me Time",
        year: "2023",
    }, 
    {
        image: "/assets/pinkpanther2.jpg",
        title: "Pink Panther 2",
        year: "2009",
    }, 
    {
        image: "/assets/crazystupidlove.jpg",
        title: "Crazy, Stupid Love",
        year: "2011",
    }, 
    {
        image: "/assets/fallguymovie-poster.jpg",
        title: "Fall Guy",
        year: "2023",
    },
]

const dramaMovies = [
    {
        image: "/assets/dunept2.jpg",
        title: "Dune: Part Two",
        year: "2024",
    },
    {
        image: "/assets/Green-Book.jpg",
        title: "Green Book",
        year: "2018",
    },
    {
        image: "/assets/shesaid.jpg",
        title: "She Said",
        year: "2022",
    },
    {
        image: "/assets/the-unforgivable.jpeg",
        title: "The Unforgivable",
        year: "2021",
    },
    {
        image: "/assets/frey-allen-planet-of-the-apes-banner-1.jpg",
        title: "Kingdom of the Planet of the Apes",
        year: "2024",
    },
]
const actionMovies = [
  {
    image: "",
    title: "",
    year: "",
  },
  {
    image: "",
    title: "",
    year: "",
  },
  {
    image: "",
    title: "",
    year: "",
  },
  {
    image: "",
    title: "",
    year: "",
  },
  {
    image: "",
    title: "",
    year: "",
  },

]


const MoviesPage = () => {
  const genres = [ "Comedy", "Drama", "Action"];
  const [selectedGenre, setSelectedGenre] = useState("Comedy");
  const [sortOption, setSortOption] = useState("yearDesc");

  const moviesData = {
    Comedy: comedyMovies,
    Drama: dramaMovies,
    Action: actionMovies,
  };

  const sortedMovies = [...moviesData[selectedGenre]].sort((a, b) => {
    if (sortOption === "yearDesc") return b.year - a.year;
    if (sortOption === "yearAsc") return a.year - b.year;
    if (sortOption === "a-z") return a.title.localeCompare(b.title);
    return b.title.localeCompare(a.title);
  });

  return (
    <div className="p-8">
      {/* Container for Genre Select and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Genre Select Dropdown */}
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="mb-2 md:mb-0 px-4 py-2 rounded border border-gray-300 text-black"
        >
          <option value="" disabled>Select a Genre</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        {/* Sort Dropdown */}
        <select
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300"
          value={sortOption}
        >
          <option value="yearDesc">Year Released: Descending</option>
          <option value="yearAsc">Year Released: Ascending</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sortedMovies.map((movie, index) => (
          <Link to={`/details/${movie.title}`}>
          <div key={index} 
              className="bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          >
              <div className="w-full h-[195px] overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-black mt-2 font-semibold text-left">{movie.title}</h3>
                <p className="text-black font-light text-left">{movie.year}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
