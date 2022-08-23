import React, { useEffect } from "react";

export default function ElevatorControl({ pisos }: { pisos: number }) {
  const [selectFloor, setSelectFloor] = React.useState([]) as number[] | any;
  const renderFloors = [];
  const handleFloor = (chosenFloor: number) => (_event: any) => {
    setSelectFloor((prevState: any) => [...prevState, chosenFloor]);
  };
  for (let iterator = 1; iterator <= pisos; iterator++) {
    renderFloors.push(
      <button
        disabled={selectFloor.join().includes(iterator)}
        onClick={handleFloor(iterator)}
        className={`text-white w-32 h-32 mt-5 ${
          !selectFloor.join().includes(iterator) ? "bg-cyan-400" : "bg-gray-900"
        }`}
        type={"button"}
      >
        {iterator}
      </button>
    );
  }
  useEffect(() => {
    setTimeout(() => {
      setSelectFloor((prevState: any) => [
        ...prevState.sort((a: number, b: number) => a - b),
      ]);
    }, 8000);
    return () => {};
  }, [selectFloor]);

  return (
    <div className="content-container">
      <span className="text-4xl">Control Elevador #pisos: {pisos}</span>
      <span className="text-4xl">Haz presionado: {selectFloor.join()}</span>
      <span className="text-4xl">Orden De Elevasion: {selectFloor.join()}</span>
      <div className="content-list">{renderFloors}</div>
    </div>
  );
}
