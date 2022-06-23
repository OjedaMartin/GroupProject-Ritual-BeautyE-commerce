import React from "react"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import Details from './Components/Details.jsx'


function App() {
  return (
    
    <BrowserRouter>            
        <Routes>        
        <Route exact path='/details/:id' element={ <Details/>}/> 
          <Route exact path='/' element={ <Landing/>}/>         
        </Routes>     
    </BrowserRouter> 
    
  );
}

export default App;
