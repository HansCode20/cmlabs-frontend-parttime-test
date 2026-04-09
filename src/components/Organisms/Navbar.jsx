import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Foods", href: "/" },
        { name: "Ingredients", href: "/" },
        { name: "Local culinary", href: "/" },
    ];

    return (
        <nav className="fixed w-full bg-gray-800 text-white p-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">MealApp</Link>
                    <ul className="hidden md:flex space-x-4">
                        {navItems.map((item, index) => (
                            <li key={index} className="font-medium"> 
                                <Link to={item.href} className="hover:text-gray-300">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
            </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-5 md:hidden">
                        <ul className="space-y-2">
                            {navItems.map((item, index) => (
                                <li key={index} className="font-medium">
                                    <a href={item.href} className="block px-3 py-2 rounded hover:bg-gray-700">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}


        </nav>
    );
};