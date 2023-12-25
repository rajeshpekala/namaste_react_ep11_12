import { useDispatch, useSelector } from "react-redux";

import ItemList from "../components/ItemList";
import { clearCart } from "../utils/cartSlice";



 const Cart = () => {
    ///subscribing the items
const cartItems = useSelector((store) => store.cart.items);

const dispatch = useDispatch();

const handleClearCart = (item) => {
    dispatch(clearCart(item));
};



    return(
        <div>
        <div className ="text-center font-bold text-xl m-4">Cart
        
        </div >
        <div className ="text-center">
            <button className=" font-bold  bg-black text-white p-2"  
            onClick={handleClearCart}>ClearCart</button>
            {cartItems.length === 0 && 
                <h1>Cart is Empty Add Someitems😊</h1>
             }
            </div>
        <div className="w-6/12 m-auto">
                      <ItemList items = {cartItems}/>
       </div>
       </div>
        

    );
 }

 export default Cart