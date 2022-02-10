import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App max-w-4xl mx-auto">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
