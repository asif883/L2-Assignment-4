import { Link, NavLink } from "react-router-dom";
import '../../CSS/font.css'
import '../../CSS/nav.css'
import { PiShoppingCartBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "All Books", path: "/all-books" },
    { id: 3, name: "Add Book", path: "/create-book" },
    { id: 4, name: "Borrow Summary", path: "/borrow-summary" },
]

const Navbar = () => {

    return (
        <div className="px-3 md:px-6">
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navItems?.map((item) => <li key={item?.id}><NavLink className="hover:text-indigo-800" to={item?.path}>{item?.name}</NavLink></li>)
                        }
                    </ul>
                    </div>
                    <Link to={'/'} className="text-xl md:text-3xl font-medium  lobster">Mini<span className="text-[#DE3241]">-Library</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-8 font-semibold px-1 font text-[19px] text-gray-700">
                      {
                         navItems?.map((item) => <li key={item?.id}><NavLink className="hover:text-[#DE3241]" to={item?.path}>{item?.name}</NavLink></li>)
                      }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-4 font-bold">
                        <Link to={'#'} className="hover:text-[#DE3241]"><FaSearch size={24}/></Link>
                        <Link className="hover:text-[#DE3241]" to={'#'}><PiShoppingCartBold size={26}/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;