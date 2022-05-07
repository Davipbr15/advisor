import './App.css';
import React,{useState, useEffect} from 'react';
import axios from "axios";

function App() {

  const [frase, setFrase] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:3003/allFrases").then((response)=>{
      setFrase(response.data);
      console.log(response.data);
    })
  
  },[])



  return (
    <div className="App">
    
    </div>
  );

}

export default App;
