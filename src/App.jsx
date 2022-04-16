import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Country from "./Components/Country";
import City from "./Components/City";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<Country />} />
        <Route path="/add-city" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
