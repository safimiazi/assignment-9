import { useContext } from "react";
import { UserContext } from "../../Components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(UserContext)
    console.log(user)
    return (

        <div className="my-20 flex justify-center items-center">
            <div className="card md:w-96 bg-orange-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user.displayName}</h2>
                    <p>An event management company is a professional service provider that specializes in planning, organizing, and executing various types of events for individuals, businesses, and organizations. These events can range from weddings, parties, and conferences to corporate meetings, product launches, trade shows, and exhibitions. Event</p>
                    <div className="card-actions">
                        <Link to="/dashboard" className="btn bg-orange-500 text-white">View dashboard</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;