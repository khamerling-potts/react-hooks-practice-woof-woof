import DogInfo from "./DogInfo";
function DogSummary({ onUpdateDog, currentDog }) {
  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <DogInfo onUpdateDog={onUpdateDog} currentDog={currentDog} />
    </div>
  );
}
export default DogSummary;
