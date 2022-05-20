import React from "react";
import styles from "./Unorderlist.module.css"
const Unorderlist=()=>{
return (

    <div className={styles.list}>
        <h2>Mobile Operating System</h2>
        
        <ul type="disc">
            <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
        </ul>
        
        <h2>Mobile Manufacturers</h2>
        
         <ul>
            <li  type="square">Samsung</li>
            <li  type="square">HTC</li>
            <li  type="disc">Micromax</li>
            <li type="circle">Apple</li>

            </ul>
        </div>
)

}

export default Unorderlist