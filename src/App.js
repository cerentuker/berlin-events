import './App.css';
import React,{useState,useEffect} from 'react';
import EventList from './components/EventList';
import MyHeader from './components/EventsHeader';
import { EVENT_API_URL } from "./configs";

/**
 * Sorts given two dates based on their 'von' property if exists.
 *
 * @param {string} firstDate
 * @param {string} secondDate
 */
function sortEventsByDate(firstDate, secondDate) {
  if ( firstDate.von && secondDate.von && firstDate.von < secondDate.von ){
    return 1;
  }
  if ( firstDate.von && secondDate.von && firstDate.von > secondDate.von ){
    return -1;
  }
  return 0;
}

/**
 * Functional App componant that is hit during rendering,
 * further componant calls and functionality are directed from here.
 */
function App() {
  const [data,setData]=useState([]);
  const getData=()=> {
    fetch(EVENT_API_URL)
      .then(res => res.json())
      .then(myJson => setData(myJson.index.sort(sortEventsByDate)));
  }
  useEffect(() => {
    getData()
  }, [])
  return (
      <div className="App">
        <MyHeader />
        { data && data.length>0 && data.map((item)=><div><EventList events={data}/></div> )}
      </div>
  );
}

export default App;
