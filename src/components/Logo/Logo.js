import React from "react";
import Tilt from 'react-tilt';
import "./Logo.css";
import image from "./logo.png";

export default function Logo(){
    return(
<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 250 }} >
 <div className="Tilt-inner"> <img alt="logo" src ={image} size= "200" /> </div>
</Tilt>
)
}

