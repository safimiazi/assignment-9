import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Services from "../../Components/Services/Services";


const Home = () => {
    return (
        <div>
            <div className="space-y-20">
            <Banner></Banner>
            <Services></Services>
            </div>
        </div>
    );
};

export default Home;