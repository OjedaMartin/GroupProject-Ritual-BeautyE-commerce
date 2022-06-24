import React from "react"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import Details from './Components/Details.jsx'
// import { createProduct } from "./redux/actions/index.js";
import AdminProduct from "./Components/FormCreateProducts.jsx";


function App() {
  return (
    
    <BrowserRouter>            
        <Routes>        
        <Route exact path='/details/:id' element={ <Details/>}/> 
          <Route exact path='/' element={ <Landing/>}/>   
          <Route exact path='/create' element={ <AdminProduct/>}/>         

        </Routes>     
    </BrowserRouter> 
    
  );
}

export default App;
