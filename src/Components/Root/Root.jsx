import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";


const Root = () => {
    return (
        <div className="">
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>

           

        </div>
    );
};

export default Root;