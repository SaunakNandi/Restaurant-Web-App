
// Remember-  In the functional Components, the return value is the JSX code to render to the DOM tree
// JSX- JavaScript XML

import React, { useState } from 'react';
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard.js"
import Navbar from './Navbar';
/*
const uniqueList = [new Set(Menu.map((e) => {
    return e.category;
})*/
// using spread operator ... to store only the data
// using Set to to store unique value and we are storing this inside an array

const uniqueList = [... new Set(Menu.map((e) => {
    return e.category;
})
), "All"
]
console.log(uniqueList)
const Restaurant = () => {
// menuData is the state variable and setMenuDatais the updated data
    // menuData is the current data of Menu, i.e it contains the data of  menu
    const [menuData, setMenuData] = useState(Menu)   //using useState hooks
    
    const [menuList,setMenuList]=useState(uniqueList)
   
   
   
 // using props for creating a for loop effect
    // prop is used by
    // passing menuData values to MenuCard.js , so here the data {menuData} is passed from one component to another
    // the menuData in yellow color is an attribute


    // the filterItem is called from Navbar.js and we are importing Navbar
    const filterItem = (category) => {

        if (category === "All")
        {
            setMenuData(Menu)
            return
        }
        // filter is used to filter the Menu. From the Menu using curElem we fetched the category of Menu and 
        // return the category which the user have clicked on

        const updatedList = Menu.filter((curElem) => {
            console.log(curElem.category)
            return curElem.category===category
        })
        setMenuData(updatedList)
    }
        
            // Syntactic Sugar format <> </>
    //  <Navbar/> , <MenuCard /> - calling the component MenuCard and Navbar

    // passing {menuData} as props
    return (
        <>
           <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData}/>
        </>
    )
}
export default Restaurant;
