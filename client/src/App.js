import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './Components/Landing.jsx';
import SearchDetail from './Components/SearchDetail';
import Details from './Components/Details.jsx'
import FormCreateComponent from './Components/FormCreateComponent'
import Admin from './Admin/Admin'
import Header from "./Components/Header.jsx";
import Footer from "./Components/footer.jsx";


function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/SearchDetail/collection/:category' element={<SearchDetail />} />      {/* VER COMO VA A TRAER EL BRAND O CATEGORY */}
        <Route exact path='/SearchDetail/search/:name' element={<SearchDetail />} />      {/* VER COMO VA A TRAER EL NAME O SEARCH */}
        <Route exact path='/details/:id' element={<Details />} />
        <Route exact path='/create' element={<FormCreateComponent/>} />
        <Route path='/admin/*' element={<Admin/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;