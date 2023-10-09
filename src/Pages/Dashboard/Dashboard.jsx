import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../Components/utilities/localStorage";
import { UserContext } from "../../Components/AuthProvider/AuthProvider";


const Dashboard = () => {
    const [card, setCard] = useState([])
    const [id, setId] = useState([])
    const data = useLoaderData()
    const { user } = useContext(UserContext)

console.log("this ", user);
    useEffect(() => {
        const id = getStoredCart()
        setId(id)

    }, [])

    useEffect(() => {
        const cardInfo = [];
        for (const itemId of id) {
            const foundCard = data.find((item) => item.id === itemId);
            if (foundCard) {
                cardInfo.push(foundCard);
            }
        }
        setCard(cardInfo)
    }, [])
console.log(card)
    return (
        <div>
                      <h3 className="text-3xl text-center">Please Booking our services</h3>
                      <h4 className="text-xl text-center">Please Wait some times</h4>
        <div className=" md:px-32 grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
            {
                card.map(singleCard => <div>

                    <div className="card card-side bg-orange-300 shadow-xl">
                        <figure>
                            <img className="w-28 rounded-full ml-2" src={user.photoURL} alt="Movie" />
                            </figure>
                        <div className="card-body">
                            <h1 className="text-2xl font bold">User Name: {user.displayName}</h1>
                            <h2 className="card-title">Selected service: {singleCard.service_name}</h2>
                            <p>email: {user.email}</p>
                            <p>price: {singleCard.price}</p>
                            
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Dashboard;