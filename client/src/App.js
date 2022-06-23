import React from "react"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing.jsx';
//import Home from './Components/Home.jsx';
import Details from './Components/Detail.jsx'
import Home from "./Components/homepilot.jsx";

function App() {
  return (
    
    <BrowserRouter>            
        <Routes>        
        <Route exact path='/home' element={ <Home/>}/> 
          <Route exact path='/' element={ <Landing/>}/>       
          <Route exact path='/details/:id' element={ <Details/>}/>    
        </Routes>     
    </BrowserRouter> 
    
  );
}

export default App;
