import React from "react";

const trailers = [
    {
        id: 1,
        image: "/assets/thegodfather.jpg",
        title: "The Godfather",
        year: "1972",
        link: "https://youtu.be/w3Wo6QiD3eU?si=dH71_QbmlnszYROL",
    },
    {
        id: 2,
        image: "/assets/forrestgump.jpg",
        title: "Forrest Gump",
        year: "1994",
        link: "https://youtu.be/bLvqoHBptjg?si=ihHqUDx1HOz75bWk",
    },
    {
        id: 3,
        image: "/assets/thelionking.jpeg",
        title: "The Lion King",
        year: "1994",
        link: "https://youtu.be/lFzVJEksoDY?si=IhIK5SGFYVfkrbxn",
    },
    {
        id: 4,
        image: "/assets/Inception.jpg",
        title: "Inception",
        year: "2010",
        link: "https://youtu.be/YoHD9XEInc0?si=q5HmeekC_jw1nRRL",
    },
    {
        id: 5,
        image: "/assets/Popular/BlinkTwice.jpg",
        title: "Blink Twice",
        year: "2024",
        link: "https://youtu.be/aMcmfonGWY4?si=Kfgjvgmz6s12yleS",
    },
    {
        id: 6,
        image: "/assets/Popular/challengers.jpg",
        title: "Challengers",
        year: "2024",
        link: "https://youtu.be/VobTTbg-te0?si=6S6LLJE-IxbzeSho",
    },
    
];

function TrailersPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 mt-4 ml-2 text-left">Trailers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {trailers.map((trailer) => (
                    <div key={trailer.id} 
                    className="bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                        >
                        <div className="relative w-full overflow-hidden">
                            <img
                                src={trailer.image}
                                alt={trailer.title}
                                className="w-full h-[550px] mt-0 object-cover"
                                aria-label={`Movie cover of ${trailer.title}`}
                            />
                            {/* Always Visible Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <a href={trailer.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-10 h-10 text-black"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M6.79 11.93l4.77-2.82c.65-.38.65-1.34 0-1.72L6.79 4.57c-.66-.39-1.49.1-1.49.86v5.65c0 .76.83 1.24 1.49.85z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg text-black mt-2 font-semibold text-left">{trailer.title}</h3>
                            <p className="text-black font-light text-left">{trailer.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrailersPage;
