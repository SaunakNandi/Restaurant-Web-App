// UseEffect HOOK
// By using this Hook u tell React that your component needs to do something after render
import React, { useState,useEffect } from "react";
import "./STYLE.css";
// [] - array dependecy
const USEEFFECT = () => {

 // const useState =  (initialData) => {

    useEffect(() => {
      document.title = `Chats(${myNum})`
    })
  
  
  
  
    const initialData = 1
  
    // setMyNum is an updated function keeps the updated value
    // myNum keeps initial value 
    // whenever the setMyNum is changed it will be the current value of myNum 
    const [myNum, setMyNum] = useState(initialData)   
    return (
      <>
        <div className="center_div">
                <p>{myNum}</p>
          <div class="button2" onClick={()=> setMyNum(myNum+1)}>
            <span></span> 
            <span></span>
            <span></span>
            <span></span>
            Increment
          </div>
          </div>
      </>
    );
  };
 
  

export default USEEFFECT;