export default function MapTutorial(arr) {

  const mappedArr = arr.map(val => (val ** 2));
  console.log(mappedArr);
  console.log(arr);

  // return (<h2>This is the mapped array: {mappedArr}</h2>)
}

MapTutorial([1, 2, 3, 4]);

// let splittedArr;

/* let capitalize = (arr) => arr.map(
  val => {
    if (val[0].toLowerCase()) {
      return val[0].toUpperCase();
    }
  }
) */

let string = "alert";
let splitStr = string.split("");
                    
console.log(splitStr);
let capitalized = splitStr[0].toUpperCase();
console.log(splitStr.shift());
console.log(capitalized + splitStr.join(""));



const arr = (["alice", "john", "gordon"]);

const capitalizeArr = arr.map(val => val[0].toUpperCase() + val.slice(1));


console.log(capitalizeArr);

// What I wanna do is to check if the first letter of every word is small and then capitalize that.

const newArr = ["Home", "place", "card"];

const addTags = newArr.map(val => `<p>${val}</p>`);

console.log(addTags);
