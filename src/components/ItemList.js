import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
 const dispatch = useDispatch();   
 
    const handleAddItem = (item) => {
      dispatch(addItem(item));
      alert("Item added to the cart!");
 };
    return(
<div>
    {items.map((item)=> (
        <div key = {item.card.info.id}
        className = "p-2 m-2 border border-gray-300 border-b-2 text-left flex">
       <div className = "m-2">{item.card.info.itemAttribute.vegClassifier === "VEG" ? "🟢" : "🔴" }</div>
          <div className="w-9/12">
            <div className = "py-2">
            
            <span className="font-bold">{item.card.info.name}</span>
            <span>-₹{
                item.card.info.price?
            item.card.info.price/100:
            item.card.info.defaultPrice/100}</span>
            </div>
           
          
            <p className = "text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className ="p-1 bg-white text-black rounded-lg"
                    onClick={()=> {handleAddItem(item)}}
                    >
                  Add+</button>
                </div>
             <img src = {CDN_URL + item.card.info.imageId } className="w-full"/>
         </div>
        </div>
    )

    )}
</div>
    );
}

export default ItemList;