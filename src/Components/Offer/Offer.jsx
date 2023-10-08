import { Link } from "react-router-dom"
import event1 from "../../assets/event1.png"
import event2 from "../../assets/event2.png"
import event3 from "../../assets/event3.png"
import event4 from "../../assets/event4.png"
import event5 from "../../assets/event5.png"
const Offer = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-32">
                <div className="space-y-3 text-center md:text-left">
                    <h4 className="text-orange-600 text-3xl">What We offer</h4>
                <h2 className="text-5xl font-bold">We Offer a Range of Event.</h2>
                <p>Certainly! It seems like you're looking for information about a range of events. Typically, when an organization or company mentions offering a range of events, it means they provide various types of activities, occasions, or gatherings tailored to different purposes and interests.</p>
                <Link to="/event" className="btn bg-orange-500  hover:bg-orange-600 border-0 rounded-3xl text-white px-10">view all event</Link>

                </div>
                <div>
                    <img className="md:w-96 rounded" src={event1} alt="" />
                </div>
                <div>
                    <img className="md:w-96 rounded" src={event2} alt="" />
                </div>
                <div>
                    <img className="md:w-96 rounded" src={event3} alt="" />
                </div>
                <div>
                    <img className="md:w-96 rounded" src={event4} alt="" />
                </div>
                <div>
                    <img className="md:w-96 rounded" src={event5} alt="" />
                </div>
                
               
            </div>
        

        </div>
    );
};

export default Offer;