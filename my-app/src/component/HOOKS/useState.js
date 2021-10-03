import React,{useState} from "react";
import "./STYLE.css";

// HOOKS ARE USED TO MANAGE YOUR
const UseState = () => {

 // const useState =  (initialData) => {

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
          <div class="button2" onClick={()=> (myNum> 0 ? setMyNum(myNum-1):setMyNum(0))}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Decrement
          </div>
        </div>
      </>
    );
  };
 
  

export default UseState;