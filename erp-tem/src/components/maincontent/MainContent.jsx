// src/components/MainContent.jsx

import { Outlet } from "react-router-dom";

const MainContent = () => {
    return (
        <main className="pt-16 p-4">
            <h2 className="text-2xl">Main Content Area</h2>
            <p>This is where your main content goes. It will be pushed when the sidebar opens.</p>
            {/* <India /> */}
            <Outlet />
        </main>
    );
};

export default MainContent;
