import { LOGO_URL } from "../utils/constants";
import {useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
const [btnname,setBtnname] = useState("login");
const onlinestatus =useOnlineStatus();

const {loggedInUser} = useContext(UserContext);

//subscribing to the store using selector
const cartItems = useSelector((store) => store.cart.items);




// console.log("page rendered");
// useEffect(
//     () => {
//         console.log("useeffect render");
//     },[btnname]
// ); 

    return (
        <div className = "flex justify-between bg-green-200 shadow-md m-1">
            <div className = "logo-container">
            <img className = "w-24" src = {LOGO_URL} alt = "logo" />
            
            </div >
          
            <div className = "flex  items-center" >
                <ul className = "flex p-3 m-3">
                    <li className="px-4">OnlineStatus:{
                    onlinestatus?("✅"):("🚨") }</li>
                    <li className="px-4"><Link to ="/">Home</Link></li>
                    <li className="px-4"><Link to ="/about">About Us</Link></li>
                    <li className="px-4"><Link to = "/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to = "/grocery">Grocery</Link></li>
                    <li className="px-4 text-lg font-bold">
                    <Link to = "/cart">Cart ({cartItems.length}-Items)</Link>
                        </li>
                    <button className = "login"
                    onClick={ () => {
                        btnname === "login"?
                     setBtnname("logout"):
                     setBtnname("login");   
                    }}
                    >{btnname}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
                
            </div>
        </div>
    );
};

export default Header;