import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import AppointmentForm from '../Form/Form';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/Images/x1.png'; // Import the logo

const Navlinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/about",
    },
    {
        id: 3,
        name: "Services",
        link: "/services",
    },
];

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const handleOpenForm = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageChange = (e) => {
        const newLanguage = e.target.value;
        setSelectedLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="bg-[#50C878] shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
                <img src={logo} alt="Company Logo" className="h-20 md:h-20" /> {/* Replace company name with logo */}
                <div className="hidden md:flex items-center gap-10">
                    {Navlinks.map(({ id, name, link }) => (
                        <Link key={id} to={link} className="inline-block hover:text-primary text-xl font-semibold text-white">
                            {t(name)}
                        </Link>
                    ))}
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="px-3 py-2 border rounded-md text-black"
                    >
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                    </select>
                    <button
                        onClick={handleOpenForm}
                        className="bg-[#1a4a2088] text-white p-4 rounded"
                    >
                        {t('Book Appointment')}
                    </button>
                    <AppointmentForm isOpen={isFormOpen} onClose={handleCloseForm} />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-3xl">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {Navlinks.map(({ id, name, link }) => (
                            <li key={id}>
                                <Link to={link} onClick={toggleMenu} className="block hover:text-primary text-xl font-semibold text-black">
                                    {t(name)}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <select
                                value={selectedLanguage}
                                onChange={handleLanguageChange}
                                className="px-3 py-2 border rounded-md text-black"
                            >
                                <option value="en">English</option>
                                <option value="ar">Arabic</option>
                            </select>
                        </li>
                        <li>
                            <button
                                onClick={handleOpenForm}
                                className="bg-blue-500 text-white p-4 rounded"
                            >
                                {t('Book Appointment')}
                            </button>
                            <AppointmentForm isOpen={isFormOpen} onClose={handleCloseForm} />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
