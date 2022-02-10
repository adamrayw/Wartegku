import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App max-w-4xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
