import { RESTAURANT_URL } from "../utils/constants";
const ResCard = (props) => {

    const {resData}=props

    
    return(
        <div className='res-card'>
            <img alt='res-image' src={RESTAURANT_URL+resData.info.cloudinaryImageId}/>

            <div className="cardsDesc">
                <h3>{resData.info.name}</h3>
                <h3>{resData.info.costForTwo}</h3>
                <h4>{resData.info.cuisines.join(', ')}</h4>
                <h4>{resData.info.avgRating} stars</h4>
                <h4>{resData.info.sla.deliveryTime}minutes</h4>

            </div>
            

        </div>
    )

}
export default ResCard;