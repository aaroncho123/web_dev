import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './component/Home'
import About from './component/About';
import Hobbies from "./component/Hobbies";
import Tools from "./component/Tools";
import Navbar from './component/Navbar';
import Footer from "./component/Footer";
import  React from "react";



function App() {
  return (
    
    <div className="App">
        <Navbar className="Navbar"/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/hobbies" element={<Hobbies />}></Route>          
          <Route path="/tools" element={<Tools />}></Route>
        </Routes>
        <Footer />
    </div>
  )
}

export default App;
