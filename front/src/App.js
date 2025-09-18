import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AddItem from "./pages/AddItem";
import About from "./pages/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Slider />
      </BrowserRouter>
    </div>
  );
}

export default App;
