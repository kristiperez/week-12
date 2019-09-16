import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HikingList from './components/HikingList'
import AddHike from './components/AddHike'


//usually data should flow from parent to child. in this case App is the paretn
function App() {

  const [hikes, setHikes] = useState([])
  // this is your componentdidmount 
  useEffect(() => {
    fetchHikes()
  })

  const fetchHikes = () => {

    fetch('http://localhost:3001/all-locations')
    .then(response => response.json())
    .then(json => {
      setHikes(json)
    })
  }

  //curly braces hikes are local state hikes
  return (
    <div>
    <AddHike />
    <HikingList myhikes = {hikes}/>  
    </div>
  );
}

export default App;
