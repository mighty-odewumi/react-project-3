// import contactPic from "../assets/pic1.png";


export default function Contact({name, img, email, number}) {
  return (
    <div className="contact-card">
      <img src={img} alt="contact pic" />
      <h3>{name}</h3>
      <div className="info-group">
        <p>{number}</p>
      </div>
      <div className="info-group">
        <p>Email me at {email}</p>
      </div>
    </div>
  )
}
