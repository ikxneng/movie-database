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
        "cast": ["Marlon Brando ", "Al Pacino ", "James Caan"],
        "genre": "Crime Drama"
      },
      {
        "image": "/src/assets/forrestgump.jpg",
        "title": "Forrest Gump",
        "rating": "4.0",
        "link": "https://youtu.be/bLvqoHBptjg?si=ihHqUDx1HOz75bWk",
        "description": "The story of a man with a low IQ who achieves extraordinary things in his life.",
        "cast": ["Tom Hanks ", "Robin Wright ", "Gary Sinise"],
        "genre": "Drama Romance"
      },
      {
        "image": "/src/assets/thelionking.jpeg",
        "title": "The Lion King",
        "rating": "4.7",
        "link": "https://youtu.be/lFzVJEksoDY?si=IhIK5SGFYVfkrbxn",
        "description": "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        "cast": ["Matthew Broderick ", "Jeremy Irons ", "James Earl Jones"],
        "genre": "Animation Adventure"
      },

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
                    <p className="text-gray-600 text-lg">{movie.year}  {movie.genre}</p>
                    
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
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
