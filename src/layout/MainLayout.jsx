import { Outlet } from "react-router";
import Navbar from "../components/Organisms/Navbar";

export default function MainLayout() { 
    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-4">
                <Outlet />
            </main>
        </div>
    );
};