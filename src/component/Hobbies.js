import React from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import fpga from "../images/fpga_arty.jpg";
import beaglebone from "../images/beaglebone.jpg";
import esp32 from "../images/esp32cam.jpg";

const items = [
    {
        name: "Xilinx Arty FPGA board",
        description: "Need to refresh my VHDL skills ...",
        image: fpga,
    },
    {
        name: "BeagleBone Black board",
        description: "Learning Embedded Linux ...",
        image: beaglebone,
    },
    {
        name: "ESP32CAM",
        description: "Learning Bluetooth ...",
        image: esp32,
    },
]


const imageStyle = {   
    width: 400,
    height: 300

}


function Hobbies() {
    
    return (
        <>
        <Carousel 
            indicatorIconButtonProps={{
                style: {
                    padding: '10px',    // 1
                    color: 'black'       // 3
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: 'black' // 2
                }
            }}
            indicatorContainerProps={{
                style: {
                    marginTop: '30px',  // 5
                    marginBottom: '30px',
                    textAlign: 'center' // 4
                }

            }}
        >
            { items.map( (item, i) => <Item key={i} item={item} /> )}
        </Carousel>
        </>
    )
}

function Item(props)
{
    return (
        <>
            <h2>{props.item.name}</h2>            
            <p>{props.item.description}</p>
            <img src={props.item.image} style={imageStyle}/>
        </>
    )
}

export default Hobbies;
