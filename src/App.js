import './App.css';
import React,{useState,useEffect} from 'react';
import EventList from './components/EventList';
import MyHeader from './components/EventsHeader';

/**
 * Sorts given two dates based on their 'von' property if exists.
 *
 * @param {string} fistDate
 * @param {string} secondDate
 */
function sortEventsByDate(fistDate, secondDate) {
  if ( fistDate.von && secondDate.von && fistDate.von < secondDate.von ){
    return 1;
  }
  if ( fistDate.von && secondDate.von && fistDate.von > secondDate.von ){
    return -1;
  }
  return 0;
}

function App() {
  const [data,setData]=useState([]);
  const getData=()=> {
    fetch("https://www.berlin.de/sen/web/service/maerkte-feste/strassen-volksfeste/index.php/index/all.json?q=")
      .then(res => res.json())
      .then(myJson => setData(myJson.index.sort(sortEventsByDate)));
  }
  useEffect(()=>{
    getData()
  },[])
  return (
      <div className="App">
        <MyHeader />
        { data && data.length>0 && data.map((item)=><div><EventList events={data}/></div> )}
      </div>
  );
}

export default App;
