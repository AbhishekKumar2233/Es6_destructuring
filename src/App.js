import "./styles.css";
import animals from "./data";
import cars from "./Cars";

export default function App() {
  const [dog, cat] = animals;
  const { name, sound } = dog;
  console.log(sound);
  //also useful
  // const {name:dogName, sound:dogSound} = dog;
  // console.log(dogSound);

  //if value is not defined in data then use default value
  // const {name="Tommy", sound="woof"} = dog;
  // console.log(dogSound);
  return <div className="App"></div>;
}
