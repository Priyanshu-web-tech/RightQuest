import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import LS from "./Pages/Login_SignUp/LS";
import Videos from "./Pages/Videos/Videos";
import RealG from "./Pages/RealG/RealG";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/Home" element={<Home/>} ></Route>
          <Route  path="/" element={<LS/>} ></Route>
          <Route  path="/Videos" element={<Videos/>} ></Route>
          <Route  path="/RealG" element={<RealG/>} ></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;