import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

/* import img1 from "./assets/pic1.png";
import img2 from "./assets/pic2.png";
import img3 from "./assets/pic3.png";
import img4 from "./assets/my-pic2.jpg"; */


export default function App() {
  // console.log(jokesData.map(joke => ({setup: joke.setup,punchline: joke.punchline})));

  /* const jokeElements = jokesData.map((joke, index) => {
  
    return <Jokes 
            key={index}
            setup={joke.setup}
            punchline={joke.punchline}
          />
  }); */

  // console.log(jokeElements);
  // const arr = [<h1>hello world</h1>, <h3>hello world</h3>]
  // <Hero />
  // <Card />
  // <PropsTutorial />
  // <MapTutorial /> 
  // {jokeElements}

 
  const cardElements = data.map((cardData, index) => <Card
    key={index}
    {...cardData}
  />);


  return (

    <div className="app-container">
      <NavBar />
      <Hero />
      <section className="card-list">
        {cardElements}
      </section>

    </div>
  )
}


/* key={index}
    img={img1}
    title={cardData.title}
    rating={cardData.stats.rating}
    price={cardData.price}
    reviewCount={cardData.stats.reviewCount}
    location={cardData.location}
    openSpots={cardData.openSpots}
 */

/* <Card
        img={img1}
        rating={5.0}
        title="Freestyle classes with Juice Wrld"
        reviewCount={3005}
        country="U.S.A."
        price={500}
      />
      <br />

      <Card
        img={img2}
        rating={5.0}
        title="How to write selling Emo songs like Juice Wrld"
        reviewCount={54000}
        country="NG"
        price={1200}
      />

      <br />

      <Card
        img={img3}
        rating={5.0}
        title="Improve your pen game like Juice Wrld"
        reviewCount={1500}
        country="NG"
        price={1000}
      />

      <br />

      <Card
        img={img4}
        rating={5.0}
        title="Kill every rap battle"
        reviewCount={2300}
        country="NG"
        price={1500}
      />
 */


/* <Contact
        name="Juice Wrld"
        img={img1}
        number="(104) 999-4444"
        email="hello1@world.com"
      />

      <Contact
        name="Mr. Robbery"
        img={img2}
        number="(204) 999-4444"
        email="hello2@world.com"
      />

      <Contact 
        name="Mr. Wrld"
        img={img3}
        number="(304) 999-4444"
        email="hello3@world.com"
      /> */
