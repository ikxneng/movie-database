import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { title } = useParams();  
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const API_KEY = process.env.REACT_APP_OMDB_API_KEY; // Use an environment variable
    const movieData = [ 
        {
        "image": "/src/assets/thegodfather.jpg",
        "title": "The Godfather",
        "rating": "4.7",
        "link": "https://youtu.be/w3Wo6QiD3eU?si=dH71_QbmlnszYROL",
        "description": "The patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
        "cast": ["Marlon Brando, ", "Al Pacino, ", "James Caan"],
        "genre": "Crime Drama"
      },
      {
        "image": "/src/assets/forrestgump.jpg",
        "title": "Forrest Gump",
        "rating": "4.0",
        "link": "https://youtu.be/bLvqoHBptjg?si=ihHqUDx1HOz75bWk",
        "description": "The story of a man with a low IQ who achieves extraordinary things in his life.",
        "cast": ["Tom Hanks, ", "Robin Wright, ", "Gary Sinise"],
        "genre": "Drama Romance"
      },
      {
        "image": "/src/assets/thelionking.jpeg",
        "title": "The Lion King",
        "rating": "4.7",
        "link": "https://youtu.be/lFzVJEksoDY?si=IhIK5SGFYVfkrbxn",
        "description": "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        "cast": ["Matthew Broderick, ", "Jeremy Irons, ", "James Earl Jones"],
        "genre": "Animation Adventure"
      },
      {
        "image": "/src/assets/werethemillers.jpg",
        "title": "We're the Millers",
        "year": "2013",
        "description": "A small-time pot dealer creates a fake family as part of his plan to smuggle drugs into the U.S.",
        "cast": ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts"],
        "genre": "Comedy",
        "rating": "7.0"
      },
      {
        "image": "/src/assets/metime.jpg",
        "title": "Me Time",
        "year": "2023",
        "description": "A stay-at-home dad's wild weekend with an old friend spirals out of control.",
        "cast": ["Kevin Hart", "Mark Wahlberg", "Regina Hall"],
        "genre": "Comedy",
        "rating": "5.0"
      },
      {
        "image": "/src/assets/Green-Book.jpg",
        "title": "Green Book",
        "year": "2018",
        "description": "A tour through the Deep South with an African American classical pianist and his driver.",
        "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
        "genre": "Drama",
        "rating": "8.2"
      },
      {
        "image": "/src/assets/Green-Book.jpg",
        "title": "Green Book",
        "year": "2018",
        "description": "A tour through the Deep South with an African American classical pianist and his driver.",
        "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
        "genre": "Drama",
        "rating": "8.2"
      },
      {
        "image": "/src/assets/Rush Hour.jpg",
        "title": "Rush Hour",
        "year": "1998",
        "description": "A Hong Kong detective teams up with an LAPD officer to rescue the Chinese Consul's kidnapped daughter.",
        "cast": ["Jackie Chan", "Chris Tucker", "Tom Wilkinson"],
        "genre": "Action, Comedy",
        "rating": "7.0"
      },
      {
        "image": "/src/assets/Union.jpg",
        "title": "Union",
        "year": "2024",
        "description": "A futuristic story where humans and AI work together to face an impending crisis.",
        "cast": ["Placeholder Actor 1", "Placeholder Actor 2"],
        "genre": "Sci-Fi, Thriller",
        "rating": "N/A"
      },
      {
        "image": "/src/assets/bladerunner.jpg",
        "title": "Blade Runner 2049",
        "year": "2017",
        "description": "A young blade runner discovers a long-buried secret that leads him to track down former blade runner Rick Deckard.",
        "cast": ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
        "genre": "Sci-Fi, Action",
        "rating": "8.0"
      },
      {
        "image": "/src/assets/Black-Adam.jpg",
        "title": "Fall Guy",
        "year": "2023",
        "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
        "cast": ["Placeholder Actor 1", "Placeholder Actor 2"],
        "genre": "Action, Comedy",
        "rating": "N/A"
      },
      {
        "image": "/src/assets/werethemillers.jpg",
        "title": "We're the Millers",
        "year": "2013",
        "description": "A small-time pot dealer creates a fake family as part of his plan to smuggle drugs into the U.S.",
        "cast": ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts"],
        "genre": "Comedy",
        "rating": "7.0"
      },
      {
        "image": "/src/assets/metime.jpg",
        "title": "Me Time",
        "year": "2023",
        "description": "A stay-at-home dad's wild weekend with an old friend spirals out of control.",
        "cast": ["Kevin Hart", "Mark Wahlberg", "Regina Hall"],
        "genre": "Comedy",
        "rating": "5.0"
      },
      {
        "image": "/src/assets/pinkpanther2.jpg",
        "title": "Pink Panther 2",
        "year": "2009",
        "description": "Inspector Clouseau and his bumbling team of detectives chase down a master thief.",
        "cast": ["Steve Martin", "Jean Reno", "Emily Mortimer"],
        "genre": "Comedy, Crime",
        "rating": "5.6"
      },
      {
        "image": "/src/assets/crazystupidlove.jpg",
        "title": "Crazy, Stupid, Love",
        "year": "2011",
        "description": "A middle-aged man learns how to date again after his marriage falls apart.",
        "cast": ["Steve Carell", "Ryan Gosling", "Emma Stone"],
        "genre": "Comedy, Romance",
        "rating": "7.4"
      },
      {
        "image": "/src/assets/fallguymovie-poster.jpg",
        "title": "Fall Guy",
        "year": "2023",
        "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
        "cast": ["Placeholder Actor 1", "Placeholder Actor 2"],
        "genre": "Action, Comedy",
        "rating": "N/A"
      },
      {
        "image": "/src/assets/dunept2.jpg",
        "title": "Dune: Part Two",
        "year": "2024",
        "description": "Paul Atreides unites with the Fremen to take vengeance against the conspirators who destroyed his family.",
        "cast": ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        "genre": "Sci-Fi, Adventure, Drama",
        "rating": "N/A"
      },
      {
        "image": "/src/assets/Green-Book.jpg",
        "title": "Green Book",
        "year": "2018",
        "description": "A tour through the Deep South with an African American classical pianist and his driver.",
        "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
        "genre": "Drama",
        "rating": "8.2"
      },
      {
        "image": "/src/assets/shesaid.jpg",
        "title": "She Said",
        "year": "2022",
        "description": "Two New York Times reporters break one of the most important stories in a generation — a story that helped ignite a movement.",
        "cast": ["Carey Mulligan", "Zoe Kazan", "Patricia Clarkson"],
        "genre": "Drama, History",
        "rating": "7.2"
      },
      {
        "image": "/src/assets/the-unforgivable.jpeg",
        "title": "The Unforgivable",
        "year": "2021",
        "description": "A woman attempts to rebuild her life after serving a prison sentence for a violent crime.",
        "cast": ["Sandra Bullock", "Viola Davis", "Rob Morgan"],
        "genre": "Drama, Crime",
        "rating": "7.1"
      },
      {
        "image": "/src/assets/frey-allen-planet-of-the-apes-banner-1.jpg",
        "title": "Kingdom of the Planet of the Apes",
        "year": "2024",
        "description": "In a world ruled by apes, humans struggle for survival as new alliances and enemies emerge.",
        "cast": ["Placeholder Actor 1", "Placeholder Actor 2"],
        "genre": "Sci-Fi, Action, Drama",
        "rating": "N/A"
      },
      {
        "image": "/src/assets/thegodfather.jpg",
        "title": "The Godfather",
        "rating": "4.7",
        "link": "https://youtu.be/w3Wo6QiD3eU?si=dH71_QbmlnszYROL",
        "description": "The patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
        "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
        "genre": "Crime, Drama"
      },
      {
        "image": "/src/assets/forrestgump.jpg",
        "title": "Forrest Gump",
        "rating": "4.0",
        "link": "https://youtu.be/bLvqoHBptjg?si=ihHqUDx1HOz75bWk",
        "description": "The story of a man with a low IQ who achieves extraordinary things in his life.",
        "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        "genre": "Drama, Romance"
      },
      {
        "image": "/src/assets/thelionking.jpeg",
        "title": "The Lion King",
        "rating": "4.7",
        "link": "https://youtu.be/lFzVJEksoDY?si=IhIK5SGFYVfkrbxn",
        "description": "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        "genre": "Animation, Adventure"
      }
    ]
    
    useEffect(() => {
        setLoading(true);
        const foundMovie = movieData.find((movie) => movie.title === title);
        if (foundMovie) {
            setMovie(foundMovie);
        } else {
            setError("Movie not found.");
        }
        setLoading(false);
    }, [title]);

    // useEffect(() => {
    //     async function fetchMovieData() {
    //         try {
    //             const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
    //             setMovie(response.data);
    //         } catch (err) {
    //             setError("Failed to fetch movie details.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchMovieData();
    // }, [title]);  // Corrected dependency array

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!movie || movie.Response === "False") return <p>No movie data found.</p>; // Handle no data

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Movie Cover */}
                <div className="w-full md:w-1/3">
                    {movie.image !== "N/A" ? (
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>

                {/* Movie Details */}
                <div className="w-full md:w-2/3 space-y-4">
                    <h1 className="text-4xl font-bold">{movie.title}</h1>

                {/* Movie Genre  */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Genre</h2>
                        <p className="text-gray-600 text-lg">{movie.genre}</p>

                    </div>
                {/* Movie Year Released */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Year</h2>
                        <p className="text-gray-600 text-lg">{movie.year}</p>

                    </div>
                    
                    {/* Movie Description */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">About the Movie</h2>
                        <p className="text-gray-700">{movie.description}</p>
                    </div>

                    {/* Cast */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Cast</h2>
                        <p className="text-gray-700">{movie.cast}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Rating</h2>
                        <p className="text-gray-600 text-lg">{movie.rating}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
