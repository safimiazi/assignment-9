import { useLoaderData } from "react-router-dom";
import EventCard from "../../Components/EventCard/EventCard";
import banner from "../../assets/banner1.jpeg"


const Event = () => {
    const data = useLoaderData()

    return (
        <div>
             <div className="flex justify-center items-center" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', width: '100%', height: '50vh' }}>
                <div className="bg-orange-400 bg-opacity-20 w-full h-full flex justify-center items-center">
                    <div>
                        <h1 className="text-6xl text-white text-center font-bold">Our Event</h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-32 my-20">
           {
            data.map(singleData => <EventCard singleData={singleData}></EventCard>)
           }
        </div>
        </div>
    );
};

export default Event;