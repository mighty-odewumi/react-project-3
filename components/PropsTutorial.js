export default function PropsTutorial() {
  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  if  (hours < 12) {
    timeOfDay = "morning";  
  }

  else if ( hours >= 12 && hours <= 17) {
    timeOfDay = "afternoon";  
  }

  else if (hours >= 18) {
    timeOfDay = "night";
  }

  return (
    <h1>Time of day is {timeOfDay}</h1>
  )

}
