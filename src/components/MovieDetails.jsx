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
        "cast": ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts"].join(', '),
        "genre": "Comedy",
        "rating": "3.5"
      },
      {
        "image": "/src/assets/metime.jpg",
        "title": "Me Time",
        "year": "2023",
        "description": "A stay-at-home dad's wild weekend with an old friend spirals out of control.",
        "cast": ["Kevin Hart", "Mark Wahlberg", "Regina Hall"].join(', '),
        "genre": "Comedy",
        "rating": "2.5"
      },
  
      {
        "image": "/src/assets/Green-Book.jpg",
        "title": "Green Book",
        "year": "2018",
        "description": "A tour through the Deep South with an African American classical pianist and his driver.",
        "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"].join(', '),
        "genre": "Drama",
        "rating": "4.1"
      },
      {
        "image": "/src/assets/Rush Hour.jpg",
        "title": "Rush Hour",
        "year": "1998",
        "description": "A Hong Kong detective teams up with an LAPD officer to rescue the Chinese Consul's kidnapped daughter.",
        "cast": ["Jackie Chan", "Chris Tucker", "Tom Wilkinson"].join(', '),
        "genre": "Action, Comedy",
        "rating": "3.5"
      },
      {
        "image": "/src/assets/Union.jpg",
        "title": "Union",
        "year": "2024",
        "description": "Construction worker Mike is thrust into the world of espionage when his high school sweetheart, Roxanne, recuits him for a high-stake intelligence mission",
        "cast": ["Halle Berry", "Mark Wahlberg"].join(', '),
        "genre": "Sci-Fi, Thriller",
        "rating": "2.4"
      },
      {
        "image": "/src/assets/bladerunner.jpg",
        "title": "Blade Runner 2049",
        "year": "2017",
        "description": "A young blade runner discovers a long-buried secret that leads him to track down former blade runner Rick Deckard.",
        "cast": ["Ryan Gosling", "Harrison Ford", "Ana de Armas"].join(', '),
        "genre": "Sci-Fi, Action",
        "rating": "4"
      },
      {
        "image": "/src/assets/Black-Adam.jpg",
        "title": "Black Adam",
        "year": "2022",
        "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
        "cast": ["Dwyane 'The Rock' Johnson", "Aldis Hodge", "Pierce Brosnan"].join(', '),
        "genre": "Action, Comedy",
        "rating": "3"
      },
      {
        "image": "/src/assets/werethemillers.jpg",
        "title": "We're the Millers",
        "year": "2013",
        "description": "A small-time pot dealer creates a fake family as part of his plan to smuggle drugs into the U.S.",
        "cast": ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts"].join(', '),
        "genre": "Comedy",
        "rating": "3.5"
      },
      {
        "image": "/src/assets/metime.jpg",
        "title": "Me Time",
        "year": "2023",
        "description": "A stay-at-home dad's wild weekend with an old friend spirals out of control.",
        "cast": ["Kevin Hart", "Mark Wahlberg", "Regina Hall"].join(', '),
        "genre": "Comedy",
        "rating": "5.0"
      },
      {
        "image": "/src/assets/pinkpanther2.jpg",
        "title": "Pink Panther 2",
        "year": "2009",
        "description": "Inspector Clouseau and his bumbling team of detectives chase down a master thief.",
        "cast": ["Steve Martin", "Jean Reno", "Emily Mortimer"].join(', '),
        "genre": "Comedy, Crime",
        "rating": "2.8"
      },
      {
        "image": "/src/assets/crazystupidlove.jpg",
        "title": "Crazy, Stupid, Love",
        "year": "2011",
        "description": "A middle-aged man learns how to date again after his marriage falls apart.",
        "cast": ["Steve Carell", "Ryan Gosling", "Emma Stone"].join(', '),
        "genre": "Comedy, Romance",
        "rating": "3.7"
      },
      {
        "image": "/src/assets/fallguymovie-poster.jpg",
        "title": "Fall Guy",
        "year": "2023",
        "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
        "cast": ["Ryan Gosling", "Emma Blunt"].join(', '),
        "genre": "Action, Comedy",
        "rating": "3"
      },
      {
        "image": "/src/assets/dunept2.jpg",
        "title": "Dune: Part Two",
        "year": "2024",
        "description": "Paul Atreides unites with the Fremen to take vengeance against the conspirators who destroyed his family.",
        "cast": ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"].join(', '),
        "genre": "Sci-Fi, Adventure, Drama",
        "rating": "3"
      },
      {
        "image": "/src/assets/Green-Book.jpg",
        "title": "Green Book",
        "year": "2018",
        "description": "A tour through the Deep South with an African American classical pianist and his driver.",
        "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"].join(', '),
        "genre": "Drama",
        "rating": "4.1"
      },
      {
        "image": "/src/assets/shesaid.jpg",
        "title": "She Said",
        "year": "2022",
        "description": "Two New York Times reporters break one of the most important stories in a generation — a story that helped ignite a movement.",
        "cast": ["Carey Mulligan", "Zoe Kazan", "Patricia Clarkson"].join(', '),
        "genre": "Drama, History",
        "rating": "3.6"
      },
      {
        "image": "/src/assets/the-unforgivable.jpeg",
        "title": "The Unforgivable",
        "year": "2021",
        "description": "A woman attempts to rebuild her life after serving a prison sentence for a violent crime.",
        "cast": ["Sandra Bullock", "Viola Davis", "Rob Morgan"].join(', '),
        "genre": "Drama, Crime",
        "rating": "3.5"
      },
      {
        "image": "/src/assets/frey-allen-planet-of-the-apes-banner-1.jpg",
        "title": "Kingdom of the Planet of the Apes",
        "year": "2024",
        "description": "In a world ruled by apes, humans struggle for survival as new alliances and enemies emerge.",
        "cast": ["Freya Allan", "Kevin Durand", "Peter Macon"].join(', '),
        "genre": "Sci-Fi, Action, Drama",
        "rating": "4"
      },
      {
        "image": "/src/assets/thegodfather.jpg",
        "title": "The Godfather",
        "rating": "4.7",
        "link": "https://youtu.be/w3Wo6QiD3eU?si=dH71_QbmlnszYROL",
        "description": "The patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
        "cast": ["Marlon Brando", "Al Pacino", "James Caan"].join(', '),
        "genre": "Crime, Drama"
      },
      {
        "image": "/src/assets/forrestgump.jpg",
        "title": "Forrest Gump",
        "rating": "4.0",
        "link": "https://youtu.be/bLvqoHBptjg?si=ihHqUDx1HOz75bWk",
        "description": "The story of a man with a low IQ who achieves extraordinary things in his life.",
        "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"].join(', '),
        "genre": "Drama, Romance"
      },
      {
        "image": "/src/assets/thelionking.jpeg",
        "title": "The Lion King",
        "rating": "4.7",
        "link": "https://youtu.be/lFzVJEksoDY?si=IhIK5SGFYVfkrbxn",
        "description": "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"].join(', '),
        "genre": "Animation, Adventure"
      },
      {
        "id": 1,
        "title": "Challengers",
        "year": 2024,
        "image": "/src/assets/Popular/challengers.jpg",
        "genre": "Sports Drama, Romance",
        "rating": "Not yet rated",
        "description": "The movie follows the rise and fall of three tennis players competing for both personal and professional wins in a world where love and sports collide.",
        "cast": ["Zendaya", "Mike Faist", "Josh O'Connor"].join(', ')
    },
    {
        "id": 2,
        "title": "Bad Boys 4",
        "year": 2024,
        "image": "/src/assets/Popular/bad-boys-4 1.png",
        "genre": "Action, Comedy",
        "rating": "Not yet rated",
        "description": "Detectives Mike Lowrey and Marcus Burnett return, now fugitives, facing conspiracies and threats from a new villain. They team up with AMMO to clear their names and bring justice.",
        "cast": ["Will Smith", "Martin Lawrence", "Vanessa Hudgens", "Eric Dane", "Paola Núñez"].join(', ')
    },
    {
        "id": 3,
        "title": "Deadpool and Wolverine",
        "year": 2024,
        "image": "/src/assets/Popular/DeadpoolVsWolverine.jpg",
        "genre": "Action, Comedy, Superhero",
        "rating": "Not yet rated",
        "description": "This crossover pits Deadpool and Wolverine against formidable foes as they navigate the chaotic dynamics of their unlikely partnership.",
        "cast": ["Ryan Reynolds", "Hugh Jackman"].join(', ')
    },
    {
        "id": 4,
        "title": "Blink Twice",
        "year": 2024,
        "image": "/src/assets/Popular/BlinkTwice.jpg",
        "genre": "Thriller",
        "rating": "Not yet rated",
        "description": "The plot details are currently under wraps, but the film is anticipated to be a suspenseful thriller revolving around unexpected twists and intense character drama.",
        "cast": ["Channing Tatum", "Adria Arjona", "Naomi Ackie"].join(', ')
    },
    {
        "id": 5,
        "title": "Uglies",
        "year": 2024,
        "image": "/src/assets/Popular/Uglies.jpg",
        "genre": "Sci-Fi, Young Adult",
        "rating": "Not yet rated",
        "description": "Based on the novel, the film explores a dystopian world where everyone undergoes cosmetic surgery at 16 to become 'pretty,' delving into societal expectations and the cost of conformity.",
        "cast": ["Joey King", "Chase Stokes"].join(', ')
    },
    {
        "id": 6,
        "title": "Transformers One",
        "year": 2024,
        "image": "/src/assets/Popular/Transformers.png",
        "genre": "Animation, Action, Sci-Fi",
        "rating": "Not yet rated",
        "description": "An origin story for the Transformers, this animated feature dives into the history of Optimus Prime and Megatron before they became bitter enemies.",
        "cast": ["Chris Hemsworth", "Scarlett Johansson"].join(', ')
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
