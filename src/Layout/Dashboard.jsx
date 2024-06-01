import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendar, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { MdEmail } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    // ToDo:
    const [isAdmin] = useAdmin();


    return (
        <div className=" flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li>

                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>
                                        Admin Home </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/addItems'>
                                        <FaUtensils /> 
                                        Add Items </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/manageItems'>
                                        <FaList></FaList> 
                                        Manage Items </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/bookings'>
                                        <FaBook></FaBook> 
                                        Manage Bookings </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/users'>
                                        <FaUsers></FaUsers> 
                                        All Users </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>

                                    <NavLink to='/dashboard/useHome'><FaHome></FaHome> User Home </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/history'><FaCalendar></FaCalendar> not History </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart({cart.length}) </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/review'><FaAd></FaAd>Add a Review </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/paymentHistory'><FaList></FaList>Real Payment History</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider">OR</div>
                    <li>

                        <NavLink to='/'><FaHome></FaHome> Home </NavLink>
                    </li>
                    <li>

                        <NavLink to='/order/salad'><FaSearch></FaSearch> Menu </NavLink>
                    </li>
                    <li>

                        <NavLink to='/order/contact'><MdEmail /> Contact </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content  */}
            <div className=" flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;