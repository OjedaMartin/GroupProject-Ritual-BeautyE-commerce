import React from "react"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing.jsx';
//import Home from './Components/Home.jsx';
//import Detail from './Components/Detail.jsx'


function App() {
  return (
    
    <BrowserRouter>            
        <Routes>        
          <Route exact path='/' element={ <Landing/>}/>         
        </Routes>     
    </BrowserRouter> 
    
  );
}

export default App;
