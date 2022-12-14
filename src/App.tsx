import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import PokedexSearch from "./components/PokedexSearch/PokedexSearch";
import PokemonSummary from "./components/PokemonSummary";
import SideBar from "./components/SideBar/SideBar";
import ElevadorComponent from "./components/TrainerManagement";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pokemon" element={<PokedexSearch />} />
        <Route path="/trainer" element={<PokemonSummary />} />
        <Route path="/battle" element={<ElevadorComponent />} />
      </Routes>
    </div>
  );
}

export default App;
