import logo from './logo.svg';
import './App.css';
import { useEffect,useState} from 'react';
import Navbar from './Component/Navbar/Navbar';
import { useEffect } from 'react';
function App() {
    const[slidein,setslidein]=useState(true)
    useEffect(()=>{
      if(window.innerWidth<=768){
        setslidein(false)
      }
    },[])
    const handlesslidein=()=>{
      if(window.innerWidth<=768){
        setslidein((state)=>!state)
      }
    };
  return (
    <div className="App">
      <Navbar/>
      <h1>Hello</h1>
    </div>
    
  );
}

export default App;
