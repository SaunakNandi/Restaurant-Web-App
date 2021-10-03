import React from "react"
// accepting {menuData} as a parameter
const MenuCard = ({ menuData }) => {
    console.log(menuData)
    // using map method inside menuData
    /* using the concept of destructuring, const{id,name,category,image,description}=curElem
    so there is no need of writing curElem.id, curElem.category, curElem.name, curElem.image
    */
    return (
        <>
            <section className="main-card--container">
                {menuData.map((curElem) => {
                    
                const {id,name ,image,description}=curElem
                return (
                    <>
                <div className="card-container" key={id}>
                    <div className="card">
                        <div className="card-body">
                                <span className="card-number card-title subtitle">
                                    {id}
                                </span>
                            <span className="card-author subtle" >{name}</span>
                            <h2 className="card-title">{name}</h2>
                            <span className="card-description">
                                {description}
                            </span>
                        <div className="card-read">Read</div>
                    </div>
        
                    <img src={image} alt="image" className="card-media"/> 

                <span className="card-tag subtle">Oder now</span>
            </div>
            </div>
            </>
                )
            })}
            </section>
        </>
    )
}

export default MenuCard;