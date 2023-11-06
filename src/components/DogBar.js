function DogBar({ dogsToDisplay, setCurrentId }) {
  const dogList = dogsToDisplay.map((dog) => (
    <span key={dog.id} onClick={(e) => setCurrentId(dog.id)}>
      {dog.name}
    </span>
  ));
  return <div id="dog-bar">{dogList}</div>;
}
export default DogBar;
