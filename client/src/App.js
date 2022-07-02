import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing.jsx';
import SearchDetail from './Components/SearchDetail';
import Detail from './Components/Detail.jsx'
import FormCreateComponent from './Components/FormCreateComponent'
import Admin from './Admin/Admin'
import Header from "./Components/Header.jsx";
import Footer from "./Components/footer.jsx";
import { LoginButton } from "./Users/LogIn.jsx";
import Menu from "./Users/Menu.jsx";
import { Settings } from "./Users/Settings.jsx";
import { MyOrders } from "./Users/Orders.jsx";

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/SearchDetail/collection/:category' element={<SearchDetail />} />   
        <Route exact path='/SearchDetail/search/:name' element={<SearchDetail />} />     
        <Route exact path='/details/:id' element={<Detail />} />
        <Route exact path='/create' element={<FormCreateComponent/>} />
        <Route path='/admin/*' element={<Admin/>} />
        <Route path='/login' element={<LoginButton/>} />
        <Route path='/user' element={<Menu/>} />
        <Route path="/user/settings" element={<Settings/>} />
        <Route path="/user/myorders" element={<MyOrders/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;