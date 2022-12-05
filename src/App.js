
import './App.css';

import React, { useState, useEffect} from 'react'; 
import List from './components/List';
import Addlist from './components/Addlist'

//https://www.youtube.com/watch?v=uTP3ffTx_Xs

const getLocalItem = () =>{
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }else{
    return[]
  }
}



function App() {
  
   const [summary,setSummary]= useState(getLocalItem);
  
  
  const updateListHandler = (newsummary) => {

    setSummary([...summary, newsummary])
 
  }

useEffect(() => {
  localStorage.setItem('lists', JSON.stringify(summary));
},[summary]);

const remove =(id)=>{
  console.log(id)
      const updatesummary = summary.filter((summary, index)=>{
          return index !==id
      });

      setSummary(updatesummary);

}

  return (
    <div className="App">

      <h1>List</h1>
      <List className="check" onSave={updateListHandler} ></List>
      <h1>Addlist</h1>
      <Addlist summary={summary} removeList={remove}/>

    </div>
  );
}

export default App;
