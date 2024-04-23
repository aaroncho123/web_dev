import {
    Link,
  } from "react-router-dom";

const navbar_style = {
    display: "flex",   
    backgroundColor: "yellow",
    justifyContent: "end",
    fontSize: "20px",
    color: "#61dafb",
    gap: "20px",
    padding: "10px"
 };



function Navbar(){
    return (
    <div style = {navbar_style}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/hobbies">Hobbies</Link>
    <Link to="/tools">Tools</Link>
    </div>
    )
}

export default Navbar;
