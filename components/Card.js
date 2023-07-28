/* It could also be written as 
export default function Card({img, title, reviewCount, rating, location, openSpots}) {
  // But the attributes being passed when called in the App component become longer and the App file becomes bigger.
  // But this is just a matter of personal choice
  // Passing props currently is used with the spread operator syntax being passed as attribute in the App component.
  // You could pass the attributes as attribute={val} too when calling the Card component in the App component.
}  */


export default function Card(props) {
  // console.log(openSpots);

  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  }

  else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.coverImg} alt="card" className="card--img"/>

      <span className="card--status">
        Sold out
      </span>

      <div className="card-info-1">
        ⭐ 
        <span className="card--rating">
          {props.stats.rating} 
        </span>

        <span className="card--rating gray">
          ({props.stats.reviewCount}) •
        </span>

        <span className="card--country gray">
         {props.location}
        </span>
      </div>

      <h4 className="card-info-2">
        {props.title}
      </h4>

      <span className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </span>

    </div>
  )
}



/* img, rating, reviewCount, location, title, price, openSpotsimg, rating, reviewCount, location, title, price, openSpots  */

