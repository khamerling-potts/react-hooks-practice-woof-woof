import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const [goodFilter, setGoodFilter] = useState(false);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((data) => setDogs(data));
  }, []);

  function handleUpdateDog(updatedDog) {
    const updatedDogs = dogs.map((dog) =>
      updatedDog.id === dog.id ? updatedDog : dog
    );
    setDogs(updatedDogs);
  }

  const dogsToDisplay = dogs.filter((dog) => {
    if (!goodFilter) {
      return true;
    }
    if (goodFilter) {
      return dog.isGoodDog;
    }
  });

  const currentDog = dogs.find((dog) => dog.id === currentId);

  return (
    <div className="App">
      <Filter goodFilter={goodFilter} setGoodFilter={setGoodFilter} />
      <DogBar
        dogsToDisplay={dogsToDisplay}
        setCurrentId={setCurrentId}
        goodFilter={goodFilter}
      />
      <DogSummary onUpdateDog={handleUpdateDog} currentDog={currentDog} />
    </div>
  );
}

export default App;
