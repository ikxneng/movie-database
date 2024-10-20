import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieCard from './movieCard';

// Movie data array with images and titles

  const movieData = [
    {
      "image": "/assets/werethemillers.jpg",
      "title": "We're the Millers",
      "year": "2013",
      "description": "A small-time pot dealer creates a fake family as part of his plan to smuggle drugs into the U.S.",
      "cast": ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts"],
      "genre": "Comedy",
      "rating": "3.5"
    },
    {
      "image": "/assets/metime.jpg",
      "title": "Me Time",
      "year": "2023",
      "description": "A stay-at-home dad's wild weekend with an old friend spirals out of control.",
      "cast": ["Kevin Hart", "Mark Wahlberg", "Regina Hall"],
      "genre": "Comedy",
      "rating": "2.5"
    },
    {
      "image": "/assets/Green-Book.jpg",
      "title": "Green Book",
      "year": "2018",
      "description": "A tour through the Deep South with an African American classical pianist and his driver.",
      "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
      "genre": "Drama",
      "rating": "4.1"
    }
  ]

  const recommendedMovies = [
    {
      "image": "/assets/Green-Book.jpg",
      "title": "Green Book",
      "year": "2018",
      "description": "A tour through the Deep South with an African American classical pianist and his driver.",
      "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
      "genre": "Drama",
      "rating": "4.1"
    },
    {
      "image": "/assets/Rush Hour.jpg",
      "title": "Rush Hour",
      "year": "1998",
      "description": "A Hong Kong detective teams up with an LAPD officer to rescue the Chinese Consul's kidnapped daughter.",
      "cast": ["Jackie Chan", "Chris Tucker", "Tom Wilkinson"],
      "genre": "Action, Comedy",
      "rating": "3.5"
    },
    {
      "image": "/assets/Union.jpg",
      "title": "Union",
      "year": "2024",
      "description": "A futuristic story where humans and AI work together to face an impending crisis.",
      "cast": ["Mark Wahlberg", "Halle Berry"],
      "genre": "Sci-Fi, Thriller",
      "rating": "N/A"
    },
    {
      "image": "/assets/bladerunner.jpg",
      "title": "Blade Runner 2049",
      "year": "2017",
      "description": "A young blade runner discovers a long-buried secret that leads him to track down former blade runner Rick Deckard.",
      "cast": ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
      "genre": "Sci-Fi, Action",
      "rating": "4.0"
    },
    {
      "image": "/assets/fallguymovie-poster.jpg",
      "title": "Fall Guy",
      "year": "2023",
      "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
      "cast": ["Ryan Gosling", "Emma Blunt"].join(', '),
      "genre": "Action, Comedy",
      "rating": "3"
    },
  ]

  const comedyMovies = [
    {
      "image": "/assets/werethemillers.jpg",
      "title": "We're the Millers",
      "year": "2013",
      "description": "A small-time pot dealer creates a fake family as part of his plan to smuggle drugs into the U.S.",
      "cast": ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts"],
      "genre": "Comedy",
      "rating": "3.5"
    },
    {
      "image": "/assets/metime.jpg",
      "title": "Me Time",
      "year": "2023",
      "description": "A stay-at-home dad's wild weekend with an old friend spirals out of control.",
      "cast": ["Kevin Hart", "Mark Wahlberg", "Regina Hall"],
      "genre": "Comedy",
      "rating": "2.5"
    },
    {
      "image": "/assets/pinkpanther2.jpg",
      "title": "Pink Panther 2",
      "year": "2009",
      "description": "Inspector Clouseau and his bumbling team of detectives chase down a master thief.",
      "cast": ["Steve Martin", "Jean Reno", "Emily Mortimer"],
      "genre": "Comedy, Crime",
      "rating": "2.8"
    },
    {
      "image": "/assets/crazystupidlove.jpg",
      "title": "Crazy, Stupid, Love",
      "year": "2011",
      "description": "A middle-aged man learns how to date again after his marriage falls apart.",
      "cast": ["Steve Carell", "Ryan Gosling", "Emma Stone"],
      "genre": "Comedy, Romance",
      "rating": "3.7"
    },
    {
      "image": "/assets/fallguymovie-poster.jpg",
      "title": "Fall Guy",
      "year": "2023",
      "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
      "cast": ["Ryan Gosling", "Emma Blunt"].join(', '),
      "genre": "Action, Comedy",
      "rating": "3"
    },
  ]

  const dramaMovies = [
    {
      "image": "/assets/dunept2.jpg",
      "title": "Dune: Part Two",
      "year": "2024",
      "description": "Paul Atreides unites with the Fremen to take vengeance against the conspirators who destroyed his family.",
      "cast": ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
      "genre": "Sci-Fi, Adventure, Drama",
      "rating": "N/A"
    },
    {
      "image": "/assets/Green-Book.jpg",
      "title": "Green Book",
      "year": "2018",
      "description": "A tour through the Deep South with an African American classical pianist and his driver.",
      "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
      "genre": "Drama",
      "rating": "4.1"
    },
    {
      "image": "/assets/shesaid.jpg",
      "title": "She Said",
      "year": "2022",
      "description": "Two New York Times reporters break one of the most important stories in a generation — a story that helped ignite a movement.",
      "cast": ["Carey Mulligan", "Zoe Kazan", "Patricia Clarkson"],
      "genre": "Drama, History",
      "rating": "3.6"
    },
    {
      "image": "/assets/the-unforgivable.jpeg",
      "title": "The Unforgivable",
      "year": "2021",
      "description": "A woman attempts to rebuild her life after serving a prison sentence for a violent crime.",
      "cast": ["Sandra Bullock", "Viola Davis", "Rob Morgan"],
      "genre": "Drama, Crime",
      "rating": "3"
    },
    {
      "image": "/assets/frey-allen-planet-of-the-apes-banner-1.jpg",
      "title": "Kingdom of the Planet of the Apes",
      "year": "2024",
      "description": "In a world ruled by apes, humans struggle for survival as new alliances and enemies emerge.",
      "cast": ["Freya Allan", "Kevin Durand", "Peter Macon"],
      "genre": "Sci-Fi, Action, Drama",
      "rating": "N/A"
    }
  ]

  const topRatedMovies = [
    {
      "image": "/assets/thegodfather.jpg",
      "title": "The Godfather",
      "rating": "4.7",
      "link": "https://youtu.be/w3Wo6QiD3eU?si=dH71_QbmlnszYROL",
      "description": "The patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
      "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
      "genre": "Crime, Drama"
    },
    {
      "image": "/assets/forrestgump.jpg",
      "title": "Forrest Gump",
      "rating": "4.0",
      "link": "https://youtu.be/bLvqoHBptjg?si=ihHqUDx1HOz75bWk",
      "description": "The story of a man with a low IQ who achieves extraordinary things in his life.",
      "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      "genre": "Drama, Romance"
    },
    {
      "image": "/assets/thelionking.jpeg",
      "title": "The Lion King",
      "rating": "4.7",
      "link": "https://youtu.be/lFzVJEksoDY?si=IhIK5SGFYVfkrbxn",
      "description": "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
      "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
      "genre": "Animation, Adventure"
    }
  ]

const languages = ["EN", "FR", "ES", "DE", "IT", "JP"]; 

const translations = {
  EN: {
    recommended: "Recommended Movies",
    comedy: "Comedy Movies",
    drama: "Drama Movies",
    topMovies: "Top-rated Movies on OMDb",
  },
  FR: {
    recommended: "Films Recommandés",
    comedy: "Films Comiques",
    drama: "Films Dramatiques",
    topMovies: "Films les Mieux Notés sur OMDb",
  },
  ES: {
    recommended: "Películas Recomendadas",
    comedy: "Películas de Comedia",
    drama: "Películas de Drama",
    topMovies: "Películas Mejor Calificadas en OMDb",
  },
  DE: {
    recommended: "Empfohlene Filme",
    comedy: "Komödienfilme",
    drama: "Dramafilme",
    topMovies: "Top-Bewertete Filme auf OMDb",
  },
  IT: {
    recommended: "Film Consigliati",
    comedy: "Film Comici",
    drama: "Film Drammatici",
    topMovies: "Film Più Votati su OMDb",
  },
  JP: {
    recommended: "おすすめ映画",
    comedy: "コメディ映画",
    drama: "ドラマ映画",
    topMovies: "OMDbのトップレート映画",
  },
};


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movieDetails, setMovieDetails] = useState({});
  const [languages, setLanguages] = useState("EN");
  const API_KEY = "2681f0d6";


  const fetchMovieDetails = (title) => {
    axios
      .get(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movieData.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movieData.length) % movieData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Automatically switch images
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    fetchMovieDetails(movieData[currentIndex].title);
  }, [currentIndex]);

  return (
    <div className="relative h-full w-full overflow-hidden">
  {/* Main Carousel for large screens only */}
  <div className="relative h-screen hidden lg:block">  {/* Hidden on small and medium screens */}
    <div className="absolute inset-0">
      {movieData.map((movie, index) => (
        <Link
          key={index}
          to={`/details/${movie.title}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${movie.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Link>
      ))}
    </div>

    {/* Navigation Buttons */}
    <button
      onClick={prevImage}
      className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full"
    >
      &#8249;
    </button>
    <button
      onClick={nextImage}
      className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full"
    >
      &#8250;
    </button>

    {/* Dots for Manual Controls */}
    <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-4 pb-4">
      {movieData.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full ${
            index === currentIndex ? "bg-white" : "bg-gray-400"
          }`}
        ></button>
      ))}
    </div>
  </div>

  {/* Movie Sections (Visible on all screen sizes) */}
  <div className="mt-12">
    {/* Recommended Movies Section */}
    <h2 className="text-2xl font-bold ml-0 mb-4 text-left">
      {translations[languages].recommended}
    </h2>
    <div className="relative flex flex-wrap md:flex-nowrap overflow-x-scroll md:overflow-visible scrollbar-hide space-x-4">
      {recommendedMovies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          year={movie.year}
          description={movie.description}
          cast={movie.cast}
          genre={movie.genre}
          rating={movie.rating}
        />
      ))}
    </div>
  </div>

  {/* Comedy Movies Section */}
  <div className="mt-12">
    <h2 className="text-2xl font-bold ml-0 mb-4 text-left">
      {translations[languages].comedy}
    </h2>
    <div className="relative flex flex-wrap md:flex-nowrap overflow-x-scroll md:overflow-visible scrollbar-hide space-x-4">
      {comedyMovies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          year={movie.year}
          description={movie.description}
          cast={movie.cast}
          genre={movie.genre}
          rating={movie.rating}
        />
      ))}
    </div>
  </div>

  {/* Drama Movies Section */}
  <div className="mt-12">
    <h2 className="text-2xl font-bold ml-0 mb-4 text-left">
      {translations[languages].drama}
    </h2>
    <div className="relative flex flex-wrap md:flex-nowrap overflow-x-scroll md:overflow-visible scrollbar-hide space-x-4">
      {dramaMovies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          year={movie.year}
          description={movie.description}
          cast={movie.cast}
          genre={movie.genre}
          rating={movie.rating}
        />
      ))}
    </div>
  </div>

  {/* Top-Rated Movies */}
  <div className="mt-12">
    <h2 className="text-2xl font-bold ml-0 mb-4 text-left">
      {translations[languages].topMovies}
    </h2>
    <div className="relative flex flex-wrap md:flex-nowrap ml-0 md:ml-9 gap-6 overflow-x-scroll md:overflow-visible scrollbar-hide space-x-4">
      {topRatedMovies.map((movie, index) => (
        <div
          key={index}
          className="relative flex-grow-0 flex-shrink-0 w-[90%] sm:w-[70%] md:w-[40%] lg:w-[365px] space-x-16 text-center"
        >
          {/* Movie Image */}
          <Link to={`/details/${movie.title}`}>
            <div className="w-full h-[509px] overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </Link>

          {/* Movie Title */}
          <p className="text-black text-xl mt-2 font-bold">{movie.title}</p>

          {/* Movie Rating */}
          <div className="text-yellow-500 flex justify-center mt-1">
            {Array.from({ length: Math.round(movie.rating) }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default Home;
