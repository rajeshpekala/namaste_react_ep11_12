import Restaurant,{withOpenedLabel} from "./components/Restaurant";
import { useState,useEffect } from "react";
import Shimmer from "./components/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";


const AppBody = () => {
    const [ListofRestaurant,setListofRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const[Filteredlist,setFilteredlist] = useState([]);
   
    const RestaurantClosed = withOpenedLabel(Restaurant);
    
    

    useEffect(() =>{
      fetchdata();
    },
    []
    );
    
    const fetchdata = async () => {
        const data = await 
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonvalue = await data.json();
        
        setListofRestaurant(jsonvalue?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredlist(jsonvalue?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    
    const onlinestatus = useOnlineStatus();
    if (onlinestatus === false)
   return (<h1>You are Offline</h1>)
    ///u need to use to return to get render in react
    
    if (!ListofRestaurant || ListofRestaurant.length === 0) {
        return <Shimmer />;
      }

   


    return(
        
        <div className = "appbody">
             <div className="flex">
            <div className="m-4 p-4">
            <input
            className="border border-solid border-black"
             type="text"
             placeholder="Search restaurants..."
             value = {searchText}
             onChange={ (e) => {
              setSearchText(e.target.value);
             }
            }
                  />
                  <button
                  className="px-4 py-[0.9] bg-blue-300 ml-3 rounded-lg"
                  onClick={() =>{
                    
                    const list1 = ListofRestaurant.filter((val) =>
              val.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredlist(list1);
                  
                  }}
                  >Find Restaurants</button>
            </div>
            <div className = "flex items-center">
                <button className = "px-3 m-7 bg-red-200 rounded-lg" type = "button"
                onClick={ ()=>{
                    
                    const filteredList = ListofRestaurant.filter(
                       (res) => 
                         res.info.avgRating > 4.0   
                    );
                    setFilteredlist(filteredList);
                }} 

                >TopRatedRestaurants</button>
                </div>
            </div >
            <div className = "flex flex-wrap">
        {Filteredlist.map((restaurant) =>  (
       <Link
       className = "resline"
       key ={restaurant.info.id}
       to ={"/restaurants/"+restaurant.info.id}>
       {restaurant.info.availability.opened? 
       <Restaurant resdata = {restaurant}/>:
       <RestaurantClosed resdata = {restaurant}/>}
        
        </Link> 
        )
        )}
            
        </div>
        </div>

    );
};

export default AppBody;