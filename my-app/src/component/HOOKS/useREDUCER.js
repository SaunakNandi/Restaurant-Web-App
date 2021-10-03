import React,{useState,useReducer} from "react";
import "./STYLE.css";

// rememebr - reducer, UseReducer are functional component 
//REDUCER WILL BE TRIGGERED BY DISPATCH
const reducer = (state, action) => {
    if (action.type === "INCR")
    {
        state = state + 1
    }
    if (state>0 &&  action.type === "DECR")
    {
        state = state -  1
    }
    return state
}


// HOOKS ARE USED TO MANAGE YOUR
const UseReducer = () => {

    const initialData = 10
    // dispatch is used to trigger reducer function
    const [state, dispatch] = useReducer(reducer,initialData);
   
    return (
      <>
        <div className="center_div">
                <p>{state}</p>
          <div class="button2" onClick={() =>dispatch({type:"INCR"}) }>
            <span></span> 
            <span></span>
            <span></span>
            <span></span>
            Increment
          </div>
          <div class="button2" onClick={() =>dispatch({type:"DECR"}) }>
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
 
  

export default UseReducer;