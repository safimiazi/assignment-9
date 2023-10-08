import Banner from "../../Components/Banner/Banner";
import BannerBottom from "../../Components/BannerBottom/BannerBottom";
import Blog from "../../Components/Blog/Blog";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Offer from "../../Components/Offer/Offer";
import Services from "../../Components/Services/Services";
import Stats from "../../Components/Stats/Stats";


const Home = () => {
    return (
        <div>
            <div>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <div className="space-y-20">
            <Services></Services>
            <Offer></Offer>
            <Stats></Stats>
            <Blog></Blog>
            </div>
            </div>
        </div>
    );
};

export default Home;