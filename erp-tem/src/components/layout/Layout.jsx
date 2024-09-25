import { useState } from "react";
import Header from "../header/Header";
import MainContent from "../maincontent/MainContent";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from 'react-router-dom';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState('home');

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
    };


    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    // }

    return (
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <Sidebar isOpen={isSidebarOpen} selectedItem={selectedItem} onSelect={handleSelect} />
            <Header toggleSidebar={toggleSidebar} onLogout={handleLogout} />
            <MainContent />
        </div>
    );
};

export default Layout;
