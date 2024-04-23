import React from "react";
import profile from "../images/profile.jpg";
import background from "../images/background.jpg";

function Home() {


const imageBgStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "60vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${background})`,  
  backgroundPosition: "center",
  marginBottom: 200,
}


const imageStyle = {   
    width: 300,
    height: 300,
    borderRadius: 300/2,
    overflow: "hidden",
    border: "2px solid",
    borderColor: "black",
    zIndex: 1,
    position: "absolute",
    bottom: 200, 
}

const contactStyle = {
  margin:20,
  borderTop: "1px solid black" ,
  borderBottom: "1px solid black" ,
}

    return (
      <>        
      <div style={imageBgStyle}>               
        <img src={profile} alt="profile" style={imageStyle}/> 
      </div>

      <div>
        <h1>Aaron Cho</h1>
        <h2>Software Engineer</h2>
        <p>
          I am a software engineer with more than 20 years experience in the embedded space.
          I have worked in the following fields: 
        </p>
        <ul>
          <li>DVD/multimedia development</li>
          <li>FGPA VHDL</li>
          <li>ASIC Chip development and verfication</li>
          <li>Defense Industry</li>
          <li>Agriculture data monitoring</li>
        </ul>
      </div>
      <div style ={contactStyle}>
        <h2>Contact</h2>
        <p>
            Email: choaaron@hotmail.com
        </p>
        <p>
            Phone No.: (+64)210519398
        </p>
      </div>

      <p>
        Click on the About page for more information
      </p>
      </>
    )
    
  };
  
  export default Home; 