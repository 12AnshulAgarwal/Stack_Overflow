import logo from './logo.svg';
import './App.css';
import { useEffect,useState} from 'react';
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
      <Navbar handlesslidein={handlesslidein}/>
    </div> 
  );
}

export default App;
