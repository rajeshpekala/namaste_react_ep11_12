import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
    const {resdata} = props;
    const {cloudinaryImageId,
      name,
      cuisines,
      avgRating
     } = resdata?.info;
     
     const {deliveryTime} = resdata?.info.sla;

    return(
        <div className ="m-4 p-2 w-[235px] rounded-lg bg-gray-100 flex-wrap hover:bg-gray-300">
            
            
                <img className = "w-[230px] h-44 rounded-lg" src ={CDN_URL+ 
             cloudinaryImageId
                }/>
            
           
            <h3 className= "font-bold py-3 text-xl">{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime + "minutes"}</h4>
        </div>
    )
}

export const withOpenedLabel = (Restaurant) => {
    return(props) =>{
        return(
            <div >
                <label className ="absolute bg-red-400 text-gray-900 rounded-lg" >Closed</label>
                <Restaurant {...props}/>
            </div>
        );
    };
};

export default Restaurant;