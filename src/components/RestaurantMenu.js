import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {


  const {resId} = useParams(); 
  const rmenu = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(null);

if(rmenu === null){
    return <Shimmer/>;
}
const {name,cuisines,avgRating,costForTwo} =rmenu?.cards[0]?.card?.card?.info;
const {itemCards} = rmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card;


const categories =
 rmenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
    (c)=>c?.card?.card?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// console.log(categories);

    return (
        <div className = "text-center" >
         <h1 className = "font-bold text-xl">{name}</h1>
         <p className = "font-bold text-lg">{cuisines} - {costForTwo}</p>
        {categories.map((category,index) =>
        //  this is a controlled component

        <RestaurantCategory key ={category?.card?.card.id} 
        data = {category?.card?.card}
        showItems ={index === showIndex?true:false}
        setShowIndex = {() => setShowIndex(index === showIndex ? null : index)}
        />)}

        </div>
    )
}




export default RestaurantMenu;