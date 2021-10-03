import React from "react";

const Navbar = ({ filterItem, menuList }) => {

    // using prop for button also
    return (
        <>
             <nav className="navbar">
                <div className="btn-group">
                    {
                        menuList.map((e)=>
                        {
                            // e contains the elements of menuList
                            return(
                                <button className="btn-group__item" onClick={() => filterItem(e)}>{e}</button>)
                        })
                    }
                   
                </div>
            </nav>
        </>
    )
}

export default Navbar