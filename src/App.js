import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import LS from "./Pages/Login_SignUp/LS";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>} ></Route>
          <Route  path="/LoginSignUp" element={<LS/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;