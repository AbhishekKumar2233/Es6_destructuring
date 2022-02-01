const animals = [
  {
    name: "Dog",
    sound: "woof",
    requirement: {
      food: 2,
      water: 4
    }
  },
  { name: "Cat", sound: "moew" }
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };
