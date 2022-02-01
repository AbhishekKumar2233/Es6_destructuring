import "./styles.css";
import animals, { useAnimals } from "./data";
import cars from "./Cars";

export default function App() {
  const [dog, cat] = animals;
  // const { name, sound } = dog;
  // console.log(sound);
  //also useful
  // const {name:dogName, sound:dogSound} = dog;
  // console.log(dogSound);

  //if value is not defined in data then use default value
  // const {name="Tommy", sound="woof"} = dog;
  // console.log(dogSound);

  //when you get nested array
  // const {
  //   name,
  //   sound,
  //   requirement: { food, water }
  // } = dog;
  // console.log(food + water);

  //if you want only food
  //   const {

  //   requirement: { food, water }
  // } = dog;
  // console.log(food + water);

  //use of function
  // console.log(useAnimals(cat));

  const [animal, makeSound] = useAnimals(dog);
  console.log(animal);
  makeSound();

  return <div className="App"></div>;
}
