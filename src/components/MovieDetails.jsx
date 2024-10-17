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
          "image": "/assets/thegodfather.jpg",
          "title": "The Godfather",
          "rating": "4.7",
          "link": "https://youtu.be/w3Wo6QiD3eU?si=dH71_QbmlnszYROL",
          "description": "The patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
          "cast": ["Marlon Brando", "Al Pacino", "James Caan"].join(', '),
          "genre": "Crime Drama"
      },
      {
          "image": "/assets/forrestgump.jpg",
          "title": "Forrest Gump",
          "rating": "4.0",
          "link": "https://youtu.be/bLvqoHBptjg?si=ihHqUDx1HOz75bWk",
          "description": "The story of a man with a low IQ who achieves extraordinary things in his life.",
          "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"].join(', '),
          "genre": "Drama Romance"
      },
      {
          "image": "/assets/thelionking.jpeg",
          "title": "The Lion King",
          "rating": "4.7",
          "link": "https://youtu.be/lFzVJEksoDY?si=IhIK5SGFYVfkrbxn",
          "description": "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
          "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"].join(', '),
          "genre": "Animation Adventure"
      },
      {
          "image": "/assets/werethemillers.jpg",
          "title": "We're the Millers",
          "description": "A small-time pot dealer creates a fake family as part of his plan to smuggle drugs into the U.S.",
          "cast": ["Jason Sudeikis", "Jennifer Aniston", "Emma Roberts"].join(', '),
          "genre": "Comedy",
          "rating": "3.5"
      },
      {
          "image": "/assets/metime.jpg",
          "title": "Me Time",
          "description": "A stay-at-home dad's wild weekend with an old friend spirals out of control.",
          "cast": ["Kevin Hart", "Mark Wahlberg", "Regina Hall"].join(', '),
          "genre": "Comedy",
          "rating": "2.5"
      },
      {
          "image": "/assets/Green-Book.jpg",
          "title": "Green Book",
          "description": "A tour through the Deep South with an African American classical pianist and his driver.",
          "cast": ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"].join(', '),
          "genre": "Drama",
          "rating": "4.1"
      },
      {
          "image": "/assets/Rush Hour.jpg",
          "title": "Rush Hour",
          "description": "A Hong Kong detective teams up with an LAPD officer to rescue the Chinese Consul's kidnapped daughter.",
          "cast": ["Jackie Chan", "Chris Tucker", "Tom Wilkinson"].join(', '),
          "genre": "Action, Comedy",
          "rating": "3.5"
      },
      {
          "image": "/assets/Union.jpg",
          "title": "Union",
          "description": "Construction worker Mike is thrust into the world of espionage when his high school sweetheart, Roxanne, recruits him for a high-stakes intelligence mission.",
          "cast": ["Halle Berry", "Mark Wahlberg"].join(', '),
          "genre": "Sci-Fi, Thriller",
          "rating": "2.4"
      },
      {
          "image": "/assets/bladerunner.jpg",
          "title": "Blade Runner 2049",
          "description": "A young blade runner discovers a long-buried secret that leads him to track down former blade runner Rick Deckard.",
          "cast": ["Ryan Gosling", "Harrison Ford", "Ana de Armas"].join(', '),
          "genre": "Sci-Fi, Action",
          "rating": "4"
      },
      {
          "image": "/assets/Black-Adam.jpg",
          "title": "Black Adam",
          "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
          "cast": ["Dwyane 'The Rock' Johnson", "Aldis Hodge", "Pierce Brosnan"].join(', '),
          "genre": "Action, Comedy",
          "rating": "3"
      },
      {
          "image": "/assets/pinkpanther2.jpg",
          "title": "Pink Panther 2",
          "description": "Inspector Clouseau and his bumbling team of detectives chase down a master thief.",
          "cast": ["Steve Martin", "Jean Reno", "Emily Mortimer"].join(', '),
          "genre": "Comedy, Crime",
          "rating": "2.8"
      },
      {
          "image": "/assets/crazystupidlove.jpg",
          "title": "Crazy, Stupid, Love",
          "description": "A middle-aged man learns how to date again after his marriage falls apart.",
          "cast": ["Steve Carell", "Ryan Gosling", "Emma Stone"].join(', '),
          "genre": "Comedy, Romance",
          "rating": "3.7"
      },
      {
          "image": "/assets/fallguymovie-poster.jpg",
          "title": "Fall Guy",
          "description": "A former stuntman returns to Hollywood for a comeback, facing old foes and new dangers.",
          "cast": ["Ryan Gosling", "Emma Blunt"].join(', '),
          "genre": "Action, Comedy",
          "rating": "3"
      },
      {
          "image": "/assets/dunept2.jpg",
          "title": "Dune: Part Two",
          "description": "Paul Atreides unites with the Fremen to take vengeance against the conspirators who destroyed his family.",
          "cast": ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"].join(', '),
          "genre": "Sci-Fi, Adventure, Drama",
          "rating": "3"
      },
      {
          "image": "/assets/shesaid.jpg",
          "title": "She Said",
          "description": "Two New York Times reporters break one of the most important stories in a generation — a story that helped ignite a movement.",
          "cast": ["Carey Mulligan", "Zoe Kazan", "Patricia Clarkson"].join(', '),
          "genre": "Drama, History",
          "rating": "3.6"
      },
      {
          "image": "/assets/the-unforgivable.jpeg",
          "title": "The Unforgivable",
          "description": "A woman attempts to rebuild her life after serving a prison sentence for a violent crime.",
          "cast": ["Sandra Bullock", "Viola Davis", "Rob Morgan"].join(', '),
          "genre": "Drama, Crime",
          "rating": "3.5"
      },
      {
          "image": "/assets/frey-allen-planet-of-the-apes-banner-1.jpg",
          "title": "Kingdom of the Planet of the Apes",
          "description": "In a world ruled by apes, humans struggle for survival as new alliances and enemies emerge.",
          "cast": ["Freya Allan", "Kevin Durand", "Peter Macon"].join(', '),
          "genre": "Sci-Fi, Action",
          "rating": "2.9"
      },
      {
          "id": 1,
          "title": "Challengers",
          "year": 2024,
          "image": "/assets/Popular/challengers.jpg",
          "description": "A thrilling love triangle set against the backdrop of the competitive world of professional tennis, where ambitions clash and secrets are revealed.",
          "genre": ["Drama ", "Romance ", "Sport"],
          "rating": "3.5",
          "cast": [
              "Zendaya",
              "Mike Faist",
              "Josh O'Connor",
              "Jasmine Cephas Jones"
          ].join(', '),
      },
      {
          "id": 2,
          "title": "Bad Boys 4",
          "year": 2024,
          "image": "/assets/Popular/bad-boys-4 1.png",
          "description": "Detectives Mike Lowrey and Marcus Burnett are back to take down a dangerous drug cartel while dealing with their personal lives.",
          "genre": ["Action ", "Comedy ", "Crime"],
          "rating": "3.3",
          "cast": [
              "Will Smith",
              "Martin Lawrence",
              "Vanessa Hudgens",
              "Paola Nuñez"
          ].join(', '),
      },
      {
          "id": 3,
          "title": "Deadpool and Wolverine",
          "year": 2024,
          "image": "/assets/Popular/DeadpoolVsWolverine.jpg",
          "description": "When a new threat emerges, Deadpool and Wolverine must join forces to save the world in this action-packed, fourth-wall-breaking adventure.",
          "genre": ["Action ", "Comedy ", "Superhero"],
          "rating": "3.8",
          "cast": [
              "Ryan Reynolds",
              "Hugh Jackman",
              "Morena Baccarin",
              "Stefan Kapičić"
          ].join(', '),
      },
      {
          "id": 4,
          "title": "The Marvels",
          "year": 2024,
          "image": "/assets/Popular/the-marvels.jpg",
          "description": "Carol Danvers, Kamala Khan, and Monica Rambeau unite their powers to save the universe from an intergalactic threat.",
          "genre": ["Action ", "Adventure ", "Superhero"],
          "rating": "3.9",
          "cast": [
              "Brie Larson",
              "Teyonah Parris",
              "Iman Vellani",
              "Zawe Ashton"
          ].join(', '),
      },
      {
          "id": 5,
          "title": "Godzilla x Kong: The New Empire",
          "year": 2024,
          "image": "/assets/Popular/godzilla-x-kong.jpg",
          "description": "In a world where titans exist, Godzilla and Kong must unite to face a new threat that endangers all of humanity.",
          "genre": ["Action ", "Adventure ", "Sci-Fi"],
          "rating": "3.7",
          "cast": [
              "Rebecca Hall",
              "Brian Tyree Henry",
              "Dan Stevens",
              "Kaylee Hottle"
          ].join(', '),
      },
      {
          "id": 6,
          "title": "Trolls Band Together",
          "year": 2024,
          "image": "/assets/Popular/trolls-band-together.jpg",
          "description": "The Trolls are back to save their friends and the world from a villain threatening their harmonious way of life.",
          "genre": ["Animation ", "Adventure ", "Musical"],
          "rating": "3.2",
          "cast": [
              "Anna Kendrick",
              "Justin Timberlake",
              "Rachel Bloom",
              "Troye Sivan"
          ].join(', '),
      },
      {
          "id": 7,
          "title": "The Hunger Games: The Ballad of Songbirds and Snakes",
          "year": 2024,
          "image": "/assets/Popular/hunger-games.jpg",
          "description": "Years before he became the tyrannical President of Panem, young Coriolanus Snow mentors a tribute from District 12 in the 10th Hunger Games.",
          "genre": ["Action ", "Adventure ", "Drama"],
          "rating": "3.8",
          "cast": [
              "Tom Blyth",
              "Rachel Zegler",
              "Peter Dinklage",
              "Hunter Schafer"
          ].join(', '),
      },
      {
          "id": 8,
          "title": "Napoleon",
          "year": 2024,
          "image": "/assets/Popular/napoleon.jpg",
          "description": "An epic portrayal of the rise and fall of the iconic French leader, Napoleon Bonaparte.",
          "genre": ["Drama ", "History ", "War"],
          "rating": "3.9",
          "cast": [
              "Joaquin Phoenix",
              "Vanessa Kirby",
              "Rufus Sewell",
              "Ben Miles"
          ].join(', '),
      },
      {
          "id": 9,
          "title": "Aquaman and the Lost Kingdom",
          "year": 2024,
          "image": "/assets/Popular/aquaman.jpg",
          "description": "Aquaman must forge an uneasy alliance with his half-brother, Orm, to protect Atlantis from a powerful new threat.",
          "genre": ["Action ", "Adventure ", "Fantasy"],
          "rating": "3.6",
          "cast": [
              "Jason Momoa",
              "Patrick Wilson",
              "Amber Heard",
              "Nicole Kidman"
          ].join(', '),
      },
      {
          "id": 10,
          "title": "Spider-Man: Beyond the Spider-Verse",
          "year": 2024,
          "image": "/assets/Popular/spider-man.jpg",
          "description": "Miles Morales returns for an epic adventure that takes him across the multiverse and beyond.",
          "genre": ["Animation ", "Action ", "Adventure"],
          "rating": "4.1",
          "cast": [
              "Shameik Moore",
              "Hailee Steinfeld",
              "Jake Johnson",
              "Issa Rae"
          ].join(', '),
      },
      {
          "id": 11,
          "title": "The Marvels",
          "year": 2024,
          "image": "/assets/Popular/the-marvels.jpg",
          "description": "Carol Danvers, Kamala Khan, and Monica Rambeau unite their powers to save the universe from an intergalactic threat.",
          "genre": ["Action ", "Adventure ", "Superhero"],
          "rating": "3.9",
          "cast": [
              "Brie Larson",
              "Teyonah Parris",
              "Iman Vellani",
              "Zawe Ashton"
          ].join(', '),
      },
      {
          "id": 12,
          "title": "Wish",
          "year": 2024,
          "image": "/assets/Popular/wish.jpg",
          "description": "In a magical land where wishes come true, a young girl embarks on an adventure to save her kingdom.",
          "genre": ["Animation ", "Fantasy ", "Adventure"],
          "rating": "3.4",
          "cast": [
              "Ariana DeBose",
              "Chris Pine",
              "Alan Tudyk",
              "Evan Rachel Wood"
          ].join(', '),
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
