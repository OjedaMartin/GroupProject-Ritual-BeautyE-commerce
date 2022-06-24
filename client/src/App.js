import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing.jsx';

import SearchDetail from './Components/SearchDetail';
//import Home from './Components/Home.jsx';
import Details from './Components/Details.jsx'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/SearchDetail/:brand' element={<SearchDetail />} />      {/* VER COMO VA A TRAER EL BRAND O CATEGORY */}
        <Route exact path='/SearchDetail/:name' element={<SearchDetail />} />      {/* VER COMO VA A TRAER EL NAME O SEARCH */}
        <Route exact path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
