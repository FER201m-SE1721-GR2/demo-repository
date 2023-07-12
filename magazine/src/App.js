import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Component/Login';
import Register from './Component/Register';
import Post from './Component/Post';
import HeaderApp from './Component/HeaderNavbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer';
import News from './Component/Home/News';
import Category from './Component/Category';

function App() {
  return (
    <BrowserRouter>
      <HeaderApp />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/news' element={<News />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/post' element={<Post />} ></Route>
        <Route path='/category' element={<Category />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
