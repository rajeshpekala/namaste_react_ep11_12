import ItemList from "./Itemlist";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {

   //const [showItems,setShowItems] = useState(false);
    //console.log(data);
    const handleClick = () => {
    setShowIndex();

    };
    return(
    <div>
 <div className = "w-6/12 bg-gray-100 mx-auto my-4 border-b shadow-md p-4">
   <div className="flex justify-between cursor-pointer" onClick = {handleClick}>
    <span className = "font-bold">{data.title}({data.itemCards.length})</span>
    <span>{showItems ? "🔼" : "🔽"}</span>
    </div>
   {showItems && <ItemList items = {data.itemCards}/>}
 </div>

    </div>
    );
}

export default RestaurantCategory;