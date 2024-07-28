import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
