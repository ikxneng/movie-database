import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from '/assets/search.png';
import TriangleDown from '/assets/triangledown2.png';
import Avatar from '/assets/Shape.jpg';
import Avatar2 from '/assets/Jim.jpeg';

const movies = [
    { title: "The Godfather" },
    { title: "Forrest Gump" },
    { title: "The Lion King" },
    { title: "We're the Millers" },
    { title: "Me Time" },
    { title: "Green Book" },
    { title: "Rush Hour" },
    { title: "Union" },
    { title: "Blade Runner 2049" },
    { title: "Black Adam" },
    { title: "Pink Panther 2" },
    { title: "Crazy, Stupid, Love" },
    { title: "Fall Guy" },
    { title: "Dune: Part Two" },
    { title: "She Said" },
    { title: "The Unforgivable" },
    { title: "Kingdom of the Planet of the Apes" },
    { title: "Challengers" },
    { title: "Bad Boys 4" },
    { title: "Deadpool and Wolverine" },
    { title: "Blink Twice" },
    { title: "Uglies" },
    { title: "Transformers One" }
];

const languages = ["EN", "FR", "ES", "DE", "IT", "JP"]; 

const translations = {
    EN: {
        home: "Home",
        movies: "Movies",
        popular: "Popular",
        trailers: "Trailers",
        searchPlaceholder: "Search...",
        clear: "Clear",
        profile: "Profile",
        language: "Language",
    },
    FR: {
        home: "Accueil",
        movies: "Films",
        popular: "Populaire",
        trailers: "Bande-annonces",
        searchPlaceholder: "Rechercher...",
        clear: "Effacer",
        profile: "Profil",
        language: "Langue",
    },
    ES: {
        home: "Inicio",
        movies: "Películas",
        popular: "Popular",
        trailers: "Tráileres",
        searchPlaceholder: "Buscar...",
        clear: "Borrar",
        profile: "Perfil",
        language: "Idioma",
    },
    DE: {
        home: "Startseite",
        movies: "Filme",
        popular: "Beliebt",
        trailers: "Trailer",
        searchPlaceholder: "Suche...",
        clear: "Löschen",
        profile: "Profil",
        language: "Sprache",
    },
    IT: {
        home: "Home",
        movies: "Film",
        popular: "Popolare",
        trailers: "Trailer",
        searchPlaceholder: "Cerca...",
        clear: "Pulisci",
        profile: "Profilo",
        language: "Lingua",
    },
    PT: {
        home: "Início",
        movies: "Filmes",
        popular: "Popular",
        trailers: "Trailers",
        searchPlaceholder: "Pesquisar...",
        clear: "Limpar",
        profile: "Perfil",
        language: "Idioma",
    },
    JA: {
        home: "ホーム",
        movies: "映画",
        popular: "人気",
        trailers: "トレーラー",
        searchPlaceholder: "検索...",
        clear: "クリア",
        profile: "プロフィール",
        language: "言語",
    },
    ZH: {
        home: "主页",
        movies: "电影",
        popular: "流行",
        trailers: "预告片",
        searchPlaceholder: "搜索...",
        clear: "清除",
        profile: "个人资料",
        language: "语言",
    },
    AR: {
        home: "الرئيسية",
        movies: "أفلام",
        popular: "شائع",
        trailers: "مقاطع دعائية",
        searchPlaceholder: "بحث...",
        clear: "مسح",
        profile: "الملف الشخصي",
        language: "لغة",
    },

};


