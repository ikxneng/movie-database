import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { title } = useParams();  
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY; // Use an environment variable

    useEffect(() => {
        async function fetchMovieData() {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
                setMovie(response.data);
            } catch (err) {
                setError("Failed to fetch movie details.");
            } finally {
                setLoading(false);
            }
        }
        fetchMovieData();
    }, [title]);  // Corrected dependency array

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!movie || movie.Response === "False") return <p>No movie data found.</p>; // Handle no data

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Movie Cover */}
                <div className="w-full md:w-1/3">
                    {movie.Poster !== "N/A" ? (
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>

                {/* Movie Details */}
                <div className="w-full md:w-2/3 space-y-4">
                    <h1 className="text-4xl font-bold">{movie.Title}</h1>
                    <p className="text-gray-600 text-lg">{movie.Year} | {movie.Genre}</p>
                    
                    {/* Movie Description */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">About the Movie</h2>
                        <p className="text-gray-700">{movie.Plot}</p>
                    </div>

                    {/* Cast */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Cast</h2>
                        <p className="text-gray-700">{movie.Actors}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
