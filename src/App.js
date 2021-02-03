import './App.css';
import React,{useState,useEffect} from 'react';
import EventList from './components/EventList';

function App() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("https://www.berlin.de/sen/web/service/maerkte-feste/strassen-volksfeste/index.php/index/all.json?q=")
      .then(res => res.json())
      .then(myJson => setData(myJson.index));
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
     {
       data && data.length>0 && data.map((item)=><p><EventList events={data}/> </p> )
     }
    </div>
  );
}

export default App;
