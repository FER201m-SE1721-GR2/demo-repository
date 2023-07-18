import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Component/Login';
import Register from './Component/Register';
import Post from './Component/Post';
import HeaderApp from './Component/HeaderNavbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer';
import New from './Component/Home/New';
import Category from './Component/Category';

import Community from './Component/Community';
import PostDetail from './Component/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <HeaderApp />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/new' element={<New />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/post' element={<Post />} ></Route>
        <Route path='/post/detail/:pid' element={<PostDetail/>} ></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/community' element={<Community/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
