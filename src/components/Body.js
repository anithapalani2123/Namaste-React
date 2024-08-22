import ResCard from "./ResCard";
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react";


const Body = () => {

    const [data,setData]=useState([]);
    const [filteredData,setFilteredData]=useState([]);
    const [searchText,setSearchText]=useState("");

    useEffect(()=>{
        fetchData();

    },[]);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=13.0693568&lng=80.1948314");
        const json=await data.json();

        console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setData(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

        setFilteredData(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);


    }

    const searchRestaurtant = () => {
        const filteredRestaurant=data.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

        setFilteredData(filteredRestaurant);
    }

    
    return(  data.length===0 ?
        <Shimmer/>:
        <div className='body'>
            <div className="filters">
                <button className='button' onClick={()=>{
                    const filData=data.filter((restaurant)=> restaurant.info.avgRating>4.5);
                    setData(filData);

                }}>Top Rated Restaurants</button>
                <div className="search">
                    <input placeholder="search by restaurtant name..."  value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className="button"  onClick={searchRestaurtant}>Search</button>
                </div>

            </div>
            
            
            <div className='Res-container'>
                {
                    filteredData.map((restaurant)=> 
                        <ResCard key={restaurant.info.id} resData={restaurant}/>
                    )
                }
            </div>
            
        </div>
        
    )
}

export default Body;