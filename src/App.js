import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/page/About/About";
import Home from "./components/page/Home/Home";
import Header from "./components/shared/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
