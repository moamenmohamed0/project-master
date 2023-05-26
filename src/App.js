import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Properity from "./pages/properity/Properity"


function App() {
  return (
    <div className="App">
<Routes> 
<Route path = "/" element={<Home/>}/>
<Route path = "/Properity" element={<Properity/>}/>

</Routes>
    </div>
  );
}

export default App;
