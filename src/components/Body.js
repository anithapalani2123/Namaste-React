import ResCard from "./ResCard";
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react";


const Body = () => {

    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=13.0693568&lng=80.1948314");
        const json=await data.json();

        console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setData(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);


    }

    if(data.length===0)
    {
        return <Shimmer/>
    }
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