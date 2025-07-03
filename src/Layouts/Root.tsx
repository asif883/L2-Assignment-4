import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen max-w-7xl mx-auto">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;