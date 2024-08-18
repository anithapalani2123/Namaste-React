import ResCard from "./ResCard";
import dataApi from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [data,setData]=useState(dataApi);
    return(
        <div className='body'>
            <button className='filter-restaurants' onClick={()=>{
                const filteredData=data.filter((restaurant)=> restaurant.info.avgRating>4.5);
                setData(filteredData);

            }}>Top Rated Restaurants</button>
            <div className='Res-container'>
                {
                    data.map((restaurant)=> 
                        <ResCard key={restaurant.info.id} resData={restaurant}/>
                    )
                }
                
                

            </div>
            
        </div>
    )
}

export default Body;