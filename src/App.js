
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';
import Header from "./Components/Header";
import Login from "./Components/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
