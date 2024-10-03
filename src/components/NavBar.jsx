import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from '../assets/search.png'
import TriangleDown from '../assets/triangledown2.png'
import Avatar from '../assets/Shape.jpg'

function NavBar() {
    const location = useLocation(); // Get the current route

    return (
        <header className="relative bg-black text-white w-full h-full px-4 py-2">
            <nav className="flex justify-between p-4">

                <div className="px-4 flex-shrink-0 ">
                    <Link to="/" className="text-3xl font-regular" style={{ fontFamily: 'Titan One' }}>
                        Ster-Flix
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="relative flex flex-grow space-x-10 ml-12 py-1">
                    <li><Link to="/" className={`text-white hover:underline ${location.pathname === "/" ? "font-bold text-xl" : ""}`}>
                    Home
                    </Link>
                    </li>
                    <li><Link to="/movies" className={ `text-white hover:underline ${location.pathname === "/movies" ? "font-bold text-xl" : ""}`}>
                    Movies
                    </Link>
                    </li>
                    <li><Link to="/popular" className={ `text-white hover:underline ${location.pathname === "/popular" ? "font-bold text-xl" : ""}`}>
                    Popular
                    </Link>
                    </li>
                    <li><Link to="/trailers" className={`text-white hover:underline ${location.pathname === "/trailers" ? "font-bold text-xl" : ""}`}>
                    Trailers
                    </Link>
                    </li>
                </ul>

                
                <div className="flex items-center space-x-5 mr-5">
                {/* Search button */}
                <button type="button" className="inline-flex items-center">
                    <img src={SearchIcon} alt="Search" className="w-8 h-8 mb-0" />
                </button>

                {/* Language selection */}
                <button type="button" className="inline-flex items-center">
                    <div className="mr-1">EN</div> 
                    <img src={TriangleDown} alt="Triangle" className="w-3 h-3" />
                </button>

                {/* Profile button */}
                <button type="button" className="inline-flex items-center space-x-2">
                    <img src={Avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                    <span>Pam Halpert</span>
                </button>
            </div>

            </nav>
        </header>
    );
}

export default NavBar;
