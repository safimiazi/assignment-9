import { NavLink,Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/Besty-Logo.png"

const Navbar = () => {

    const navLink = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
    </>
    return (
    
            <div className="navbar bg-gray-700 md:px-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <nav>
                            {navLink}
                        </nav>
                    </ul>
                </div>
                <Link to="/"><img className="w-48" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <nav>
                        {navLink}
                    </nav>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn bg-orange-500 border-0 rounded-3xl text-white px-10">Login</Link>
            </div>
        </div>
     
    );
};

export default Navbar;