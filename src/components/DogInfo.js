function DogInfo({ onUpdateDog, currentDog }) {
  if (!currentDog) return <h3>Select a doggo</h3>;

  function handleButtonClick() {
    const configObj = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isGoodDog: !currentDog.isGoodDog,
      }),
    };
    fetch(`http://localhost:3001/pups/${currentDog.id}`, configObj)
      .then((r) => r.json())
      .then((dog) => onUpdateDog(dog));
  }
  return (
    <div id="dog-info">
      <img src={currentDog.image} alt={currentDog.name} />
      <h2>{currentDog.name}</h2>
      <button onClick={handleButtonClick}>
        {currentDog.isGoodDog ? "Good Dog!" : "Bad Dog!"}
      </button>
    </div>
  );
}
export default DogInfo;
