import React from "react"
import PigCard from "./PigCard"



function PigList (props) {

  //sortHelper function
  function alphabetizer (a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      } else {
      return 0;
    };
  }

  const filteredArray = props.formData.filterGreased ? props.hogs.filter(hog => hog.greased === true) : props.hogs
  const sortedArray  = props.formData.sortBy === "weight" ? filteredArray.sort((pig1, pig2) => pig1.weight - pig2.weight) : filteredArray.sort(alphabetizer)


  //sortBy =  , sorting === "name": name, sorting === "weight": weight
  //Last Array: const displayArray = 


  const pigArray = sortedArray.map(hog => <PigCard key={hog.name}
    name={hog.name}
    specialty={hog.specialty}
    greased={hog.greased}
    weight={hog.weight}
    highestMedal={hog["highest medal achieved"]}
    image={hog.image}
  />)


    
    
  return (
    <>
      <h2>Pig List Ya'll</h2>
      <div className = "ui grid container">
        <div className="ui cards">
          {pigArray}
        </div>
      </div>
    </>
    )
  }

  export default PigList