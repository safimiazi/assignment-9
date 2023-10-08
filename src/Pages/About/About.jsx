import Stats from "../../Components/Stats/Stats";
import banner from "../../assets/banner1.jpeg"
import safi from "../../assets/about.png"
import Offer from "../../Components/Offer/Offer";

const About = () => {
    return (
        <div className="space-y-20">
            <div className="flex justify-center items-center" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', width: '100%', height: '50vh' }}>
                <div className="bg-orange-400 bg-opacity-20 w-full h-full flex justify-center items-center">
                    <div>
                        <h1 className="text-6xl text-white text-center font-bold">About</h1>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-32">
                <figure className="md:w-[500px]">
                    <img className="w-full rounded  border-y-orange-500  border-x-orange-500 border-r-8 border-b-8" src={safi} alt="" />
                </figure>
                <div className="space-y-4">
                    <h4 className="text-3xl text-orange-500">About Besty</h4>
                    <h2 className="text-5xl font-bold">The Expertise & Experience You Need</h2>
                    <p>An event management company is a professional service provider that specializes in planning, organizing, and executing various types of events for individuals, businesses, and organizations. These events can range from weddings, parties, and conferences to corporate meetings, product launches, trade shows, and exhibitions. Event management companies take care of all the aspects related to an event, ensuring that it runs smoothly and successfully.</p>
                     <h3 className="text-2xl font-bold">Audrey Nathania</h3>
                    <h4 className="text-xl text-orange-500 font-bold">CEO of Founder</h4>
                </div>
            </div>

<Offer></Offer>
            <Stats></Stats>
        </div>
    );
};

export default About;