import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from '../assets/search.png';
import TriangleDown from '../assets/triangledown2.png';
import Avatar from '../assets/Shape.jpg';
import Avatar2 from '../assets/Jim.jpeg';

const movies = [
  { title: "We're the Millers" },
  { title: "Me Time" },
  { title: "Green Book" },
  { title: "Rush Hour" },
  { title: "Union" },
  { title: "Blade Runner 2049" },
  { title: "Fall Guy" },
  { title: "Dune: Part Two" },
  // Add more movie titles here as needed
];

function NavBar() {
    const location = useLocation();
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [debounceTimeout, setDebounceTimeout] = useState(null); // Timeout state for debounce
    const [language, setLanguage] = useState("EN");
    const [profile, setProfile] = useState("Pam Halpert");
    const [avatar, setAvatar] = useState(Avatar);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "EN" ? "FR" : "EN"));
    };

    const toggleProfile = () => {
        if (profile === "Pam Halpert") {
            setProfile("Jim Halpert");
            setAvatar(Avatar2);
        } else {
            setProfile("Pam Halpert");
            setAvatar(Avatar);
        }
    };

    const handleSearchChange = (e) => {
        const search = e.target.value;
        setSearchTerm(search);

        if (debounceTimeout) clearTimeout(debounceTimeout); // Clear previous timer

        const newTimeout = setTimeout(() => {
            if (search) {
                const results = movies.filter(movie =>
                    movie.title.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredMovies(results);
            } else {
                setFilteredMovies([]);
            }
        }, 300); // 300ms delay before updating results

        setDebounceTimeout(newTimeout); // Set new timeout
    };

    return (
        <header className="relative bg-black text-white w-full h-full px-4 py-2">
            <nav className="flex justify-between p-4">
                <div className="px-4 flex-shrink-0">
                    <Link to="/" className="text-3xl font-regular" style={{ fontFamily: 'Titan One' }}>
                        Ster-Flix
                    </Link>
                </div>

                <ul className="relative flex flex-grow space-x-10 ml-12 py-1">
                    <li>
                        <Link to="/" className={`text-white hover:underline ${location.pathname === "/" ? "font-bold text-xl" : ""}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies" className={`text-white hover:underline ${location.pathname === "/movies" ? "font-bold text-xl" : ""}`}>
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link to="/popular" className={`text-white hover:underline ${location.pathname === "/popular" ? "font-bold text-xl" : ""}`}>
                            Popular
                        </Link>
                    </li>
                    <li>
                        <Link to="/trailers" className={`text-white hover:underline ${location.pathname === "/trailers" ? "font-bold text-xl" : ""}`}>
                            Trailers
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center space-x-5 mr-5">
                    <div className="relative flex items-center">
                        {showSearch && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="bg-gray-200 text-black rounded-md px-2 py-1 mr-2"
                                    style={{ width: '150px' }}
                                />
                                {filteredMovies.length > 0 && (
                                    <ul className="absolute bg-white text-black rounded-md mt-2 py-1 w-full z-10">
                                        {filteredMovies.map((movie, index) => (
                                            <li key={index} className="px-2 py-1 hover:bg-gray-200">
                                                <Link to={`/movies/${movie.title}`}>
                                                    {movie.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}
                        <button type="button" onClick={toggleSearch} className="inline-flex items-center">
                            <img src={SearchIcon} alt="Search" className="w-8 h-8 mb-0" />
                        </button>
                    </div>

                    <button type="button" onClick={toggleLanguage} className="inline-flex items-center">
                        <div className="mr-1">{language}</div>
                        <img src={TriangleDown} alt="Triangle" className="w-3 h-3" />
                    </button>

                    <button type="button" onClick={toggleProfile} className="inline-flex items-center space-x-2">
                        <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                        <span>{profile}</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
