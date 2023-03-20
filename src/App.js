
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';
import Header from "./Components/Header";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Home from "./Pages/Home";
import LogInDetails from "./Pages/LogInDetails";
import { LoginPage } from "./Pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/LoginPage' element={<LoginPage />}></Route>
          <Route path='/LogInDetails' element={<PrivateRoute/>}>
           <Route path='/LogInDetails' element={<LogInDetails/>}/>
          </Route>
          <Route path='/MovieDetails:type' element={<LoginPage/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
