import Offer from "../../Components/Offer/Offer";
import banner from "../../assets/banner1.jpeg"
const Gallery = () => {
    return (
        <div className="space-y-20 mb-20">
            <div className="flex justify-center items-center" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', width: '100%', height: '50vh' }}>
                <div className="bg-orange-400 bg-opacity-20 w-full h-full flex justify-center items-center">
                    <div>
                        <h1 className="text-6xl text-white text-center font-bold">Our Gallery</h1>
                    </div>
                </div>
            </div>

            <Offer></Offer>

        </div>
    );
};

export default Gallery;