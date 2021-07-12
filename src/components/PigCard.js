import React, { useState } from "react"




function PigCard (props) {

  function displayExtraContent(e) {
    const isHidden = e.target.children[2].hidden
    e.target.children[2].hidden = isHidden ? false : true
  }

//make it soo that raise is added to card on hover!!!!
  return (
    <div onClick={displayExtraContent} className = "ui raise card eight wide column">
      <div className="ui small image">
        <img  src={props.image} alt=" a cute pig"></img>
      </div>
        <div className="content">
          <h2 className="header">{props.name}</h2>
        </div>
      <div className="extra content" hidden> 
        <p>Specialty: {props.specialty}</p>
        <p>Highest Medal Achieved: {props.highestMedal} medal</p>
        <p>{props.weight} kilos</p>
      </div>
    </div>
  )
}

export default PigCard