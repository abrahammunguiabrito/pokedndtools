import React from "react";
import Elevator from "./Elevator";
import ElevatorControl from "./ElevatorControl";

export default function ElevadorComponent() {
  const numPisos = 5;
  return (
    <>
      <Elevator pisos={numPisos} />
      <ElevatorControl pisos={numPisos} />
    </>
  );
}
