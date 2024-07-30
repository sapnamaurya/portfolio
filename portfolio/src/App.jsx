import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Experience from "./component/Experience";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App;
