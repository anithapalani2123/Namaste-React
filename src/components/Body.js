import ResCard from "./ResCard";
import dataApi from "../utils/mockData";


const Body = () => {
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='Res-container'>
                {
                    dataApi.map((restaurant)=> 
                        <ResCard key={restaurant.info.id} resData={restaurant}/>
                    )
                }
                
                

            </div>
            
        </div>
    )
}

export default Body;