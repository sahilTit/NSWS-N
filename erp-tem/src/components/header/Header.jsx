// src/components/Header.jsx

import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({ toggleSidebar, onLogout }) => {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-2 bg-blue-500 text-black z-10">
            <button className="bg-white px-2 py-2 rounded hover:bg-slate-400 transition" onClick={toggleSidebar}>
                <Bars3Icon className="w-6 h-6 text-black" />
            </button>
            <button
                type="button"
                className="inline-block rounded-full bg-zinc-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-zinc-600 transition duration-150 ease-in-out focus:outline-none focus:ring-0 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal"
                onClick={onLogout}
            >
                Log Out
            </button>
        </header>
    );
};

export default Header;
