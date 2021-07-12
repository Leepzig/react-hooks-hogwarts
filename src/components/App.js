import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigList from "./PigList";
import Search from "./Search"

// {
//   name: "Babe",
//   specialty: "Being incredibly cute",
//   greased: false,
//   weight: 2.0,
//   "highest medal achieved": "bronze",
//   image:
//     "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwarts/master/public/images/babe.jpg",
// },

function App() {

const [formData, setFormData] = useState({sortBy:"", filterGreased:false})

function handleFormDataChange(e) {
  const  key = e.target.name
  const value = e.target.type === "checkbox" ? e.target.checked : e.target.value 

  setFormData({...formData, [key]:value})
}

const [searchInput, setSearchInput] = useState("")

function updateSearch(e) {
  setSearchInput(e.target.value)
}



  return (
    <div className="App">
      <Nav />
      <Search hogs={hogs} searchInput={searchInput} updateSearch={updateSearch} formData={formData} handleFormDataChange={handleFormDataChange}/>
      <PigList hogs={hogs} formData={formData}/>
    </div>
  );
}

export default App;
