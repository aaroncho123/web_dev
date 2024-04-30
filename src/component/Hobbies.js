import React from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import fpga from "../images/fpga_arty.jpg";
import beaglebone from "../images/beaglebone.jpg";
import esp32 from "../images/esp32cam.jpg";



function Hobbies() {

    const items = [
        {
            name: "Xilinx Arty FPGA board",
            description: "Need to refresh my VHDL skills ...",
            image: fpga,
            width: 400,
            height: "auto",
        },
        {
            name: "BeagleBone Black board",
            description: "Learning Embedded Linux ...",
            image: beaglebone,
            width: 400,
            height: "auto",
        },
        {
            name: "ESP32CAM",
            description: "Learning Bluetooth ...",
            image: esp32,
            width: 400,
            height: "auto",
        },
    ]

    function Item(props)
    {
        return (
            <>
                <h2>{props.item.name}</h2>            
                <p>{props.item.description}</p>
                <img src={props.item.image} alt={props.item.name} width = {props.item.width} height = {props.item.height}/>
            </>
        )
    }

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

export default Hobbies;
