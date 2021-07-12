import React from "react"


function Search (props) {


  return (
    <>
    <div>
      <label>Search Something</label>
      <input type="text" value={props.searchInput} onChange={props.updateSearch}></input><br></br>
      
      <label type="checkbox">Greased? </label>
      <input type="checkbox" name="filterGreased" onChange={props.handleFormDataChange} checked={props.formData.filterGreased}></input>

      <label> Sort By name or weight </label>
      <select name="sortBy" onChange={props.handleFormDataChange} value={props.formData.sortBy}>
        <option value="name">Name</option>
        <option value="weight">Weight </option>
      </select>

    </div>
    <hr></hr>
    </>
  )
}

export default Search