function NavBar() {
    const location = useLocation();
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [language, setLanguage] = useState("EN");
    const [profile, setProfile] = useState("Pam Halpert");
    const [avatar, setAvatar] = useState(Avatar);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

    const toggleProfile = () => {
        if (profile === "Jim Halpert") {
            setProfile("Jim Halpert");
            setAvatar(Avatar2);
        } else {
            setProfile("Pam Halpert");
            setAvatar(Avatar);
        }
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        if (!showSearch) setSearchTerm(""); // Reset search term when opening
    };

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setShowDropdown(false); // Close the dropdown after selection
    };

    const handleSearchChange = (e) => {
        const search = e.target.value;
        setSearchTerm(search);

        if (debounceTimeout) clearTimeout(debounceTimeout);

        const newTimeout = setTimeout(() => {
            if (search) {
                const results = movies.filter(movie =>
                    movie.title.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredMovies(results);
            } else {
                setFilteredMovies([]);
            }
        }, 300);

        setDebounceTimeout(newTimeout);
    };

    const clearSearch = () => {
        setSearchTerm("");
        setFilteredMovies([]);
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="relative bg-black text-white w-full h-full px-4 py-2">
            <nav className="flex justify-between items-center p-4">
                {/* Brand */}
                <div className="px-4 flex-shrink-0">
                    <Link to="/" className="text-3xl font-regular" style={{ fontFamily: 'Titan One' }}>
                        Ster-Flix
                    </Link>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Full Nav Links (hidden on mobile) */}
                <ul className="hidden lg:flex flex-grow space-x-10 ml-12 py-1">
                    <li>
                        <Link to="/" className={`text-white hover:underline ${location.pathname === "/" ? "font-bold text-xl" : ""}`}>
                            {translations[language].home}
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies" className={`text-white hover:underline ${location.pathname === "/movies" ? "font-bold text-xl" : ""}`}>
                            {translations[language].movies}
                        </Link>
                    </li>
                    <li>
                        <Link to="/popular" className={`text-white hover:underline ${location.pathname === "/popular" ? "font-bold text-xl" : ""}`}>
                            {translations[language].popular}
                        </Link>
                    </li>
                    <li>
                        <Link to="/trailers" className={`text-white hover:underline ${location.pathname === "/trailers" ? "font-bold text-xl" : ""}`}>
                            {translations[language].trailers}
                        </Link>
                    </li>
                </ul>

                {/* Search and Profile (hidden on mobile) */}
                <div className="hidden lg:flex items-center space-x-5 mr-5">
                    {/* Search Input */}
                    <div className="relative flex items-center">
                        {showSearch && (
                            <>
                                <input
                                    type="text"
                                    placeholder={translations[language].searchPlaceholder}
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="bg-gray-200 text-black rounded-md px-2 py-1 mr-2"
                                    style={{ width: '150px' }}
                                />
                                <button
                                    onClick={clearSearch}
                                    className="bg-gray-500 text-black rounded-md px-2 py-1 ml-1 hover:bg-red-600"
                                >
                                    {translations[language].clear}
                                </button>
                                {filteredMovies.length > 0 && (
                                    <ul className="absolute bg-white text-black rounded-md mt-1 py-1 w-48 z-50 shadow-lg">
                                        {filteredMovies.map((movie, index) => (
                                            <li key={index} className="px-2 py-1 hover:bg-gray-200">
                                                <Link to={`/details/${movie.title}`}>
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

                    {/* Language Dropdown */}
                    <div className="relative inline-block">
                        <button
                            type="button"
                            onClick={() => setShowDropdown((prev) => !prev)} // Toggle dropdown visibility
                            className="inline-flex items-center"
                        >
                            <div className="mr-1">{language}</div>
                            <img src={TriangleDown} alt="Triangle" className="w-3 h-3" />
                        </button>
                        {showDropdown && ( // Render dropdown if showDropdown is true
                            <div className="absolute bg-white text-black rounded-md mt-1 w-24 z-10">
                                {Object.keys(translations).map((lang) => (
                                    <div
                                        key={lang}
                                        onClick={() => handleLanguageChange(lang)} // Call the language change function
                                        className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                                    >
                                        {lang}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Profile */}
                    <button type="button" onClick={toggleProfile} className="inline-flex items-center space-x-2">
                        <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                        <span>{profile}</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-black text-white w-full mt-2">
                    <ul className="space-y-4 py-4">
                        <li>
                            <Link to="/" className="block text-center hover:underline">
                                {translations[language].home}
                            </Link>
                        </li>
                        <li>
                            <Link to="/movies" className="block text-center hover:underline">
                                {translations[language].movies}
                            </Link>
                        </li>
                        <li>
                            <Link to="/popular" className="block text-center hover:underline">
                                {translations[language].popular}
                            </Link>
                        </li>
                        <li>
                            <Link to="/trailers" className="block text-center hover:underline">
                                {translations[language].trailers}
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default NavBar;
