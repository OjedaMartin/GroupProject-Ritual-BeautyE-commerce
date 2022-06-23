import React from "react"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import SignUp from "./Components/SignUp.jsx";
import Registrate from "./Components/registrate.jsx";
//import Home from './Components/Home.jsx';
//import Detail from './Components/Detail.jsx'


function App() {
  return (
    
    <BrowserRouter>            
        <Routes>        
          
          <Route exact path='/' element={ <Registrate/>}/> 

        </Routes>     
    </BrowserRouter> 
    
  );
}

export default App;
