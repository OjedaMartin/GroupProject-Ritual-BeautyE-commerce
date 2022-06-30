import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing.jsx';

import SearchDetail from './Components/SearchDetail';
import Details from './Components/Details.jsx'
import FormCreateComponent from './Components/FormCreateComponent'
import AboutUs from './Components/AboutUs.jsx'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/SearchDetail/collection/:category' element={<SearchDetail />} />      {/* VER COMO VA A TRAER EL BRAND O CATEGORY */}
        <Route exact path='/SearchDetail/search/:name' element={<SearchDetail />} />      {/* VER COMO VA A TRAER EL NAME O SEARCH */}
        <Route exact path='/details/:id' element={<Details />} />
        <Route exact path='/create' element={<FormCreateComponent/>} />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='/faq' element={<AboutUs />} />
        <Route exact path='/returns' element={<AboutUs />} />
        <Route exact path='/termsandconditions' element={<AboutUs />} />
        <Route exact path='/privacypolicy' element={<AboutUs />} />
        <Route exact path='/termsofuse' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
//<Route exact path='/SearchDetail/:brand' element={<SearchDetail />} /> 