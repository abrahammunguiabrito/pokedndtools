import React from "react";

export function Floor({ floors }: { floors: number }) {
  if (floors <= 3) return <></>;
  const floors_render = [];
  for (let iterator = floors; iterator >= 1; iterator--) {
    floors_render.push(
      <div className="flex w-64 h-32 bg-cyan-600 justify-center items-center">{`Piso: ${iterator}`}</div>
    );
  }
  return <>{floors_render}</>;
}
export default function Elevator({ pisos }: { pisos: number }) {
  return (
    <div className="flex flex-1 w-screen h-screen">
      <div className="flex flex-col area_elevador w-64 h-screen bg-red-300 space-y-2 justify-end">
        <Floor floors={5} />
      </div>
    </div>
  );
}
