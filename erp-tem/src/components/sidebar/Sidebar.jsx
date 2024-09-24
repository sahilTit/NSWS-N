// src/components/Sidebar.jsx

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, selectedItem, onSelect }) => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const toggleServices = () => setIsServicesOpen(!isServicesOpen);
    const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

    const getItemClass = (item) => {
        return selectedItem === item
            ? 'block p-2 rounded hover:bg-gray-200 bg-blue-100 ring-2 ring-blue-500'
            : 'block p-2 rounded hover:bg-gray-200';
    };

    return (
        <div className={`fixed top-16 left-0 h-[calc(100%_-_4rem)] bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
            <div className="flex items-center p-4 border-b">
                <div className="relative w-full">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" placeholder="Search..." className="w-full pl-10 pr-2 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>
            <nav className="p-4">
                <ul>
                    <li className="mb-2">
                        <a href="#" className={getItemClass('home')} onClick={() => onSelect('home')}>Dashboard</a>
                    </li>
                    <li className="mb-2">
                        <button onClick={toggleAbout} className="flex justify-between w-full p-2 rounded hover:bg-gray-200">
                            About
                            <span>{isAboutOpen ? '-' : '+'}</span>
                        </button>
                        {isAboutOpen && (
                            <ul className="ml-4">
                                <li className="mb-2">
                                    <a href="#" className={getItemClass('ourTeam')} onClick={() => onSelect('ourTeam')}>Our Team</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className={getItemClass('ourStory')} onClick={() => onSelect('ourStory')}>Our Story</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="mb-2">
                        <button onClick={toggleServices} className="flex justify-between w-full p-2 rounded hover:bg-gray-200">
                            Services
                            <span>{isServicesOpen ? '-' : '+'}</span>
                        </button>
                        {isServicesOpen && (
                            <ul className="ml-4">
                                <li className="mb-2">
                                    <a href="#" className={getItemClass('webDevelopment')} onClick={() => onSelect('webDevelopment')}>Web Development</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className={getItemClass('seo')} onClick={() => onSelect('seo')}>SEO</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="mb-2">
                        <a href="#" className={getItemClass('contact')} onClick={() => onSelect('contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
