import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Component/Login';
import Register from './Component/Register';
import Post from './Component/Post';
import HeaderApp from './Component/HeaderNavbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer';

function App() {
  return (
      <BrowserRouter>
      <HeaderApp/>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/post' element={<Post />} ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

  );
}

export default App;