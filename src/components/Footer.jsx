import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons from react-icons

function Footer() {
    return (
        <footer className="bg-black text-white py-4 mt-5">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                {/* Ster-Flix Logo */}
                <div className="mb-4 md:mb-0">
                    <Link to="/" className="text-3xl font-regular" style={{ fontFamily: 'Titan One' }}>
                        Ster-Flix
                    </Link>
                </div>
                
                {/* Copyright Text */}
                <div className="text-center mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Ster-Flix. All rights reserved.</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-white text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white text-2xl hover:text-gray-400" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
