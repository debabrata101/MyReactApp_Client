import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;