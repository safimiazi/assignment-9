import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/Besty-Logo.png"
import { useContext } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { logoutUser, user } = useContext(UserContext)

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                console.log("user successfully logout")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const navLink = <>



        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/Event">Event</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        {
            user && <>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li> <NavLink to="/Dashboard">Dashboard</NavLink></li>

            </>
        }

    </>
    return (

        <div className="navbar bg-gray-700 md:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                        {navLink}


                    </ul>
                </div>
                <Link to="/"><img className="w-48" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">

                    {navLink}


                </ul>
            </div>
            <div className="navbar-end">
               {
                user && <>
                 <div className="flex justify-around items-center gap-3">
                    <div className="w-10 rounded-full md:mr-4">
                        <img className="rounded-full" src={user.photoURL} />
                    </div>
                </div>
                </>
               }
                {user ?
                   <div>
                    <Link onClick={handleLogout} to="/" className="btn bg-orange-500  hover:bg-orange-600 border-0 rounded-3xl text-white ml-20 md:ml-0 px-10">Logout</Link>
                    <p className="font-bold text-white">{user.email}</p>

                   </div> 
                    :
                    <Link to="/login" className="btn bg-orange-500  hover:bg-orange-600 border-0 rounded-3xl text-white px-10">Login</Link>

                }
            </div>
        </div>

    );
};

export default Navbar;