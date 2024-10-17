import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { title } = useParams();  
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Movie data array with images and titles
    const movieData = [ 
      {
        "image": "assets/thegodfather.jpg",
        "title": "The Godfather",
        "rating": "4.7",
        "link": "https://youtu.be/w3Wo6QiD3eU?si=dH71_QbmlnszYROL",
        "description": "The patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
        "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
        "genre": "Crime Drama"
      },
      {
        "image": "assets/forrestgump.jpg",
        "title": "Forrest Gump",
        "rating": "4.0",
        "link": "https://youtu.be/bLvqoHBptjg?si=ihHqUDx1HOz75bWk",
        "description": "The story of a man with a low IQ who achieves extraordinary things in his life.",
        "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        "genre": "Drama Romance"
      },
      {
        "image": "assets/thelionking.jpeg",
        "title": "The Lion King",
        "rating": "4.7",
        "link": "https://youtu.be/lFzVJEksoDY?si=IhIK5SGFYVfkrbxn",
        "description": "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        "genre": "Animation Adventure"
      },
      {
        "image": "assets/werethemillers.jpg",
        "title": "We're the Millers",
        "description": "A small-time pot dealer creates a fake family as part of his plan to smuggle drugs into the U.S.",
        "cast": ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts"],
        "genre": "Comedy",
        "rating": "3.5"
      },
      {
        "image": "assets/metime.jpg",
        "title": "Me Time",
        "description": "A stay-at-home dad's wild weekend with an old friend spirals out of control.",
        "cast": ["Kevin Hart", "Mark Wahlberg", "Regina Hall"],
        "genre": "Comedy",
        "rating": "2.5"
      },
      {
        "image": "assets/Green-Book.jpg",
        "title": "Green Book",
        "description": "A tour through the Deep South with an African American classical pianist and his driver.",
        "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
        "genre": "Drama",
        "rating": "4.1"
      },
      {
        "image": "assets/Rush Hour.jpg",
        "title": "Rush Hour",
        "description": "A Hong Kong detective teams up with an LAPD officer to rescue the Chinese Consul's kidnapped daughter.",
        "cast": ["Jackie Chan", "Chris Tucker", "Tom Wilkinson"],
        "genre": "Action, Comedy",
        "rating": "3.5"
      },
      {
        "image": "assets/Union.jpg",
        "title": "Union",
        "description": "Construction worker Mike is thrust into the world of espionage when his high school sweetheart, Roxanne, recruits him for a high-stakes intelligence mission.",
        "cast": ["Halle Berry", "Mark Wahlberg"],
        "genre": "Sci-Fi, Thriller",
        "rating": "2.4"
      },
      {
        "image": "assets/bladerunner.jpg",
        "title": "Blade Runner 2049",
        "description": "A young blade runner discovers a long-buried secret that leads him to track down former blade runner Rick Deckard.",
        "cast": ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
        "genre": "Sci-Fi, Action",
        "rating": "4"
      },
      {
        "image": "assets/Black-Adam.jpg",
        "title": "Black Adam",
        "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
        "cast": ["Dwyane 'The Rock' Johnson", "Aldis Hodge", "Pierce Brosnan"],
        "genre": "Action, Comedy",
        "rating": "3"
      },
      {
        "image": "assets/pinkpanther2.jpg",
        "title": "Pink Panther 2",
        "description": "Inspector Clouseau and his bumbling team of detectives chase down a master thief.",
        "cast": ["Steve Martin", "Jean Reno", "Emily Mortimer"],
        "genre": "Comedy, Crime",
        "rating": "2.8"
      },
      {
        "image": "assets/crazystupidlove.jpg",
        "title": "Crazy, Stupid, Love",
        "description": "A middle-aged man learns how to date again after his marriage falls apart.",
        "cast": ["Steve Carell", "Ryan Gosling", "Emma Stone"],
        "genre": "Comedy, Romance",
        "rating": "3.7"
      },
      {
        "image": "assets/fallguymovie-poster.jpg",
        "title": "Fall Guy",
        "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
        "cast": ["Ryan Gosling", "Emma Blunt"],
        "genre": "Action, Comedy",
        "rating": "3"
      },
      {
        "image": "assets/dunept2.jpg",
        "title": "Dune: Part Two",
        "description": "Paul Atreides unites with the Fremen to take vengeance against the conspirators who destroyed his family.",
        "cast": ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        "genre": "Sci-Fi, Adventure, Drama",
        "rating": "3"
      },
      {
        "image": "assets/shesaid.jpg",
        "title": "She Said",
        "description": "Two New York Times reporters break one of the most important stories in a generation — a story that helped ignite a movement.",
        "cast": ["Carey Mulligan", "Zoe Kazan", "Patricia Clarkson"],
        "genre": "Drama, History",
        "rating": "3.6"
      },
      {
        "image": "assets/the-unforgivable.jpeg",
        "title": "The Unforgivable",
        "description": "A woman attempts to rebuild her life after serving a prison sentence for a violent crime.",
        "cast": ["Sandra Bullock", "Viola Davis", "Rob Morgan"],
        "genre": "Drama, Crime",
        "rating": "3.5"
      },
      {
        "image": "assets/frey-allen-planet-of-the-apes-banner-1.jpg",
        "title": "Kingdom of the Planet of the Apes",
        "description": "In a world ruled by apes, humans struggle for survival as new alliances and enemies emerge.",
        "cast": ["Freya Allan", "Kevin Durand", "Peter Macon"],
        "genre": "Sci-Fi, Action",
        "rating": "2.9"
      }
    ];
    
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
