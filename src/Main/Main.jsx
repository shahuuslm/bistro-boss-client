import { Outlet } from "react-router-dom";
import Footer from "../Layout/Shared/Footer/Footer";
import Navbar from "../Layout/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;