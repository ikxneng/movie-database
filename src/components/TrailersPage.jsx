import React from "react";
import {Link} from 'react-router-dom';

function PopularPage() {
    const movies = [
        {
            id: 1,
            title: "Challengers",
            year: 2024,
            image: "/src/assets/Popular/challengers.jpg",
        },
        {
            id: 2,
            title: "Bad Boys 4",
            year: 2024,
            image: "/src/assets/Popular/bad-boys-4 1.png",
        },
        {
            id: 3,
            title: "Deadpool and Wolverine",
            year: 2024,
            image: "/src/assets/Popular/DeadpoolVsWolverine.jpg",
        },
        {
            id: 4,
            title: "Blink Twice",
            year: 2024,
            image: "/src/assets/Popular/BlinkTwice.jpg",
        },
        {
            id: 5,
            title: "Uglies",
            year: 2024,
            image: "/src/assets/Popular/Uglies.jpg",
        },
        {
            id: 6,
            title: "Transformers One",
            year: 2024,
            image: "/src/assets/Popular/Transformers.png",
        },

    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 mt-4 ml-2 text-left ">New & Popular</h2>
            {/* Movies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="bg-white overflow-hidden">
                        <Link to={`/details/${movie.title}`}>
                        <div className="w-full overflow-hidden">
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="w-[400px] h-[565px] object-cover"
                                aria-label={`Movie cover of ${movie.title}`}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg text-black mt-2 font-semibold text-left">{movie.title}</h3>
                            <p className="text-black font-light text-left">{movie.year}</p>
                        </div>
                    </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularPage;
